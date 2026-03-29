const http = require('http');
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);

function getArg(name, fallback) {
  const index = args.indexOf(name);
  if (index >= 0 && index < args.length - 1) {
    return args[index + 1];
  }
  return fallback;
}

const host = getArg('--host', '127.0.0.1');
const port = parseInt(getArg('--port', '5500'), 10);
const root = path.resolve(getArg('--root', path.join(__dirname, '..', 'frontend')));

const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

function sendResponse(res, statusCode, body, contentType) {
  res.writeHead(statusCode, {
    'Content-Type': contentType,
    'Cache-Control': 'no-cache'
  });
  res.end(body);
}

function safePathname(urlPath) {
  const decodedPath = decodeURIComponent((urlPath || '/').split('?')[0]);
  const normalizedPath = path.normalize(decodedPath).replace(/^(\.\.[\/\\])+/, '');
  return normalizedPath === path.sep ? 'index.html' : normalizedPath.replace(/^[/\\]+/, '') || 'index.html';
}

const server = http.createServer((req, res) => {
  const relativePath = safePathname(req.url);
  let filePath = path.join(root, relativePath);

  if (relativePath.endsWith(path.sep) || path.extname(filePath) === '') {
    filePath = path.join(filePath, 'index.html');
  }

  if (!filePath.startsWith(root)) {
    sendResponse(res, 403, 'Forbidden', 'text/plain; charset=utf-8');
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      const fallbackPath = path.join(root, 'index.html');
      fs.readFile(fallbackPath, (fallbackError, fallbackData) => {
        if (fallbackError) {
          sendResponse(res, 404, 'Not Found', 'text/plain; charset=utf-8');
          return;
        }

        sendResponse(res, 200, fallbackData, contentTypes['.html']);
      });
      return;
    }

    const extension = path.extname(filePath).toLowerCase();
    sendResponse(res, 200, data, contentTypes[extension] || 'application/octet-stream');
  });
});

server.listen(port, host, () => {
  console.log(`Static frontend server running at http://${host}:${port}`);
  console.log(`Serving files from ${root}`);
});
