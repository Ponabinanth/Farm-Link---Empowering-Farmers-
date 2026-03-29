require('dotenv').config();

if (!process.env.JWT_SECRET) {
  console.error('JWT_SECRET env var is required!');
  process.exit(1);
}

const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');
const prisma = require('./lib/prisma');

const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');

const app = express();
const frontendDir = path.resolve(__dirname, '../../frontend');

app.use(helmet());
app.use(morgan('combined'));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { error: 'Too many requests, try again later.' },
  standardHeaders: true,
  legacyHeaders: false
});
app.use('/api/', limiter);

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true }));

const defaultCorsOrigins = [
  'http://localhost:5500',
  'http://127.0.0.1:5500',
  'http://localhost:5501',
  'http://127.0.0.1:5501',
  'http://localhost:3001',
  'http://127.0.0.1:3001'
];

const configuredCorsOrigins = (process.env.CORS_ORIGIN || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

const allowedCorsOrigins = configuredCorsOrigins.length
  ? configuredCorsOrigins
  : defaultCorsOrigins;

app.use(cors({
  origin(origin, callback) {
    if (!origin) return callback(null, true);
    return callback(null, allowedCorsOrigins.includes(origin));
  },
  credentials: true
}));

app.get('/health', async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({
      status: 'OK',
      timestamp: new Date().toISOString(),
      db: 'connected'
    });
  } catch {
    res.status(500).json({ status: 'ERROR', db: 'disconnected' });
  }
});

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

app.use(express.static(frontendDir));

app.get('*', (req, res) => {
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ error: 'Route not found' });
  }

  return res.sendFile(path.join(frontendDir, 'index.html'));
});

app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(err.status || 500).json({
    error: err.message || 'Something went wrong!'
  });
});

const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, () => {
  console.log(`Farm Backend running on http://localhost:${PORT}`);
  console.log(`Health: http://localhost:${PORT}/health`);
  console.log(`JWT_SECRET: ${process.env.JWT_SECRET ? 'set' : 'missing'}`);
});

async function shutdown(signal) {
  console.log(`${signal} received, shutting down...`);
  server.close(async () => {
    await prisma.$disconnect();
    process.exit(0);
  });
}

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));
