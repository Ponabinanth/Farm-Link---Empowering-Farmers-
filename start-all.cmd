@echo off
setlocal EnableExtensions

set "FRONTEND_PORT=5500"
set "BACKEND_PORT=3001"
set "NO_BROWSER=0"

:parse_args
if "%~1"=="" goto args_done
if /I "%~1"=="/frontendport" (
  set "FRONTEND_PORT=%~2"
  shift
  shift
  goto parse_args
)
if /I "%~1"=="/backendport" (
  set "BACKEND_PORT=%~2"
  shift
  shift
  goto parse_args
)
if /I "%~1"=="/nobrowser" (
  set "NO_BROWSER=1"
  shift
  goto parse_args
)
echo Unknown argument: %~1
exit /b 1

:args_done
for %%I in ("%~f0") do set "REPO_ROOT=%%~dpI"
if "%REPO_ROOT:~-1%"=="\" set "REPO_ROOT=%REPO_ROOT:~0,-1%"
set "BACKEND_DIR=%REPO_ROOT%\backend"
set "FRONTEND_DIR=%REPO_ROOT%\frontend"
set "STATIC_SERVER=%REPO_ROOT%\tools\static-server.js"
set "BACKEND_URL=http://127.0.0.1:%BACKEND_PORT%"
set "FRONTEND_URL=http://127.0.0.1:%FRONTEND_PORT%"
set "CORS_ORIGIN=http://localhost:%FRONTEND_PORT%,http://127.0.0.1:%FRONTEND_PORT%"

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is required but was not found in PATH.
  exit /b 1
)

if not exist "%BACKEND_DIR%\src\server.js" (
  echo Backend entrypoint not found: %BACKEND_DIR%\src\server.js
  exit /b 1
)

if not exist "%FRONTEND_DIR%\index.html" (
  echo Frontend entrypoint not found: %FRONTEND_DIR%\index.html
  exit /b 1
)

if not exist "%STATIC_SERVER%" (
  echo Frontend server script not found: %STATIC_SERVER%
  exit /b 1
)

call :check_port %BACKEND_PORT%
if errorlevel 1 exit /b 1

call :check_port %FRONTEND_PORT%
if errorlevel 1 exit /b 1

echo Starting backend in Command Prompt on port %BACKEND_PORT%...
start "Farm Backend" cmd /k "cd /d ""%BACKEND_DIR%"" && set PORT=%BACKEND_PORT% && set CORS_ORIGIN=%CORS_ORIGIN% && node src\server.js"

echo Starting frontend in Command Prompt on port %FRONTEND_PORT%...
start "Farm Frontend" cmd /k "cd /d ""%REPO_ROOT%"" && node tools\static-server.js --host 127.0.0.1 --port %FRONTEND_PORT% --root ""%FRONTEND_DIR%"""

echo.
echo Backend:  %BACKEND_URL%/health
echo Frontend: %FRONTEND_URL%

if "%NO_BROWSER%"=="1" goto done

start "" "%FRONTEND_URL%/?apiBase=%BACKEND_URL%"

:done
exit /b 0

:check_port
set "TARGET_PORT=%~1"
set "PORT_IN_USE="
for /f "tokens=5" %%P in ('netstat -ano -p tcp ^| findstr /R /C:":%TARGET_PORT% .*LISTENING"') do (
  set "PORT_IN_USE=%%P"
  goto port_found
)
exit /b 0

:port_found
set "PROCESS_NAME=unknown"
for /f "tokens=1" %%N in ('tasklist /FI "PID eq %PORT_IN_USE%" /FO CSV /NH') do (
  set "PROCESS_NAME=%%~N"
  goto have_name
)

:have_name
echo Port %TARGET_PORT% is already in use by PID %PORT_IN_USE% (%PROCESS_NAME%). Stop it or choose another port.
echo Example: start-all.cmd /frontendport 5501
exit /b 1
