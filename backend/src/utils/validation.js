const { z } = require('zod');

const emptyToUndefined = (value) => {
  if (typeof value !== 'string') return value;
  const trimmed = value.trim();
  return trimmed === '' ? undefined : trimmed;
};

const registerSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 chars').max(100),
  email: z.string().trim().email('Invalid email'),
  phone: z.string().trim().min(10, 'Phone too short').max(15),
  password: z.string().trim().min(6, 'Password min 6 chars'),
  role: z.enum(['farmer', 'buyer']).optional(),
});

const loginSchema = z.object({
  email: z.preprocess(emptyToUndefined, z.string().email().optional()),
  phone: z.preprocess(emptyToUndefined, z.string().min(10).max(15).optional()),
  password: z.string().trim().min(6),
}).refine(data => data.email || data.phone, 'Email or phone required');

const productSchema = z.object({
  name: z.string().min(1).max(200),
  price: z.coerce.number().positive('Price must be positive'),
  stock: z.coerce.number().int().nonnegative(),
  category: z.string().max(50).optional(),
  imageUrl: z.string().url().optional(),
  description: z.string().max(1000).optional(),
});

module.exports = {
  registerSchema,
  loginSchema,
  productSchema,
};

