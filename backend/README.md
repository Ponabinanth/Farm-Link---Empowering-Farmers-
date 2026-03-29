# Farm Backend API 🚜

Production-ready Node.js/Express + Prisma API for farm product management.

## ✨ Features
- 🔐 JWT Auth (register/login by email/phone)
- 📦 CRUD Products (public list, owner-only create/update/delete)
- 🔍 Product search/filter by category/pagination
- 🛡️ Security: Helmet, rate limiting, CORS, Zod validation, bcrypt
- 📊 Logging, health checks, graceful shutdown
- 🗄️ SQLite (dev), Prisma ORM

## 🚀 Quick Start

```bash
cd backend
cp .env.example .env
# Edit .env: set JWT_SECRET (required!)
npm install
npx prisma generate
npm run prisma:migrate:dev
npm run seed  # Creates demo@farm.com / demo123
npm run dev
```

**Health**: `http://localhost:3001/health`

## 📋 API Docs

### Auth
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/auth/register` | `{name,email,phone,password,role?}` | - |
| POST | `/api/auth/login` | `{email?,phone?,password}` | - |

### Products
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/products` | `?search=&category=&page=&limit=` | - |
| GET | `/api/products/:id` | Get product details | - |
| POST | `/api/products` | Create product | Bearer |
| PUT | `/api/products/:id` | Update own product | Bearer |
| DELETE | `/api/products/:id` | Delete own product | Bearer |

**Demo Login**: `demo@farm.com` / `demo123`

## 🛠️ Scripts
- `npm run dev` - Development w/ nodemon
- `npm start` - Production
- `npm run prisma:*` - DB management
- `npm run seed` - Demo data

## .env Required
```
JWT_SECRET=your-very-secret-key-here
DATABASE_URL="file:./prisma/dev.db"
PORT=3001
```

## Production
- PostgreSQL/MySQL for DB
- Strong JWT_SECRET (32+ chars)
- Redis for sessions/caching (future)
- PM2/Docker deploy

Built with ❤️ by BLACKBOXAI
