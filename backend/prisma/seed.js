const bcrypt = require('bcryptjs');
const prisma = require('../src/lib/prisma');

async function main() {
  const hashedPassword = await bcrypt.hash(process.env.SEED_PASSWORD || 'demo123', 12);

  const user = await prisma.user.upsert({
    where: { email: 'demo@farm.com' },
    update: {},
    create: {
      name: 'Demo Farmer',
      email: 'demo@farm.com',
      phone: '+1-555-123-4567',
      hashedPassword,
      role: 'farmer'
    }
  });

  await prisma.product.deleteMany({
    where: { userId: user.id }
  });

  await prisma.product.createMany({
    data: [
      {
        name: 'Organic Potatoes',
        price: 25,
        stock: 500,
        category: 'Vegetables',
        imageUrl: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80',
        description: 'Freshly harvested potatoes ready for bulk orders.',
        userId: user.id
      },
      {
        name: 'Red Onions',
        price: 32,
        stock: 1200,
        category: 'Vegetables',
        imageUrl: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=800&q=80',
        description: 'Grade A red onions with excellent shelf life.',
        userId: user.id
      },
      {
        name: 'Golden Wheat',
        price: 28,
        stock: 2000,
        category: 'Cereals',
        imageUrl: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80',
        description: 'Clean wheat stock suitable for mills and traders.',
        userId: user.id
      },
      {
        name: 'Fresh Tomatoes',
        price: 40,
        stock: 300,
        category: 'Vegetables',
        imageUrl: 'https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?auto=format&fit=crop&w=800&q=80',
        description: 'Bright red tomatoes picked for immediate dispatch.',
        userId: user.id
      },
      {
        name: 'Alphonso Mangoes',
        price: 150,
        stock: 450,
        category: 'Fruits',
        imageUrl: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=80',
        description: 'Premium mangoes packed for retail and wholesale buyers.',
        userId: user.id
      },
      {
        name: 'Pearl Millet (Bajra)',
        price: 45,
        stock: 800,
        category: 'Cereals',
        imageUrl: 'https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=800&q=80',
        description: 'Nutritious millet stock with consistent grain quality.',
        userId: user.id
      }
    ]
  });

  console.log('Demo user created:', user.email);
  console.log('Login with: email=demo@farm.com, password=env(SEED_PASSWORD) or "demo123"');
  console.log('Demo products seeded for marketplace and dashboard views');
}

main()
  .catch((error) => {
    console.error('Seed error:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
