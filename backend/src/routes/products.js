const express = require('express');
const prisma = require('../lib/prisma');
const { authMiddleware } = require('../middleware/auth');
const { productSchema } = require('../utils/validation');

const router = express.Router();

const productListSelect = {
  id: true,
  name: true,
  price: true,
  stock: true,
  category: true,
  imageUrl: true,
  description: true,
  userId: true,
  createdAt: true,
  user: { select: { name: true } }
};

// GET /api/products - List products with query support (public)
router.get('/', async (req, res) => {
  try {
    const { category, search, page = 1, limit = 20 } = req.query;
    const parsedPage = Math.max(parseInt(page, 10) || 1, 1);
    const parsedLimit = Math.min(Math.max(parseInt(limit, 10) || 20, 1), 100);
    const skip = (parsedPage - 1) * parsedLimit;

    const where = {};
    if (category) where.category = category;
    if (search) {
      where.OR = [
        { name: { contains: search } },
        { description: { contains: search } }
      ];
    }

    const [products, total] = await Promise.all([
      prisma.product.findMany({
        where,
        select: productListSelect,
        orderBy: { createdAt: 'desc' },
        skip,
        take: parsedLimit
      }),
      prisma.product.count({ where })
    ]);

    res.json({
      products,
      pagination: {
        page: parsedPage,
        limit: parsedLimit,
        total,
        pages: Math.ceil(total / parsedLimit)
      }
    });
  } catch (error) {
    console.error('Get products error:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// GET /api/products/mine - Authenticated user's listings
router.get('/mine', authMiddleware, async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      where: { userId: req.user.userId },
      select: productListSelect,
      orderBy: { createdAt: 'desc' }
    });

    res.json({ products });
  } catch (error) {
    console.error('Get my products error:', error);
    res.status(500).json({ error: 'Failed to fetch your products' });
  }
});

// GET /api/products/:id
router.get('/:id', async (req, res) => {
  try {
    const product = await prisma.product.findUnique({
      where: { id: req.params.id },
      include: { user: { select: { name: true, phone: true } } }
    });

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    console.error('Get product error:', error);
    res.status(500).json({ error: 'Failed to fetch product' });
  }
});

// POST /api/products - Create product (authenticated)
router.post('/', authMiddleware, async (req, res) => {
  try {
    const data = productSchema.parse(req.body);
    const product = await prisma.product.create({
      data: {
        ...data,
        userId: req.user.userId
      },
      include: { user: { select: { name: true } } }
    });

    res.status(201).json({
      message: 'Product created successfully',
      product
    });
  } catch (error) {
    if (error.name === 'ZodError') {
      return res.status(400).json({ error: error.errors[0].message });
    }

    console.error('Create product error:', error);
    res.status(500).json({ error: 'Failed to create product' });
  }
});

// PUT /api/products/:id - Update (owner only)
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const data = productSchema.partial().parse(req.body);

    const product = await prisma.product.findFirst({
      where: {
        id: req.params.id,
        userId: req.user.userId
      }
    });

    if (!product) {
      return res.status(404).json({ error: 'Product not found or access denied' });
    }

    const updatedProduct = await prisma.product.update({
      where: { id: req.params.id },
      data,
      include: { user: { select: { name: true } } }
    });

    res.json({
      message: 'Product updated',
      product: updatedProduct
    });
  } catch (error) {
    if (error.name === 'ZodError') {
      return res.status(400).json({ error: error.errors[0].message });
    }

    console.error('Update product error:', error);
    res.status(500).json({ error: 'Failed to update product' });
  }
});

// DELETE /api/products/:id (owner only)
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const product = await prisma.product.findFirst({
      where: {
        id: req.params.id,
        userId: req.user.userId
      }
    });

    if (!product) {
      return res.status(404).json({ error: 'Product not found or access denied' });
    }

    await prisma.product.delete({ where: { id: req.params.id } });
    res.json({ message: 'Product deleted' });
  } catch (error) {
    console.error('Delete product error:', error);
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

module.exports = router;
