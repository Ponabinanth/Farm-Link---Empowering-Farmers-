param(
  [int]$FrontendPort = 5500,
  [int]$BackendPort = 3001,
  [switch]$NoBrowser
)

$ErrorActionPreference = 'Stop'

function Assert-CommandExists {
  param([Parameter(Mandatory)][string]$Name)
  if (-not (Get-Command $Name -ErrorAction SilentlyContinue)) {
    throw "Missing required command: $Name"
  }
}

function Wait-HttpOk {
  param(
    [Parameter(Mandatory)][string]$Url,
    [int]$TimeoutSeconds = 20
  )

  $deadline = (Get-Date).AddSeconds($TimeoutSeconds)
  do {
    try {
      $status = (Invoke-WebRequest -UseBasicParsing $Url -TimeoutSec 3 -DisableKeepAlive).StatusCode
      if ($status -ge 200 -and $status -lt 400) { return $true }
    }
    catch {
      Start-Sleep -Milliseconds 250
    }
  } while ((Get-Date) -lt $deadline)

  return $false
}

function Assert-PortFree {
  param([Parameter(Mandatory)][int]$Port)
  if (Get-Command 'Get-NetTCPConnection' -ErrorAction SilentlyContinue) {
    $listener = Get-NetTCPConnection -State Listen -LocalPort $Port -ErrorAction SilentlyContinue | Select-Object -First 1
    if ($listener) {
      $processId = $listener.OwningProcess
      $proc = Get-Process -Id $processId -ErrorAction SilentlyContinue | Select-Object -First 1
      $namePart = if ($proc -and $proc.ProcessName) { " ($($proc.ProcessName))" } else { '' }
      throw "Port $Port is already in use by PID $processId$namePart. Stop it or choose another port (ex: -FrontendPort 5501)."
    }
  }
  else {
    try {
      $client = New-Object System.Net.Sockets.TcpClient('127.0.0.1', $Port)
      $client.Close()
      throw "Port $Port is already in use. Stop the existing process and try again."
    }
    catch [System.Net.Sockets.SocketException] {
      # Connection failed -> port is likely free
    }
  }
}

$repoRoot = $PSScriptRoot
$backendDir = Join-Path $repoRoot 'backend'
$frontendDir = Join-Path $repoRoot 'frontend'
$frontendServerScript = Join-Path $repoRoot 'tools\static-server.js'

if (-not (Test-Path (Join-Path $backendDir 'src/server.js'))) {
  throw "Backend entrypoint not found at: $backendDir\\src\\server.js"
}
if (-not (Test-Path (Join-Path $frontendDir 'index.html'))) {
  throw "Frontend entrypoint not found at: $frontendDir\\index.html"
}
if (-not (Test-Path $frontendServerScript)) {
  throw "Frontend server script not found at: $frontendServerScript"
}

Assert-CommandExists 'node'

Assert-PortFree $BackendPort
Assert-PortFree $FrontendPort

$corsOrigins = "http://localhost:$FrontendPort,http://127.0.0.1:$FrontendPort"
$backendBase = "http://127.0.0.1:$BackendPort"
$frontendBase = "http://127.0.0.1:$FrontendPort"

Write-Host "Starting backend (Node) on :$BackendPort ..."
$hadEnvPort = Test-Path Env:PORT
$hadEnvCors = Test-Path Env:CORS_ORIGIN
$prevEnvPort = $env:PORT
$prevEnvCors = $env:CORS_ORIGIN

$env:PORT = "$BackendPort"
$env:CORS_ORIGIN = $corsOrigins
$backend = Start-Process -FilePath node -ArgumentList 'src/server.js' -WorkingDirectory $backendDir -PassThru

if ($hadEnvPort) { $env:PORT = $prevEnvPort } else { Remove-Item Env:PORT -ErrorAction SilentlyContinue }
if ($hadEnvCors) { $env:CORS_ORIGIN = $prevEnvCors } else { Remove-Item Env:CORS_ORIGIN -ErrorAction SilentlyContinue }

Write-Host "Starting frontend (Node static server) on :$FrontendPort ..."
$frontend = Start-Process -FilePath node -ArgumentList $frontendServerScript, '--host', '127.0.0.1', '--port', "$FrontendPort", '--root', $frontendDir -WorkingDirectory $repoRoot -PassThru

try {
  if (-not (Wait-HttpOk "$backendBase/health" 25)) {
    throw "Backend did not become ready at $backendBase/health"
  }
  if (-not (Wait-HttpOk "$frontendBase/index.html" 25)) {
    throw "Frontend did not become ready at $frontendBase/index.html"
  }

  Write-Host "Backend:  $backendBase/health"
  Write-Host "Frontend: $frontendBase"
  Write-Host "Backend PID:  $($backend.Id)"
  Write-Host "Frontend PID: $($frontend.Id)"

  if (-not $NoBrowser) {
    $frontendUrl = "$frontendBase/?apiBase=$([uri]::EscapeDataString($backendBase))"
    Start-Process $frontendUrl | Out-Null
  }

  Write-Host "Press Ctrl+C to stop both."
  while (-not $backend.HasExited -and -not $frontend.HasExited) {
    Start-Sleep -Seconds 1
  }
}
finally {
  if ($backend -and -not $backend.HasExited) {
    Stop-Process -Id $backend.Id -Force -ErrorAction SilentlyContinue
  }
  if ($frontend -and -not $frontend.HasExited) {
    Stop-Process -Id $frontend.Id -Force -ErrorAction SilentlyContinue
  }
}
