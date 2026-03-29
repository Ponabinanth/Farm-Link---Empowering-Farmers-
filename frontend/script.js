document.addEventListener('DOMContentLoaded', () => {
    const cropImages = {
        'Onion': 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=400&q=80',
        'Chilli': 'https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?auto=format&fit=crop&w=400&q=80',
        'Brinjal': 'https://images.unsplash.com/photo-1584789929900-3f93035d9aab?auto=format&fit=crop&w=400&q=80',
        'Ladies Finger': 'https://images.unsplash.com/photo-1628256811302-1c7f0eb60a16?auto=format&fit=crop&w=400&q=80',
        'Carrot': 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=400&q=80',
        'Beetroot': 'https://images.unsplash.com/photo-1546483457-134cf54e3624?auto=format&fit=crop&w=400&q=80',
        'Cabbage': 'https://images.unsplash.com/photo-1555939594-58056f625634?auto=format&fit=crop&w=400&q=80',
        'Cauliflower': 'https://images.unsplash.com/photo-1591118070637-0d1c3099bf89?auto=format&fit=crop&w=400&q=80',
        'Banana': 'https://images.unsplash.com/photo-1543223610-bdcd68f749b7?auto=format&fit=crop&w=400&q=80',
        'Mango': 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=400&q=80',
        'Coconut': 'https://images.unsplash.com/photo-1593941706784-cd01d91d2667?auto=format&fit=crop&w=400&q=80',
        'Turmeric': 'https://images.unsplash.com/photo-1606574995565-b46873ee6ca8?auto=format&fit=crop&w=400&q=80',
        'Pearl Millet': 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAqgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAIDBAYBBwj/xAA7EAACAQMDAgUDAgMHAgcAAAABAgMABBEFEiETMQYiQVFhFDJxgZEjUqEHFUKxwdHwJHIWMzRTYsLh/8QAGQEAAgMBAAAAAAAAAAAAAAAAAQIAAwQF/8QAJREAAgICAgEFAAMBAAAAAAAAAAECEQMhEjFBBCIyUWEUM0IT/9oADAMBAAIRAxEAPwAFJEu7iqsuFq5Kw5HvQ26PkJzyK5sTtTojm5GOw96pSHAOKkkkLZ5wDVZm4Iq1FTY5GqHVObTPs4pwPIpaj/6Bs/zCmh80Jk/rYGzSzXKVbTmFmyh61wo+a32iwAIvGBisfo0Y35I+a21jIIrdSSBXO9TNykdX0sFGNhO4uktoCQeRWN1zVwd7O5C+wP8ASretagSrBXHz8VhL65N1NnPkU+Wq8OLm99FmbL/zWuxl5dyXb+Y4T0UUyNGLhUGSfTFPgid84UEDvitr4V8OSW9/b3d1Ak8Mo2wwlxliRnzA9hj9RW5tRVI57bb5MzFlppuZLYOG2SNhjH5itauDwf1IYkFs6gXBXr78Fx7cjGRg/wBfWtfpmjwRW19dIRbXM84+mQKSMgew7nPp8VfiC3CvJtiIubpIIbSQOemw5aQg9jg5Ptjv7Z3kb6HqjL2/hyOWS2+tRW6krW+2IKGzkbSR78d6N6z4bRHt7GOESb98vQyGlLAHndnG0FQMHnnv6UbnLajqstjOVhgvID5YYi21kOAocDgnJOfj9aIz3Fvbxxw3IX+8oCIwqkPLKCe5bAOSAePzS3atg8mN0XTBpN7BbuqmVmzJLDneN2NqMCOMbvX2rZ20uZCmT5WKnKkVBezXMOpSziaK1RHBlibDzXgHdVGeO4wefXipYJkvYmvI5pXikl2RCVdjKFHIIIB7gn9KoyQUlfk0YcrjKn0W92TgnOKfxUOcnOBz2xTw3FZ7NvG0eRTcHORQ26OQeM/mrc7jA2k8j170NncqcE5yK3R0US2ROwAquTzTnbccdqamCeacrOrnNN1ZttpGnqz5/pVpYwMAfrQzV5Q9wqA8Rrj9afGrminNL2FGuV2uGtcnoxxVsPaMMkCtDPIEhyO9ZzR2wQaM3zYgU/muZN7OtFaM7rl0dm1T5pODj2oTZ2r3NzHAoI3sFLYyF+T8VauUkudQKxxuwQYwgyQPWvQfCOkQ2t1vmXoEAxXUu9TwwyvPb2rZ20uZCmT5WKnKkVBezXMOpSziaK1RHBlibDzXgHdVGeO4wefXipYJkvYmvI5pXikl2RCVdjKFHIIIB7gn9KoyQUlfk0YcrjKn0W92TgnOKfxUOcnOBz2xTw3FZ7NvG0eRTcHORQ26OQeM/mrc7jA2k8j170NncqcE5yK3R0US2ROwAquTzTnbccdqamCeacrOrnNN1ZttpGnqz5/pVpYwMAfrQzV5Q9wqA8Rrj9afGrminNL2FGuV2uGtcnoxxVsPaMMkCtDPIEhyO9ZzR2wQaM3zYgU/muZN7OtFaM7rl0dm1T5pODj2oTZ2r3NzHAoI3sFLYyF+T8VauUkudQKxxuwQYwgyQPWvQfCOkQ2t1vmXoEAxXUu9TwwyvPb2rZ20uZCmT5WKnKkVBezXMOpSziaK1RHBlibDzXgHdVGeO4wefXipYJkvYmvI5pXikl2RCVdjKFHIIIB7gn9KoyQUlfk0YcrjKn0W92TgnOKfxUOcnOBz2xTw3FZ7NvG0eRTcHORQ26OQeM/mrc7jA2k8j170NncqcE5yK3R0US2ROwAquTzTnbccdqamCeacrOrnNN1ZttpGnqz5/pVpYwMAfrQzV5Q9wqA8Rrj9afGrminNL2FGuV2uGtcnoxxVsPaMMkCtDPIEhyO9ZzR2wQaM3zYgU/muZN7OtFaM7rl0dm1T5pODj2oTZ2r3NzHAoI3sFLYyF+T8VauUkudQKxxuwQYwgyQPWvQfCOkQ2t1vmXoEAxXUu9TwwyvPb2rZ20uZCmT5WKnKkVBezXMOpSziaK1RHBlibDzXgHdVGeO4wefXipYJkvYmvI5pXikl2RCVdjKFHIIIB7gn9KoyQUlfk0YcrjKn0W92TgnOKfxUOcnOBz2xTw3FZ7NvG0eRTcHORQ26OQeM/mrc7jA2k8j170NncqcE5yK3R0US2ROwAquTzTnbccdqamCeacrOrnNN1ZttpGnqz5/pVpYwMAfrQzV5Q9wqA8Rrj9afGrminNL2FGuV2uGtcnoxxVsPaMMkCtDPIEhyO9ZzR2wQaM3zYgU/muZN7OtFaM7rl0dm1T5pODj2oTZ2r3NzHAoI3sFLYyF+T8VauUkudQKxxuwQYwgyQPWvQfCOkQ2t1vmXoEAxXUu9TwwyvPb2rZ20uZCmT5WKnKkVBezXMOpSziaK1RHBlibDzXgHdVGeO4wefXipYJkvYmvI5pXikl2RCVdjKFHIIIB7gn9KoyQUlfk0YcrjKn0W92TgnOKfxUOcnOBz2xTw3FZ7NvG0eRTcHORQ26OQeM/mrc7jA2k8j170NncqcE5yK3R0US2ROwAquTzTnbccdqamCeacrOrnNN1ZttpGnqz5/pVpYwMAfrQzV5Q9wqA8Rrj9afGrminNL2FGuV2uGtcnoxxVsPaMMkCtDPIEhyO9ZzR2wQaM3zYgU/muZN7OtFaM7rl0dm1T5pODj2oTZ2r3NzHAoI3sFLYyF+T8VauUkudQKxxuwQYwgyQPWvQfCOkQ2t1vmXoEAxXUu9TwwyvPb2rZ20uZCmT5WKnKkVBezXMOpSziaK1RHBlibDzXgHdVGeO4wefXipYJkvYmvI5pXikl2RCVdjKFHIIIB7gn9KoyQUlfk0YcrjKn0W92TgnOKfxUOcnOBz2xTw3FZ7NvG0eRTcHORQ26OQeM/mrc7jA2k8j170NncqcE5yK3R0US2ROwAquTzT'
    };

    const cropImageKeys = Object.keys(cropImages).sort((a, b) => b.length - a.length);

    const imageForQuery = (query) =>
        `https://source.unsplash.com/featured/400x300/?${encodeURIComponent(query)},crop,plant,farm`;

    const findCropKey = (text) => {
        const lower = (text || '').toLowerCase();
        return cropImageKeys.find((key) => lower.includes(key.toLowerCase()));
    };

    const pickImageUrl = (text, existingUrl) => {
        const existing = (existingUrl || '').toString();
        if (existing.startsWith('data:') || existing.startsWith('blob:')) return existingUrl;
        const cropKey = findCropKey(text);
        return (cropKey && cropImages[cropKey]) || existingUrl || imageForQuery(text);
    };

    // Note: image mapping is applied after `appState` is initialized.

    let appState = {
        carbonCredits: 14.5,
        points: 1250,
        badges: ['Eco-Warrior', 'Top Seller', 'Quick Responder'],
        wallet: 4200,
        isDarkMode: false,
        userRole: 'farmer', // Default role
        userName: 'Rajesh Kumar',
        dailyMission: { task: 'Sell 3 products', progress: 1, total: 3, reward: 50 },
        subscriptions: { count: 2, farms: ['Sunlight Farms', 'Green Valley'] },
        intervals: [],
        livePrices: [
            { name: 'Tomato', price: 30, trend: 'up' },
            { name: 'Onion', price: 25, trend: 'down' },
            { name: 'Potato', price: 20, trend: 'up' },
            { name: 'Wheat', price: 28, trend: 'up' },
            { name: 'Rice', price: 45, trend: 'down' }
        ],
        products: [
            { id: 1, name: 'Organic Potatoes', stock: 500, price: 25, fresh: true, img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT6t7qc-UQ1HSEfDk2uPF8W5qKCIBwEh32ko5aTAtSIWPjUzqFvsF1Yo3BXow_WyekB_h1aB0-yYSlyMHji6w8SOex3915ZRrr07Fcagb8&usqp=CAc', trending: true, category: 'Vegetables' },
            { id: 2, name: 'Red Onions', stock: 1200, price: 32, fresh: true, img: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=800&q=80', trending: false, category: 'Vegetables' },
            { id: 3, name: 'Golden Wheat', stock: 2000, price: 28, fresh: false, img: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80', trending: true, category: 'Cereals' },
            { id: 4, name: 'Fresh Tomatoes', stock: 300, price: 40, fresh: true, img: 'https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?auto=format&fit=crop&w=800&q=80', trending: true, category: 'Vegetables' },
            { id: 5, name: 'Organic Carrots', stock: 150, price: 45, fresh: true, img: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=800&q=80', trending: false, category: 'Vegetables' },
            { id: 6, name: 'Spicy Green Chillies', stock: 80, price: 60, fresh: true, img: 'https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?auto=format&fit=crop&w=800&q=80', trending: true, category: 'Vegetables' },
            { id: 7, name: 'Alphonso Mangoes', stock: 450, price: 150, fresh: true, img: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=80', trending: true, category: 'Fruits' },
            { id: 8, name: 'Premium Basmati Rice', stock: 5000, price: 85, fresh: false, img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80', trending: false, category: 'Cereals' },
            { id: 9, name: 'Red Apples', stock: 200, price: 120, fresh: true, img: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=800&q=80', trending: false, category: 'Fruits' },
            { id: 10, name: 'Pearl Millet (Bajra)', stock: 800, price: 45, fresh: false, img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcST9ASGYUr3VAkqoqMOTsPX0GSOcME9333aBuzECO-B3zXj2xa1Zb0XULFffy66E3yjsdC6z2EHZYWrEreEgZeLgxla99NRHFK6szVHFcBNb41B48Ad4iiJKA&usqp=CAc', trending: false, category: 'Cereals' }
        ],
        deals: [
            { id: 1, name: 'Combo: Potato + Onion', price: 50, discount: '20%', time: '02:45:12', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80' },
            { id: 2, name: 'Flash Sale: Mangoes', price: 120, discount: '30%', time: '00:15:45', img: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=400&q=80' }
        ],
        recommendations: [
            { id: 11, name: 'Organic Fertilizers', price: 450, img: 'https://images.unsplash.com/photo-1592819695396-064b9572a660?auto=format&fit=crop&w=400&q=80' },
            { id: 12, name: 'Hybrid Seeds', price: 800, img: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=400&q=80' }
        ],
        messages: [
            { sender: 'Buyer: Amit', text: 'What is the final price for 500kg Potatoes?', time: '10:30 AM' },
            { sender: 'You', text: 'I can do ₹23/kg for bulk orders.', time: '10:35 AM' }
        ],
        earnings: [5000, 8000, 4000, 12000, 7000, 15000, 9000], // Last 7 days
        spending: [2000, 3000, 1500, 4000, 2500, 5000, 3500],
        feedPosts: [
            { id: 1, user: 'Farmer Sunil', text: 'Just harvested these beautiful organic tomatoes!', img: 'https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?auto=format&fit=crop&w=800&q=80', likes: 24, comments: 5 },
            { id: 2, user: 'AgriExpert Dr. Rao', text: 'Pro-tip: Use neem oil for natural pest control this season.', img: 'https://images.unsplash.com/photo-1592819695396-064b9572a660?auto=format&fit=crop&w=800&q=80', likes: 156, comments: 42 }
        ],
        reels: [
            { id: 1, title: 'Harvesting Wheat', user: '@farm_pro', video: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=400&q=80', likes: '10k' },
            { id: 2, title: 'Tractor Tips', user: '@machinery_guru', video: 'https://images.unsplash.com/photo-1533991390412-234fb3af6a2d?auto=format&fit=crop&w=400&q=80', likes: '5.2k' }
        ],
        buyerRequests: [
            { id: 1, buyer: 'Hotel Grand', item: 'Red Onions', qty: '500kg', date: 'Needed by 25th March' },
            { id: 2, buyer: 'Fresh Mart', item: 'Organic Spinach', qty: '100kg', date: 'Urgent' }
        ],
        nearbyEvents: [
            { id: 1, title: 'Farmer Meetup 2026', location: 'Mandi Ground', date: 'March 25, 10:00 AM' },
            { id: 2, title: 'Agri-Tech Workshop', location: 'Govt Hall', date: 'March 28, 2:00 PM' }
        ],
        cropDetails: [
            { name: 'Rice', tamil: 'நெல் (Nel)', usage: 'Staple Food, Flour', plough: 'Puddling in standing water', type: 'Cereal', water: '1200-1500mm', fertilizer: 'Azolla, FYM', climate: 'Hot & Humid', harvest: '120-150 days', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfZ4w3cK3k7mZ0zJ4zO6e0N0q3zq4X0yZqX0g&usqp=CAU' },
            { name: 'Wheat', tamil: 'கோதுமை (Godhumai)', usage: 'Bread, Pasta', plough: 'Fine pulverized seedbed', type: 'Cereal', water: '450-650mm', fertilizer: 'Green Manure', climate: 'Cool growing, Warm ripening', harvest: '120-150 days', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8vJ0kQ5kL9mPqR5jK8nL9mPqR5jK8nL9mP&usqp=CAU' },
            { name: 'Maize', tamil: 'சோளம் (Cholam)', usage: 'Food, Fodder, Oil', plough: 'Deep summer ploughing', type: 'Cereal', water: '500-800mm', fertilizer: 'Compost, Zinc', climate: 'Semi-arid to sub-humid', harvest: '90-110 days', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8vJ0kQ5kL9mPqR5jK8nL9mPqR5jK8nL9mP&usqp=CAU' },
            { name: 'Finger Millet', tamil: 'கேழ்வரகு (Kezhvaragu)', usage: 'Healthy Porridge, Flour', plough: 'Shallow ploughing', type: 'Millet', water: '350mm', fertilizer: 'Organic compost', climate: 'Tropical', harvest: '110-120 days', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7zKqXzq4X0yZqXzq4X0yZqXzq4X0yZq&usqp=CAU' },
            { name: 'Pearl Millet', tamil: 'கம்பு (Kambu)', usage: 'Food, Fodder', plough: 'Minimal tillage', type: 'Millet', water: '250-400mm', fertilizer: 'Sheep manure', climate: 'Hot & Dry', harvest: '70-90 days', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcST9ASGYUr3VAkqoqMOTsPX0GSOcME9333aBuzECO-B3zXj2xa1Zb0XULFffy66E3yjsdC6z2EHZYWrEreEgZeLgxla99NRHFK6szVHFcBNb41B48Ad4iiJKA&usqp=CAc' },
            { name: 'Tomato', tamil: 'தக்காளி (Thakkali)', usage: 'Cooking, Salads', plough: 'Deep tilth', type: 'Vegetable', water: '400-600mm', fertilizer: 'Vermicompost', climate: 'Warm', harvest: '60-90 days', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6t7qc-UQ1HSEfDk2uPF8W5qKCIBwEh32ko5aTAtSIWPjUzqFvsF1Yo3BXow_WyekB_h1aB0-yYSlyMHji6w8SOex3915ZRrr07Fcagb8&usqp=CAc' },
            { name: 'Potato', tamil: 'உருளைக்கிழங்கு (Urulai Kizhangu)', usage: 'Cooking, Chips', plough: 'Ridge and furrow', type: 'Tuber', water: '500-700mm', fertilizer: 'Neem cake', climate: 'Cool', harvest: '90-120 days', image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=400&q=80' },
            { name: 'Onion', tamil: 'வெங்காயம் (Vengayam)', usage: 'Cooking, Medicine', plough: 'Fine seedbed', type: 'Bulb', water: '350-500mm', fertilizer: 'Poultry manure', climate: 'Mild', harvest: '100-150 days', image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=800&q=80' },
            { name: 'Chilli', tamil: 'மிளகாய் (Milagai)', usage: 'Spice, Sauce', plough: '2-3 harrowings', type: 'Spice', water: '600-900mm', fertilizer: 'Castor cake', climate: 'Warm & Humid', harvest: '60-80 days', image: 'https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?auto=format&fit=crop&w=800&q=80' },
            { name: 'Brinjal', tamil: 'கத்தரிக்காய் (Kathirikai)', usage: 'Cooking', plough: 'Deep ploughing', type: 'Vegetable', water: '500mm', fertilizer: 'Compost', climate: 'Warm', harvest: '90-110 days', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1O0zJ4zO6e0N0q3zq4X0yZqXzq4X0yZqX0g&usqp=CAU' },

            { name: 'Ladies Finger', tamil: 'வெண்டைக்காய் (Vendakkai)', usage: 'Cooking', plough: 'Medium tilth', type: 'Vegetable', water: '400mm', fertilizer: 'Organic manure', climate: 'Hot & Humid', harvest: '45-60 days', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8vJ0kQ5kL9mPqR5jK8nL9mPqR5jK8nL9mP&usqp=CAU' },
            { name: 'Carrot', tamil: 'கேரட் (Carrot)', usage: 'Salad, Juice', plough: 'Very deep tilth', type: 'Root', water: '300-450mm', fertilizer: 'Kelp meal', climate: 'Cool', harvest: '70-100 days', image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=400&q=80' },
            { name: 'Beetroot', tamil: 'பீட்ரூட் (Beetroot)', usage: 'Cooking, Sugar', plough: 'Deep tilth', type: 'Root', water: '300mm', fertilizer: 'Potash rich', climate: 'Cool', harvest: '60-80 days', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6t7qc-UQ1HSEfDk2uPF8W5qKCIBwEh32ko5aTAtSIWPjUzqFvsF1Yo3BX&usqp=CAU' },
            { name: 'Cabbage', tamil: 'முட்டைக்கோஸ் (Muttaikose)', usage: 'Cooking, Salad', plough: 'Medium tilth', type: 'Vegetable', water: '500mm', fertilizer: 'Nitrogen rich', climate: 'Cool', harvest: '90-120 days', image: 'https://images.unsplash.com/photo-1555939594-58056f625634?auto=format&fit=crop&w=400&q=80' },
            { name: 'Cauliflower', tamil: 'காலிஃபிளவர் (Cauliflower)', usage: 'Cooking', plough: 'Fine tilth', type: 'Vegetable', water: '600mm', fertilizer: 'Boron rich', climate: 'Cool & Moist', harvest: '90-110 days', image: 'https://images.unsplash.com/photo-1591118070637-0d1c3099bf89?auto=format&fit=crop&w=400&q=80' },
            { name: 'Banana', tamil: 'வாழை (Vaazhai)', usage: 'Fruit, Leaf usage', plough: 'Deep pits', type: 'Fruit', water: '1500-2000mm', fertilizer: 'Potash, FYM', climate: 'Tropical', harvest: '12-15 months', image: 'https://images.unsplash.com/photo-1543223610-bdcd68f749b7?auto=format&fit=crop&w=400&q=80' },
            { name: 'Mango', tamil: 'மாம்பழம் (Maangai)', usage: 'Fruit, Pickle', plough: 'Deep pits', type: 'Fruit Tree', water: 'Varies', fertilizer: 'Organic mulch', climate: 'Tropical', harvest: 'Perennial', image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=400&q=80' },
            { name: 'Coconut', tamil: 'தென்னை (Thennai)', usage: 'Oil, Water, Food', plough: 'Deep pits', type: 'Plantation', water: 'Regular', fertilizer: 'Salt, Organic', climate: 'Coastal/Tropical', harvest: 'Perennial', image: 'https://images.unsplash.com/photo-1593941706784-cd01d91d2667?auto=format&fit=crop&w=400&q=80' },
            { name: 'Turmeric', tamil: 'மஞ்சள் (Manjal)', usage: 'Spice, Medicine', plough: 'Deep tilth', type: 'Rhizome', water: '700-900mm', fertilizer: 'FYM', climate: 'Hot & Humid', harvest: '7-9 months', image: 'https://images.unsplash.com/photo-1606574995565-b46873ee6ca8?auto=format&fit=crop&w=400&q=80' },

            { name: 'Ginger', tamil: 'இஞ்சி (Inji)', usage: 'Spice, Medicine', plough: 'Ridge method', type: 'Rhizome', water: '800mm', fertilizer: 'Organic', climate: 'Warm & Humid', harvest: '8-10 months' },
            { name: 'Garlic', tamil: 'பூண்டு (Poondu)', usage: 'Spice, Medicine', plough: 'Fine tilth', type: 'Bulb', water: '300mm', fertilizer: 'Organic', climate: 'Cool', harvest: '120-150 days' },
            { name: 'Black Gram', tamil: 'உளுந்து (Ulundu)', usage: 'Pulse, Batter', plough: 'Fine tilth', type: 'Pulse', water: '250-300mm', fertilizer: 'Bio-fertilizer', climate: 'Warm', harvest: '75-90 days' },
            { name: 'Green Gram', tamil: 'பாசிப்பயறு (Pasipayaru)', usage: 'Pulse, Sprouts', plough: 'Minimum tilth', type: 'Pulse', water: '200-250mm', fertilizer: 'Organic', climate: 'Warm', harvest: '65-75 days' },
            { name: 'Red Gram', tamil: 'துவரை (Thuvarai)', usage: 'Pulse, Dhal', plough: 'Deep ploughing', type: 'Pulse', water: '400mm', fertilizer: 'Phosphate rich', climate: 'Dry', harvest: '150-180 days' },
            { name: 'Groundnut', tamil: 'நிலக்கடலை (Verkadalai)', usage: 'Oil, Food', plough: 'Medium tilth', type: 'Oilseed', water: '450-600mm', fertilizer: 'Gypsum', climate: 'Tropical', harvest: '100-120 days' },
            { name: 'Sunflower', tamil: 'சூரியகாந்தி (Suryagandhi)', usage: 'Oil', plough: 'Deep tilth', type: 'Oilseed', water: '500mm', fertilizer: 'Organic', climate: 'Temperate', harvest: '90-100 days' },
            { name: 'Sesame', tamil: 'எள் (Ellu)', usage: 'Oil, Food', plough: 'Fine tilth', type: 'Oilseed', water: '200mm', fertilizer: 'Organic', climate: 'Hot', harvest: '80-100 days' },
            { name: 'Cotton', tamil: 'பருத்தி (Paruthi)', usage: 'Fiber', plough: 'Deep summer', type: 'Fiber', water: '700-1000mm', fertilizer: 'NPK Organic', climate: 'Warm', harvest: '150-180 days' },
            { name: 'Sugarcane', tamil: 'கரும்பு (Karumbu)', usage: 'Sugar, Juice', plough: 'Deep trench', type: 'Cash Crop', water: '1500-2500mm', fertilizer: 'Organic waste', climate: 'Tropical', harvest: '10-12 months' },
            { name: 'Coffee', tamil: 'காபி (Coffee)', usage: 'Beverage', plough: 'Hilly slopes', type: 'Plantation', water: 'Regular', fertilizer: 'Organic mulch', climate: 'Cool & Humid', harvest: 'Perennial' },
            { name: 'Tea', tamil: 'தேயிலை (Tea)', usage: 'Beverage', plough: 'Contour planting', type: 'Plantation', water: 'High rainfall', fertilizer: 'Nitrogen rich', climate: 'Cool & Mist', harvest: 'Perennial' },
            { name: 'Cardamom', tamil: 'ஏலக்காய் (Yelakkai)', usage: 'Spice', plough: 'Shade method', type: 'Spice', water: 'High', fertilizer: 'Organic', climate: 'Tropical Forest', harvest: 'Perennial' },
            { name: 'Black Pepper', tamil: 'மிளகு (Milagu)', usage: 'Spice, Medicine', plough: 'Support trees', type: 'Spice Vine', water: 'High', fertilizer: 'Organic', climate: 'Hot & Wet', harvest: 'Perennial' },
            { name: 'Cinnamon', tamil: 'இலவங்கப்பட்டை (Lavamgapatai)', usage: 'Spice', plough: 'Standard pits', type: 'Spice Tree', water: 'Regular', fertilizer: 'Organic', climate: 'Tropical', harvest: 'Perennial' },
            { name: 'Clove', tamil: 'கிராம்பு (Kirambu)', usage: 'Spice', plough: 'Deep pits', type: 'Spice Tree', water: 'Moderate', fertilizer: 'Organic', climate: 'Humid Tropical', harvest: 'Perennial' },
            { name: 'Papaya', tamil: 'பப்பாளி (Pappali)', usage: 'Fruit', plough: 'Raised beds', type: 'Fruit', water: 'Moderate', fertilizer: 'Organic', climate: 'Tropical', harvest: '9-10 months' },
            { name: 'Guava', tamil: 'கொய்யா (Koyya)', usage: 'Fruit', plough: 'Standard pits', type: 'Fruit', water: 'Low to Mod', fertilizer: 'Organic', climate: 'Tropical', harvest: 'Perennial' },
            { name: 'Pomegranate', tamil: 'மாதுளை (Mathulai)', usage: 'Fruit', plough: 'Light soil', type: 'Fruit', water: 'Low', fertilizer: 'Organic', climate: 'Arid', harvest: 'Perennial' },
            { name: 'Lemon', tamil: 'எலுமிச்சை (Elumichai)', usage: 'Fruit, Juice', plough: 'Well drained', type: 'Citrus', water: 'Regular', fertilizer: 'Organic', climate: 'Warm', harvest: 'Perennial' },
            { name: 'Orange', tamil: 'ஆரஞ்சு (Orange)', usage: 'Fruit', plough: 'Standard pits', type: 'Citrus', water: 'Regular', fertilizer: 'Organic', climate: 'Sub-tropical', harvest: 'Perennial' },
            { name: 'Grapes', tamil: 'திராட்சை (Thiratchai)', usage: 'Fruit, Wine', plough: 'Trellis system', type: 'Vine', water: 'Moderate', fertilizer: 'Organic', climate: 'Dry & Warm', harvest: 'Perennial' },
            { name: 'Watermelon', tamil: 'தர்பூசணி (Tharpusani)', usage: 'Fruit', plough: 'Flat beds', type: 'Creeper', water: 'Moderate', fertilizer: 'Organic', climate: 'Hot', harvest: '80-100 days' },
            { name: 'Muskmelon', tamil: 'முலாம் பழம் (Mulam Pazham)', usage: 'Fruit', plough: 'Flat beds', type: 'Creeper', water: 'Moderate', fertilizer: 'Organic', climate: 'Hot', harvest: '70-90 days' },
            { name: 'Pumpkin', tamil: 'பூசணிக்காய் (Poosanikai)', usage: 'Vegetable', plough: 'Pit method', type: 'Creeper', water: 'Regular', fertilizer: 'Organic', climate: 'Warm', harvest: '90-120 days' },
            { name: 'Bottle Gourd', tamil: 'சுரைக்காய் (Suraikai)', usage: 'Vegetable', plough: 'Pit method', type: 'Creeper', water: 'Regular', fertilizer: 'Organic', climate: 'Warm', harvest: '60-70 days' },
            { name: 'Bitter Gourd', tamil: 'பாகற்காய் (Pavakkai)', usage: 'Vegetable', plough: 'Pandal system', type: 'Creeper', water: 'Regular', fertilizer: 'Organic', climate: 'Warm', harvest: '50-60 days' },
            { name: 'Snake Gourd', tamil: 'புடலங்காய் (Pudalangai)', usage: 'Vegetable', plough: 'Pandal system', type: 'Creeper', water: 'Regular', fertilizer: 'Organic', climate: 'Warm', harvest: '60-70 days' },
            { name: 'Ridge Gourd', tamil: 'பீர்க்கங்காய் (Peerkangai)', usage: 'Vegetable', plough: 'Pandal system', type: 'Creeper', water: 'Regular', fertilizer: 'Organic', climate: 'Warm', harvest: '50-60 days' },
            { name: 'Ash Gourd', tamil: 'சாம்பல் பூசணி (Sambal Poosani)', usage: 'Vegetable', plough: 'Flat beds', type: 'Creeper', water: 'Regular', fertilizer: 'Organic', climate: 'Warm', harvest: '90-120 days' },
            { name: 'Cucumber', tamil: 'வெள்ளரிக்காய் (Vellarikai)', usage: 'Salad', plough: 'Flat beds', type: 'Creeper', water: 'High', fertilizer: 'Organic', climate: 'Warm', harvest: '45-60 days' },
            { name: 'Spinach', tamil: 'கீரை (Keerai)', usage: 'Vegetable', plough: 'Fine tilth', type: 'Leafy', water: 'Regular', fertilizer: 'Nitrogen organic', climate: 'Cool to Warm', harvest: '30-40 days' },
            { name: 'Moringa', tamil: 'முருங்கை (Murungai)', usage: 'Vegetable, Medicine', plough: 'Deep pits', type: 'Tree', water: 'Low', fertilizer: 'Organic', climate: 'Hot', harvest: '6-8 months' },
            { name: 'Curry Leaf', tamil: 'கறிவேப்பிலை (Kariveppilai)', usage: 'Spice', plough: 'Standard pits', type: 'Tree', water: 'Moderate', fertilizer: 'Organic', climate: 'Warm', harvest: 'Perennial' },
            { name: 'Coriander', tamil: 'மல்லி (Malli)', usage: 'Spice, Leaf', plough: 'Fine tilth', type: 'Leafy/Spice', water: 'Regular', fertilizer: 'Organic', climate: 'Cool', harvest: '40-50 days' },
            { name: 'Mint', tamil: 'புதினா (Pudina)', usage: 'Spice, Leaf', plough: 'Moist soil', type: 'Leafy', water: 'High', fertilizer: 'Organic', climate: 'Cool & Moist', harvest: '30-45 days' },
            { name: 'Fenugreek', tamil: 'வெந்தயம் (Vendhayam)', usage: 'Spice, Leaf', plough: 'Fine tilth', type: 'Leafy/Spice', water: 'Moderate', fertilizer: 'Organic', climate: 'Cool', harvest: '25-30 days' },
            { name: 'Aloe Vera', tamil: 'சோற்றுக்கற்றாழை (Sotru Katralai)', usage: 'Medicine, Cosmetic', plough: 'Well drained', type: 'Medicinal', water: 'Low', fertilizer: 'Organic', climate: 'Arid', harvest: 'Perennial' },
            { name: 'Tulsi', tamil: 'துளசி (Tulsi)', usage: 'Medicine, Religious', plough: 'Pot/Bed', type: 'Medicinal', water: 'Regular', fertilizer: 'Organic', climate: 'Warm', harvest: 'Perennial' },
            { name: 'Neem', tamil: 'வேம்பு (Vembu)', usage: 'Medicine, Pesticide', plough: 'Deep pits', type: 'Tree', water: 'Low', fertilizer: 'Natural', climate: 'Hot', harvest: 'Perennial' },
            { name: 'Amla', tamil: 'நெல்லிக்காய் (Nellikai)', usage: 'Fruit, Medicine', plough: 'Standard pits', type: 'Tree', water: 'Low', fertilizer: 'Organic', climate: 'Tropical', harvest: 'Perennial' },
            { name: 'Jackfruit', tamil: 'பலாப்பழம் (Pala Pazham)', usage: 'Fruit, Vegetable', plough: 'Deep pits', type: 'Tree', water: 'Moderate', fertilizer: 'Organic', climate: 'Tropical', harvest: 'Perennial' },
            { name: 'Custard Apple', tamil: 'சீதாப்பழம் (Seetha Pazham)', usage: 'Fruit', plough: 'Light soil', type: 'Tree', water: 'Low', fertilizer: 'Organic', climate: 'Tropical', harvest: 'Perennial' },
            { name: 'Sapota', tamil: 'சப்போட்டா (Sapota)', usage: 'Fruit', plough: 'Standard pits', type: 'Tree', water: 'Moderate', fertilizer: 'Organic', climate: 'Tropical', harvest: 'Perennial' },
            { name: 'Rose', tamil: 'ரோஜா (Rosa)', usage: 'Flower, Perfume', plough: 'Pruning focus', type: 'Flower', water: 'Regular', fertilizer: 'Organic mulch', climate: 'Cool to Warm', harvest: 'Perennial' },
            { name: 'Jasmine', tamil: 'மல்லிகை (Malligai)', usage: 'Flower', plough: 'Shrub method', type: 'Flower', water: 'Regular', fertilizer: 'Organic', climate: 'Warm', harvest: 'Perennial' },
            { name: 'Marigold', tamil: 'சாமந்தி (Samanthi)', usage: 'Flower, Pesticide', plough: 'Bed method', type: 'Flower', water: 'Moderate', fertilizer: 'Organic', climate: 'Warm', harvest: '60-70 days' },
            { name: 'Crossandra', tamil: 'கனகாம்பரம் (Kanakambaram)', usage: 'Flower', plough: 'Bed method', type: 'Flower', water: 'Regular', fertilizer: 'Organic', climate: 'Warm', harvest: 'Perennial' },
            { name: 'Chrysanthemum', tamil: 'சாமந்தி (Sevanthi)', usage: 'Flower', plough: 'Bed method', type: 'Flower', water: 'Moderate', fertilizer: 'Organic', climate: 'Cool', harvest: '90-100 days' },
            { name: 'Rubber', tamil: 'ரப்பர் (Rubber)', usage: 'Industrial', plough: 'Hilly slopes', type: 'Plantation', water: 'High', fertilizer: 'Organic', climate: 'Hot & Wet', harvest: 'Perennial' },
            { name: 'Areca Nut', tamil: 'பாக்கு (Paaku)', usage: 'Chewing, Religious', plough: 'Standard pits', type: 'Plantation', water: 'High', fertilizer: 'Organic', climate: 'Humid', harvest: 'Perennial' },
            { name: 'Cashew', tamil: 'முந்திரி (Andi Paruppu)', usage: 'Nut', plough: 'Waste lands', type: 'Tree', water: 'Low', fertilizer: 'Organic', climate: 'Hot & Humid', harvest: 'Perennial' },
            { name: 'Cocoa', tamil: 'கோகோ (Cocoa)', usage: 'Chocolate', plough: 'Intercrop', type: 'Plantation', water: 'High', fertilizer: 'Organic', climate: 'Hot & Humid', harvest: 'Perennial' },
            { name: 'Tobacco', tamil: 'புகையிலை (Pogaiyilai)', usage: 'Industrial', plough: 'Fine tilth', type: 'Cash Crop', water: 'Moderate', fertilizer: 'Organic', climate: 'Warm', harvest: '100-120 days' },
            { name: 'Betel Leaf', tamil: 'வெற்றிலை (Vetrillai)', usage: 'Chewing', plough: 'Support system', type: 'Vine', water: 'High', fertilizer: 'Organic', climate: 'Warm & Humid', harvest: 'Perennial' },
            { name: 'Vanilla', tamil: 'வெனிலா (Vanilla)', usage: 'Flavor', plough: 'Shade Vine', type: 'Orchid', water: 'Moderate', fertilizer: 'Organic', climate: 'Hot & Humid', harvest: 'Perennial' },
            { name: 'Nutmeg', tamil: 'ஜாதிக்காய் (Jathikai)', usage: 'Spice', plough: 'Deep pits', type: 'Spice Tree', water: 'Regular', fertilizer: 'Organic', climate: 'Humid', harvest: 'Perennial' },
            { name: 'Pepper', tamil: 'மிளகு (Milagu)', usage: 'Spice', plough: 'Vine support', type: 'Spice', water: 'High', fertilizer: 'Organic', climate: 'Hot & Wet', harvest: 'Perennial' },
            { name: 'Cumin', tamil: 'சீரகம் (Seeragam)', usage: 'Spice', plough: 'Fine tilth', type: 'Spice', water: 'Low', fertilizer: 'Organic', climate: 'Cool & Dry', harvest: '90-110 days' },
            { name: 'Fennel', tamil: 'சோம்பு (Soambu)', usage: 'Spice', plough: 'Fine tilth', type: 'Spice', water: 'Moderate', fertilizer: 'Organic', climate: 'Cool', harvest: '150-160 days' },
            { name: 'Mustard', tamil: 'கடுகு (Kadugu)', usage: 'Oil, Spice', plough: 'Fine tilth', type: 'Oilseed', water: 'Low', fertilizer: 'Organic', climate: 'Cool', harvest: '100-110 days' },
            { name: 'Castor', tamil: 'ஆமணக்கு (Amanakku)', usage: 'Oil', plough: 'Rough tilth', type: 'Oilseed', water: 'Low', fertilizer: 'Organic', climate: 'Warm', harvest: '150-180 days' },
            { name: 'Soybean', tamil: 'சோயா (Soybean)', usage: 'Oil, Protein', plough: 'Medium tilth', type: 'Oilseed', water: '450mm', fertilizer: 'Organic', climate: 'Warm', harvest: '90-100 days' },
            { name: 'Sunflower', tamil: 'சூரியகாந்தி (Suryagandhi)', usage: 'Oil', plough: 'Deep tilth', type: 'Oilseed', water: 'Moderate', fertilizer: 'Organic', climate: 'Warm', harvest: '90-100 days' },
            { name: 'Linseed', tamil: 'ஆளி விதை (Ali Vidhai)', usage: 'Oil, Fiber', plough: 'Fine tilth', type: 'Oilseed', water: 'Low', fertilizer: 'Organic', climate: 'Cool', harvest: '120-130 days' },
            { name: 'Niger', tamil: 'பயறு (Niger)', usage: 'Oil', plough: 'Minimum tilth', type: 'Oilseed', water: 'Low', fertilizer: 'Organic', climate: 'Warm', harvest: '100-110 days' },
            { name: 'Safflower', tamil: 'குசும்பா (Kusumba)', usage: 'Oil', plough: 'Medium tilth', type: 'Oilseed', water: 'Low', fertilizer: 'Organic', climate: 'Dry', harvest: '120-150 days' },
            { name: 'Pea', tamil: 'பட்டாணி (Pattani)', usage: 'Pulse, Vegetable', plough: 'Fine tilth', type: 'Pulse', water: 'Moderate', fertilizer: 'Organic', climate: 'Cool', harvest: '60-90 days' },
            { name: 'Chickpea', tamil: 'கொண்டைக்கடலை (Kondakadalai)', usage: 'Pulse', plough: 'Rough tilth', type: 'Pulse', water: 'Low', fertilizer: 'Organic', climate: 'Cool & Dry', harvest: '90-120 days' },
            { name: 'Lentil', tamil: 'பருப்பு (Paruppu)', usage: 'Pulse', plough: 'Fine tilth', type: 'Pulse', water: 'Low', fertilizer: 'Organic', climate: 'Cool', harvest: '110-130 days' },
            { name: 'Horse Gram', tamil: 'கொள்ளு (Kollu)', usage: 'Pulse, Fodder', plough: 'Minimal tilth', type: 'Pulse', water: 'Very Low', fertilizer: 'None/Organic', climate: 'Dry', harvest: '120 days' },
            { name: 'Cowpea', tamil: 'காராமணி (Karamani)', usage: 'Pulse, Vegetable', plough: 'Medium tilth', type: 'Pulse', water: 'Moderate', fertilizer: 'Organic', climate: 'Warm', harvest: '60-90 days' },
            { name: 'Cluster Bean', tamil: 'கொத்தவரங்காய் (Kothavarangai)', usage: 'Vegetable, Gum', plough: 'Fine tilth', type: 'Vegetable', water: 'Low', fertilizer: 'Organic', climate: 'Hot', harvest: '60-90 days' },
            { name: 'Yam', tamil: 'சேனைக்கிழங்கு (Senai Kizhangu)', usage: 'Tuber', plough: 'Deep pits', type: 'Tuber', water: 'Moderate', fertilizer: 'Organic', climate: 'Warm & Humid', harvest: '8-9 months' },
            { name: 'Colocasia', tamil: 'சேப்பங்கிழங்கு (Seppan Kizhangu)', usage: 'Tuber', plough: 'Ridge method', type: 'Tuber', water: 'High', fertilizer: 'Organic', climate: 'Hot & Humid', harvest: '6-7 months' },
            { name: 'Sweet Potato', tamil: 'சர்க்கரைவள்ளி (Sarkaravalli)', usage: 'Tuber', plough: 'Ridge method', type: 'Tuber', water: 'Moderate', fertilizer: 'Organic', climate: 'Warm', harvest: '4 months' },
            { name: 'Tapioca', tamil: 'மரவள்ளிக்கிழங்கு (Maravalli)', usage: 'Tuber, Starch', plough: 'Mound method', type: 'Tuber', water: 'Low', fertilizer: 'Organic', climate: 'Hot & Humid', harvest: '8-10 months' },
            { name: 'Radish', tamil: 'முள்ளங்கி (Mullangi)', usage: 'Vegetable', plough: 'Fine tilth', type: 'Root', water: 'Regular', fertilizer: 'Organic', climate: 'Cool', harvest: '45 days' },
            { name: 'Knol Khol', tamil: 'நூல் கோல் (Nool Khol)', usage: 'Vegetable', plough: 'Fine tilth', type: 'Vegetable', water: 'Moderate', fertilizer: 'Organic', climate: 'Cool', harvest: '60 days' },
            { name: 'Capsicum', tamil: 'குடைமிளகாய் (Capsicum)', usage: 'Vegetable', plough: 'Fine tilth', type: 'Vegetable', water: 'Regular', fertilizer: 'Organic', climate: 'Cool', harvest: '70-80 days' },
            { name: 'Sweet Corn', tamil: 'இனிப்பு சோளம் (Sweet Corn)', usage: 'Food', plough: 'Medium tilth', type: 'Cereal', water: 'Regular', fertilizer: 'Organic', climate: 'Warm', harvest: '75-85 days' }
        ]
    };

    // --- Runtime state (non-persistent) ---
    appState.currentView = appState.currentView || 'home';
    appState.marketplaceFilter = appState.marketplaceFilter || 'all';
    appState.currentUserId = appState.currentUserId || '';
    appState.favorites = Array.isArray(appState.favorites) ? appState.favorites.map((id) => String(id)) : [];
    appState.basket = Array.isArray(appState.basket) ? appState.basket : [];
    appState.myProducts = Array.isArray(appState.myProducts) ? appState.myProducts : [];
    appState.aiMessages = Array.isArray(appState.aiMessages) ? appState.aiMessages : [
        { sender: 'AI', text: 'Hello! I am your AI Crop Advisor. Ask me about crops, markets, or farming tips.', time: '' }
    ];

    // --- Apply local/remote image mapping ---
    if (Array.isArray(appState.cropDetails)) {
        appState.cropDetails = appState.cropDetails.map(crop => ({
            ...crop,
            image: pickImageUrl(crop.name, crop.image)
        }));
    }

    if (Array.isArray(appState.products)) {
        appState.products = appState.products.map(p => ({
            ...p,
            img: pickImageUrl(p.name, p.img)
        }));
    }

    if (Array.isArray(appState.myProducts)) {
        appState.myProducts = appState.myProducts.map(p => ({
            ...p,
            img: pickImageUrl(p.name, p.img)
        }));
    }

    if (Array.isArray(appState.deals)) {
        appState.deals = appState.deals.map(d => ({
            ...d,
            img: pickImageUrl(d.name, d.img)
        }));
    }

    if (Array.isArray(appState.recommendations)) {
        appState.recommendations = appState.recommendations.map(r => ({
            ...r,
            img: pickImageUrl(r.name, r.img)
        }));
    }

    if (Array.isArray(appState.feedPosts)) {
        appState.feedPosts = appState.feedPosts.map(post => ({
            ...post,
            img: pickImageUrl(post.text, post.img)
        }));
    }

    // --- DOM Elements ---
    const authPage = document.getElementById('auth-page'),
        loginForm = document.getElementById('login-form'),
        registerForm = document.getElementById('register-form'),
        showRegister = document.getElementById('show-register'),
        showLogin = document.getElementById('show-login'),
        loginBtn = document.getElementById('login-btn'),
        registerBtn = document.getElementById('register-btn'),
        authServerStatus = document.getElementById('auth-server-status'),
        authServerPill = document.getElementById('auth-server-pill'),
        authServerText = document.getElementById('auth-server-text'),
        retryServerBtn = document.getElementById('retry-server-btn'),
        logoutBtn = document.getElementById('logout-btn'),
        dashboard = document.getElementById('dashboard'),
        contentArea = document.getElementById('content-area'),
        navItems = document.querySelectorAll('.nav-item'),
        userDisplayName = document.getElementById('user-display-name'),
        smartSearch = document.getElementById('smart-search'),
        voiceTrigger = document.getElementById('voice-trigger'),
        voiceVisualizer = document.getElementById('voice-visualizer'),
        productModal = document.getElementById('product-modal'),
        invoiceModal = document.getElementById('invoice-modal'),
        invoiceContent = document.getElementById('invoice-content'),
        chatWindow = document.getElementById('chat-window'),
        closeChat = document.getElementById('close-chat'),
        sendChatBtn = document.getElementById('send-chat'),
        chatInputField = document.getElementById('chat-input-field'),
        chatMessages = document.getElementById('chat-messages'),
        notifPopup = document.getElementById('notification-popup'),
        notifMsg = document.getElementById('notification-msg'),
        themeToggle = document.getElementById('theme-toggle');

    // --- Real Backend Auth + Product API ---
    const urlParams = new URLSearchParams(window.location.search);
    const apiBaseFromQuery = urlParams.get('apiBase') || urlParams.get('api');
    const apiPortFromQuery = urlParams.get('apiPort');
    const defaultApiBase = window.location.protocol === 'file:'
        ? 'http://127.0.0.1:3001'
        : `${window.location.protocol}//${window.location.hostname}:3001`;
    const API_BASE = apiBaseFromQuery
        ? apiBaseFromQuery
        : apiPortFromQuery
            ? `${window.location.protocol}//${window.location.hostname}:${apiPortFromQuery}`
            : defaultApiBase;
    const HEALTHCHECK_URL = `${API_BASE}/health`;

    const fetchWithTimeout = async (url, options = {}, timeoutMs = 8000) => {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), timeoutMs);

        try {
            return await fetch(url, { ...options, signal: controller.signal });
        } finally {
            clearTimeout(timer);
        }
    };

    const parseJsonSafely = async (response) => {
        const text = await response.text();
        if (!text) return {};

        try {
            return JSON.parse(text);
        } catch (error) {
            console.error('Failed to parse API response:', error);
            return {};
        }
    };

    const normalizePhone = (value) => (value || '').replace(/[^\d]/g, '');
    const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    const setButtonState = (button, isBusy, idleLabel, busyLabel) => {
        if (!button) return;
        button.disabled = isBusy;
        button.textContent = isBusy ? busyLabel : idleLabel;
    };

    const setAuthServerState = (state, message) => {
        if (authServerStatus) {
            authServerStatus.dataset.state = state;
        }

        if (authServerPill) {
            authServerPill.textContent = state === 'online'
                ? 'Server online'
                : state === 'offline'
                    ? 'Server offline'
                    : 'Checking server...';
        }

        if (authServerText) {
            authServerText.textContent = message;
        }
    };

    const checkAuthServer = async ({ silent = false } = {}) => {
        setAuthServerState('checking', `Connecting to ${API_BASE}...`);

        try {
            const response = await fetchWithTimeout(HEALTHCHECK_URL, {
                headers: { Accept: 'application/json' }
            }, 4000);
            const data = await parseJsonSafely(response);

            if (!response.ok) {
                throw new Error(data.error || 'Health check failed');
            }

            const databaseState = data.db === 'connected' ? 'Database connected.' : 'Database unavailable.';
            setAuthServerState('online', `Connected to ${API_BASE}. ${databaseState}`);
            return true;
        } catch (error) {
            console.error('Backend health check failed:', error);
            setAuthServerState('offline', `Cannot reach ${API_BASE}. Start the backend server on port 3001 and try again.`);
            if (!silent) {
                showPopupNotification('Backend server is not reachable right now.');
            }
            return false;
        }
    };

    const showAuthForm = (mode = 'login') => {
        const isRegisterMode = mode === 'register';

        if (loginForm) loginForm.style.display = isRegisterMode ? 'none' : 'block';
        if (registerForm) registerForm.style.display = isRegisterMode ? 'block' : 'none';

        const focusTarget = isRegisterMode
            ? document.getElementById('reg-name')
            : document.getElementById('login-id');
        focusTarget?.focus();
    };

    const setAuthVisibility = (isSignedIn) => {
        if (dashboard) dashboard.style.display = isSignedIn ? 'flex' : 'none';
        if (authPage) {
            authPage.style.display = isSignedIn ? 'none' : 'flex';
            authPage.style.opacity = '1';
        }
    };

    const setCurrentUser = (user) => {
        appState.userName = user?.name || '';
        appState.userRole = user?.role || 'farmer';
        appState.currentUserId = user?.id || '';

        if (userDisplayName) {
            userDisplayName.textContent = appState.userName || 'Farmer';
        }
    };

    const clearCurrentUser = () => {
        appState.userName = '';
        appState.userRole = 'farmer';
        appState.currentUserId = '';
        appState.myProducts = [];

        if (userDisplayName) {
            userDisplayName.textContent = 'Farmer';
        }
    };

    const completeAuth = async (data, successMessage) => {
        localStorage.setItem('jwt', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        setCurrentUser(data.user);
        await refreshProducts({ rerender: false, showErrors: true });

        if (loginForm?.reset) loginForm.reset();
        if (registerForm?.reset) registerForm.reset();

        if (authPage) authPage.style.opacity = '0';
        setTimeout(() => {
            setAuthVisibility(true);
            navigateTo('home');
            showPopupNotification(successMessage);
        }, 200);
    };

    const getAuthToken = () => localStorage.getItem('jwt') || '';

    const getJsonHeaders = (includeAuth = false) => {
        const headers = { 'Content-Type': 'application/json' };
        if (includeAuth && getAuthToken()) {
            headers.Authorization = `Bearer ${getAuthToken()}`;
        }
        return headers;
    };

    const normalizeProduct = (product) => {
        const createdAt = product?.createdAt ? new Date(product.createdAt) : null;
        const sevenDaysMs = 7 * 24 * 60 * 60 * 1000;

        return {
            ...product,
            id: String(product.id),
            userId: product.userId ? String(product.userId) : '',
            category: product.category || guessCategory(product.name),
            img: pickImageUrl(product.name, product.imageUrl || product.img),
            imageUrl: product.imageUrl || product.img || pickImageUrl(product.name),
            fresh: typeof product.fresh === 'boolean'
                ? product.fresh
                : !!(createdAt && (Date.now() - createdAt.getTime()) < sevenDaysMs),
            trending: typeof product.trending === 'boolean'
                ? product.trending
                : Number(product.stock || 0) > 0 && Number(product.stock || 0) <= 500,
            sellerName: product.user?.name || product.sellerName || 'Farm Link Seller'
        };
    };

    const mapProducts = (products) => Array.isArray(products)
        ? products.map(normalizeProduct)
        : [];

    const refreshProducts = async ({ rerender = true, showErrors = false } = {}) => {
        try {
            const publicResponse = await fetch(`${API_BASE}/api/products?limit=100`);
            const publicData = await parseJsonSafely(publicResponse);

            if (!publicResponse.ok) {
                throw new Error(publicData.error || 'Failed to load marketplace products');
            }

            appState.products = mapProducts(publicData.products);

            if (getAuthToken()) {
                const mineResponse = await fetch(`${API_BASE}/api/products/mine`, {
                    headers: getJsonHeaders(true)
                });
                const mineData = await parseJsonSafely(mineResponse);

                if (mineResponse.ok) {
                    appState.myProducts = mapProducts(mineData.products);
                } else if (mineResponse.status === 401) {
                    appState.myProducts = [];
                } else {
                    throw new Error(mineData.error || 'Failed to load your products');
                }
            } else {
                appState.myProducts = [];
            }

            if (rerender && dashboard && dashboard.style.display !== 'none' && appState.currentView) {
                navigateTo(appState.currentView);
            }
        } catch (error) {
            console.error('Product sync failed:', error);
            if (showErrors) {
                showPopupNotification(error.message || 'Failed to load products');
            }
        }
    };

    const initAuth = () => {
        const token = getAuthToken();
        const savedUser = localStorage.getItem('user');

        if (!token || !savedUser) {
            setAuthVisibility(false);
            showAuthForm('login');
            return;
        }

        try {
            const user = JSON.parse(savedUser);
            setCurrentUser(user);
            setAuthVisibility(true);
            navigateTo('home');
            refreshProducts({ rerender: true, showErrors: false });
            showPopupNotification(`Welcome back, ${user.name}!`);
        } catch (error) {
            console.error('Failed to restore auth session:', error);
            localStorage.removeItem('jwt');
            localStorage.removeItem('user');
            clearCurrentUser();
            setAuthVisibility(false);
            showAuthForm('login');
        }
    };

    // Real login API
    const handleLogin = async (e) => {
        if (e) e.preventDefault();
        const loginIdEl = document.getElementById('login-id');
        if (!loginIdEl) {
            console.error("Login input element not found");
            return;
        }
        const loginId = loginIdEl.value.trim();
        const password = document.getElementById('login-pass')?.value?.trim() || '';
        const isEmailLogin = loginId.includes('@');
        const email = isEmailLogin ? loginId.toLowerCase() : '';
        const phone = isEmailLogin ? '' : normalizePhone(loginId);

        if (!loginId || !password) {
            showPopupNotification('Enter your email/phone and password');
            return;
        }

        if (isEmailLogin && !isValidEmail(email)) {
            showPopupNotification('Enter a valid email address');
            return;
        }

        if (!isEmailLogin && (phone.length < 10 || phone.length > 15)) {
            showPopupNotification('Enter a valid phone number');
            return;
        }

        const serverReady = await checkAuthServer({ silent: true });
        if (!serverReady) {
            showPopupNotification('Backend server is offline. Start it and try again.');
            return;
        }

        setButtonState(loginBtn, true, 'Sign In', 'Signing In...');

        try {
            const loginPayload = { password };
            if (email) loginPayload.email = email;
            if (phone) loginPayload.phone = phone;

            const response = await fetchWithTimeout(`${API_BASE}/api/auth/login`, {
                method: 'POST',
                headers: getJsonHeaders(),
                body: JSON.stringify(loginPayload)
            }, 8000);

            const data = await parseJsonSafely(response);

            if (response.ok) {
                await completeAuth(data, `Welcome, ${data.user.name}!`);
            } else {
                showPopupNotification(data.error || 'Login failed');
            }
        } catch (error) {
            console.error('Login failed:', error);
            await checkAuthServer({ silent: true });
            showPopupNotification('Could not reach the backend. Start the server and try again.');
        } finally {
            setButtonState(loginBtn, false, 'Sign In', 'Signing In...');
        }
    };

    // Real register API  
    const handleRegister = async (e) => {
        if (e) e.preventDefault();
        const nameEl = document.getElementById('reg-name');
        const emailEl = document.getElementById('reg-email');
        const phoneEl = document.getElementById('reg-phone');
        const passwordEl = document.getElementById('reg-pass');
        const roleEl = document.getElementById('reg-role');

        if (!nameEl || !emailEl || !phoneEl || !passwordEl) {
            showPopupNotification("Registration inputs missing");
            return;
        }

        const name = nameEl.value.trim();
        const email = emailEl.value.trim().toLowerCase();
        const phone = normalizePhone(phoneEl.value);
        const password = passwordEl.value.trim();
        const role = roleEl ? roleEl.value : 'farmer';

        if (!name || !email || !phone || !password) {
            showPopupNotification("Name, email, phone, and password are required");
            return;
        }

        if (name.length < 2) {
            showPopupNotification('Name must be at least 2 characters');
            return;
        }

        if (!isValidEmail(email)) {
            showPopupNotification('Enter a valid email address');
            return;
        }

        if (phone.length < 10 || phone.length > 15) {
            showPopupNotification('Enter a valid phone number');
            return;
        }

        if (password.length < 6) {
            showPopupNotification('Password must be at least 6 characters');
            return;
        }

        const serverReady = await checkAuthServer({ silent: true });
        if (!serverReady) {
            showPopupNotification('Backend server is offline. Start it and try again.');
            return;
        }

        setButtonState(registerBtn, true, 'Create Account', 'Creating Account...');

        try {
            const response = await fetchWithTimeout(`${API_BASE}/api/auth/register`, {
                method: 'POST',
                headers: getJsonHeaders(),
                body: JSON.stringify({ name, email, phone, role, password })
            }, 8000);

            const data = await parseJsonSafely(response);

            if (response.ok) {
                await completeAuth(data, `Account created, ${data.user.name}!`);
            } else {
                showPopupNotification(data.error || 'Registration failed');
            }
        } catch (error) {
            console.error('Registration failed:', error);
            await checkAuthServer({ silent: true });
            showPopupNotification('Could not reach the backend. Start the server and try again.');
        } finally {
            setButtonState(registerBtn, false, 'Create Account', 'Creating Account...');
        }
    };

    // Form listeners
    if (showRegister) showRegister.addEventListener('click', (e) => {
        e.preventDefault();
        showAuthForm('register');
    });
    if (showLogin) showLogin.addEventListener('click', (e) => {
        e.preventDefault();
        showAuthForm('login');
    });

    if (loginForm) loginForm.addEventListener('submit', handleLogin);
    if (registerForm) registerForm.addEventListener('submit', handleRegister);
    if (retryServerBtn) retryServerBtn.addEventListener('click', () => {
        checkAuthServer();
    });

    // Enhanced logout
    if (logoutBtn) logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('jwt');
        localStorage.removeItem('user');
        clearCurrentUser();
        setAuthVisibility(false);
        showAuthForm('login');
        checkAuthServer({ silent: true });
        showPopupNotification('Logged out successfully');
    });

    // Init auth state
    initAuth();
    checkAuthServer({ silent: true });

    // logoutBtn.addEventListener('click', () => { dashboard.style.display = 'none'; authPage.style.display = 'flex'; authPage.style.opacity = '1'; });

    // --- Theme Toggle ---
    themeToggle.addEventListener('click', () => {
        appState.isDarkMode = !appState.isDarkMode;
        document.body.classList.toggle('dark-mode');
        themeToggle.innerHTML = appState.isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });

    // --- Voice Command (Faster) ---
    voiceTrigger.addEventListener('click', () => {
        voiceTrigger.classList.add('listening');
        voiceVisualizer.style.display = 'flex';
        showPopupNotification("Listening for command...");

        setTimeout(() => {
            voiceTrigger.classList.remove('listening');
            voiceVisualizer.style.display = 'none';

            const commands = ["open marketplace", "go to ai assistant", "show analytics", "open chat", "go home"];
            const randomCmd = commands[Math.floor(Math.random() * commands.length)];

            showPopupNotification(`Voice Command: "${randomCmd}"`);

            if (randomCmd.includes("marketplace")) navigateTo('marketplace');
            else if (randomCmd.includes("ai assistant")) navigateTo('ai-assistant');
            else if (randomCmd.includes("analytics")) navigateTo('analytics');
            else if (randomCmd.includes("chat")) navigateTo('chat-negotiation');
            else if (randomCmd.includes("home")) navigateTo('home');
            else {
                // Fallback to random view navigation if no specific command matches
                const views = ['iot', 'products', 'auction', 'weather', 'home', 'loan', 'carbon', 'disease', 'map', 'orders', 'finance', 'logistics', 'trends', 'community', 'subscription', 'calculator', 'story', 'contracts', 'skillhub', 'rescue', 'equipment', 'smart-feed', 'video-feed', 'nearby-events', 'sell-smart', 'market-intelligence', 'automation', 'sustainability', 'buyer-requests', 'bulk-order', 'gift-box', 'adopt-farm', 'harvest-countdown', 'expense-tracker', 'service-marketplace', 'transparency-scanner', 'offline-sync', 'knowledge-quiz', 'crop-experiment', 'smart-alerts', 'e-book'];
                const view = views[Math.floor(Math.random() * views.length)];
                navigateTo(view);
            }
        }, 2000);
    });

    // --- Smart Search Logic ---
    smartSearch.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = smartSearch.value.toLowerCase();
            const views = ['iot', 'products', 'auction', 'weather', 'home', 'loan', 'carbon', 'disease', 'map', 'orders', 'finance', 'logistics', 'trends', 'community', 'subscription', 'calculator', 'story', 'contracts', 'skillhub', 'rescue', 'equipment', 'smart-feed', 'video-feed', 'nearby-events', 'sell-smart', 'market-intelligence', 'automation', 'sustainability', 'buyer-requests', 'bulk-order', 'gift-box', 'adopt-farm', 'harvest-countdown', 'expense-tracker', 'service-marketplace', 'transparency-scanner', 'offline-sync', 'knowledge-quiz', 'crop-experiment', 'smart-alerts', 'e-book'];
            const match = views.find(v => query.includes(v));
            if (match) {
                navigateTo(match);
                smartSearch.value = '';
            } else {
                showPopupNotification("No direct service match. Try 'Weather' or 'IoT'.");
            }
        }
    });

    // --- Notification System ---
    function showPopupNotification(msg) {
        if (!notifMsg || !notifPopup) {
            console.log('Notification:', msg);
            return;
        }
        notifMsg.textContent = msg;
        notifPopup.classList.add('show');
        setTimeout(() => notifPopup.classList.remove('show'), 2500);
    }

    function setActiveNav(view) {
        navItems.forEach(i => i.classList.remove('active'));
        const match = document.querySelector(`.nav-item[data-view="${view}"]`);
        if (match) match.classList.add('active');
    }

    function navigateTo(view) {
        if (!view) return;
        appState.currentView = view;
        setActiveNav(view);

        // Clear previous intervals to prevent memory leaks and overlapping updates
        if (appState.intervals) {
            appState.intervals.forEach(clearInterval);
            appState.intervals = [];
        }

        contentArea.style.opacity = '0';
        setTimeout(() => {
            renderView(view);
            contentArea.style.opacity = '1';
            initViewInteractivity(view);
        }, 50);
    }

    function escapeHtml(value) {
        return (value ?? '').toString().replace(/[&<>"']/g, (ch) => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        }[ch]));
    }

    function timeNow() {
        return new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
    }

    function scrollToBottom(elementId) {
        const el = document.getElementById(elementId);
        if (el) el.scrollTop = el.scrollHeight;
    }

    function getProductById(productId) {
        const id = String(productId ?? '');
        const productCollections = [...appState.myProducts, ...appState.products];
        return productCollections.find((product) => String(product.id) === id);
    }

    function guessCategory(name) {
        const lower = (name || '').toLowerCase();
        if (/(rice|wheat|millet|maize|corn|barley|oats)/.test(lower)) return 'Cereals';
        if (/(mango|apple|banana|orange|grape|watermelon|melon|guava|pomegranate)/.test(lower)) return 'Fruits';
        return 'Vegetables';
    }

    function openInvoiceModal(innerHtml) {
        invoiceContent.innerHTML = innerHtml;
        invoiceModal.style.display = 'flex';
    }

    function closeInvoiceModal() {
        invoiceModal.style.display = 'none';
        invoiceContent.innerHTML = '';
    }

    function openProductModal(mode, product) {
        const nameEl = document.getElementById('new-product-name');
        const stockEl = document.getElementById('new-product-stock');
        const priceEl = document.getElementById('new-product-price');
        const imageUrlEl = document.getElementById('new-product-image-url');
        const fileEl = document.getElementById('crop-image');
        const titleEl = productModal.querySelector('h3');
        const saveBtn = document.getElementById('save-product');

        productModal.dataset.mode = mode;
        productModal.dataset.editId = product?.id ? String(product.id) : '';
        if (titleEl) titleEl.textContent = mode === 'edit' ? 'Edit Crop Listing' : 'Add New Crop Listing';
        if (saveBtn) saveBtn.textContent = mode === 'edit' ? 'Save Changes' : 'List Product';

        if (nameEl) nameEl.value = product?.name || '';
        if (stockEl) stockEl.value = product?.stock ?? '';
        if (priceEl) priceEl.value = product?.price ?? '';
        if (imageUrlEl) {
            const current = (product?.imageUrl || product?.img || '').toString();
            imageUrlEl.value = /^https?:/i.test(current) ? current : '';
        }
        if (fileEl) fileEl.value = '';

        productModal.style.display = 'flex';
    }

    function closeProductModal() {
        productModal.style.display = 'none';
        delete productModal.dataset.mode;
        delete productModal.dataset.editId;

        const saveBtn = document.getElementById('save-product');
        if (saveBtn) saveBtn.textContent = 'List Product';

        const nameEl = document.getElementById('new-product-name');
        const stockEl = document.getElementById('new-product-stock');
        const priceEl = document.getElementById('new-product-price');
        const imageUrlEl = document.getElementById('new-product-image-url');
        const fileEl = document.getElementById('crop-image');
        if (nameEl) nameEl.value = '';
        if (stockEl) stockEl.value = '';
        if (priceEl) priceEl.value = '';
        if (imageUrlEl) imageUrlEl.value = '';
        if (fileEl) fileEl.value = '';
    }

    function readFileAsDataUrl(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = () => reject(new Error('Could not read the selected image'));
            reader.readAsDataURL(file);
        });
    }

    async function saveProductFromModal() {
        const name = document.getElementById('new-product-name')?.value?.trim() || '';
        const stock = Number(document.getElementById('new-product-stock')?.value);
        const price = Number(document.getElementById('new-product-price')?.value);
        const imageUrl = (document.getElementById('new-product-image-url')?.value || '').trim();
        const file = document.getElementById('crop-image')?.files?.[0];
        const saveBtn = document.getElementById('save-product');

        if (!name) { showPopupNotification('Crop name is required'); return; }
        if (!Number.isFinite(stock) || stock <= 0) { showPopupNotification('Enter a valid stock (kg)'); return; }
        if (!Number.isFinite(price) || price <= 0) { showPopupNotification('Enter a valid price'); return; }
        if (!getAuthToken()) { showPopupNotification('Please sign in again to manage products'); return; }

        const mode = productModal.dataset.mode || 'add';
        const editId = productModal.dataset.editId;

        try {
            if (saveBtn) {
                saveBtn.disabled = true;
                saveBtn.textContent = mode === 'edit' ? 'Saving...' : 'Listing...';
            }

            const resolvedImageUrl = imageUrl
                || (file ? await readFileAsDataUrl(file) : pickImageUrl(name));

            const response = await fetch(
                mode === 'edit' && editId
                    ? `${API_BASE}/api/products/${encodeURIComponent(editId)}`
                    : `${API_BASE}/api/products`,
                {
                    method: mode === 'edit' ? 'PUT' : 'POST',
                    headers: getJsonHeaders(true),
                    body: JSON.stringify({
                        name,
                        stock,
                        price,
                        category: guessCategory(name),
                        imageUrl: resolvedImageUrl
                    })
                }
            );

            const data = await parseJsonSafely(response);

            if (!response.ok) {
                showPopupNotification(data.error || 'Could not save the product');
                return;
            }

            await refreshProducts({ rerender: false, showErrors: true });
            closeProductModal();
            navigateTo('products');
            showPopupNotification(mode === 'edit' ? 'Listing updated' : 'Product listed');
        } catch (error) {
            console.error('Failed to save product:', error);
            showPopupNotification(error.message || 'Failed to save product');
        } finally {
            if (saveBtn) {
                saveBtn.disabled = false;
                saveBtn.textContent = mode === 'edit' ? 'Save Changes' : 'List Product';
            }
        }
    }

    function showProductDetails(product) {
        openInvoiceModal(`
            <div style="display:flex; gap: 15px; align-items: center; margin-bottom: 15px;">
                <img src="${product.img}" alt="${escapeHtml(product.name)}" style="width: 90px; height: 70px; object-fit: cover; border-radius: 10px; border: 1px solid #e2e8f0;">
                <div>
                    <div style="font-size: 1.1rem; font-weight: 800;">${escapeHtml(product.name)}</div>
                    <small style="color:#64748b;">Category: ${escapeHtml(product.category || '—')}</small>
                </div>
            </div>
            <div style="display:grid; gap: 8px;">
                <div style="display:flex; justify-content: space-between;"><span>Price</span><strong>₹${Number(product.price).toLocaleString()}/kg</strong></div>
                <div style="display:flex; justify-content: space-between;"><span>Stock</span><strong>${Number(product.stock).toLocaleString()} kg</strong></div>
            </div>
            <div style="margin-top: 15px; display:flex; gap: 10px;">
                <button class="primary-btn" data-action="buy-now" data-product-id="${product.id}" style="width:auto; flex:1;">Sell Now</button>
                <button class="secondary-btn" data-action="toggle-favorite" data-product-id="${product.id}" style="width:auto;">${appState.favorites.includes(product.id) ? 'Unfavorite' : 'Favorite'}</button>
            </div>
        `);
    }

    function handleBuyNow(product) {
        if (!product) return;
        if (Number(product.stock) <= 0) { showPopupNotification('Out of stock'); return; }

        const input = prompt('Quantity to sell (kg):', '50');
        if (input === null) return;
        const qty = Math.max(1, Math.min(Number(product.stock), Number(input) || 0));
        if (!Number.isFinite(qty) || qty <= 0) { showPopupNotification('Invalid quantity'); return; }

        const total = qty * Number(product.price || 0);
        product.stock = Math.max(0, Number(product.stock) - qty);
        appState.wallet = Number(appState.wallet || 0) + total;

        openInvoiceModal(`
            <div style="display:grid; gap: 8px;">
                <div style="display:flex; justify-content: space-between;"><span>Item</span><strong>${escapeHtml(product.name)}</strong></div>
                <div style="display:flex; justify-content: space-between;"><span>Quantity</span><strong>${qty} kg</strong></div>
                <div style="display:flex; justify-content: space-between;"><span>Rate</span><strong>₹${Number(product.price).toLocaleString()}/kg</strong></div>
                <hr style="border:none; border-top:1px solid #e2e8f0; margin: 10px 0;">
                <div style="display:flex; justify-content: space-between; font-size: 1.05rem;"><span>Total</span><strong>₹${total.toLocaleString()}</strong></div>
                <small style="color:#64748b;">Wallet credited (demo): ₹${total.toLocaleString()}</small>
            </div>
        `);

        showPopupNotification('Order placed (demo)');
        if (appState.currentView) navigateTo(appState.currentView);
    }

    function getChatResponse(text) {
        const lower = text.toLowerCase();

        // Detailed Price Database (₹/kg approx)
        const cropPrices = {
            // Vegetables
            'tomato': 42, 'onion': 35, 'potato': 28, 'carrot': 55, 'chilli': 65,
            'brinjal': 40, 'ladies finger': 45, 'okra': 45, 'cabbage': 30,
            'cauliflower': 40, 'beetroot': 45, 'spinach': 25, 'pumpkin': 20,
            'bottle gourd': 22, 'bitter gourd': 48, 'snake gourd': 35,
            'ridge gourd': 38, 'cucumber': 30, 'radish': 35, 'drumstick': 50,
            'capsicum': 80, 'beans': 60, 'garlic': 120, 'ginger': 90, 'peas': 70,
            'mushroom': 140, 'sweet potato': 32, 'tapioca': 25,

            // Fruits
            'banana': 35, 'mango': 120, 'apple': 140, 'grape': 80,
            'watermelon': 18, 'muskmelon': 35, 'papaya': 30, 'guava': 55,
            'pomegranate': 110, 'orange': 70, 'lemon': 85, 'sapota': 45,
            'custard apple': 90, 'jackfruit': 40, 'coconut': 35,
            'pineapple': 50, 'strawberry': 250, 'kiwi': 300, 'pear': 120,

            // Cereals & Pulses
            'rice': 55, 'wheat': 32, 'maize': 24, 'corn': 25, 'millet': 40,
            'ragi': 38, 'bajra': 35, 'jowar': 36, 'barley': 45, 'oats': 50,
            'black gram': 100, 'green gram': 110, 'red gram': 115, 'bengal gram': 80,
            'dal': 110, 'soybean': 45, 'groundnut': 80, 'mustard': 60,

            // Spices & Others
            'turmeric': 105, 'cotton': 75, 'sugarcane': 5,
            'pepper': 450, 'cardamom': 1800, 'clove': 900, 'cumin': 250,
            'coriander': 90, 'fenugreek': 70
        };

        const foundCrop = Object.keys(cropPrices).find(crop => lower.includes(crop));

        if (lower.match(/\b(hi|hello|hey|greetings|namaste)\b/)) return "Hello! Are you looking to sell your harvest today?";

        if (foundCrop) {
            const price = cropPrices[foundCrop];
            // Simulate slight fluctuation
            const finalPrice = price + (Math.floor(Math.random() * 7) - 3);

            if (lower.includes('price') || lower.includes('rate') || lower.includes('cost') || lower.includes('sell')) {
                return `For ${foundCrop}, the current market prediction is around ₹${finalPrice}/kg. I can offer ₹${Math.max(1, finalPrice - 3)}/kg for bulk.`;
            } else {
                return `I see you have ${foundCrop}. The market rate is ₹${finalPrice}/kg. How much quantity do you have?`;
            }
        }

        if (lower.includes('price') || lower.includes('cost') || lower.includes('rate')) return "The market rates vary by crop. Which crop are you selling? (e.g., Tomato, Wheat, Apple)";
        if (lower.includes('delivery') || lower.includes('time') || lower.includes('when')) return "I need the delivery by Tuesday morning. Can you manage that?";
        if (lower.includes('stock') || lower.includes('qty') || lower.includes('quantity')) return "I am looking to buy around 500kg. Do you have that in stock?";
        if (lower.includes('yes') || lower.includes('ok') || lower.includes('deal') || lower.includes('agree')) return "Great! I'll process the advance payment.";
        if (lower.includes('no') || lower.includes('sorry') || lower.includes('cant')) return "I understand. What is your best offer?";
        if (lower.includes('bye') || lower.includes('later')) return "Goodbye! Let me know if you change your mind.";
        return "I see. Can you provide more details on the quality and quantity?";
    }

/*
    function generateAiResponse(prompt) {
        const q = (prompt || '').toLowerCase();
        if (q.includes('potato') && q.includes('price')) {
            return 'Potato prices often rise before festivals and drop after peak arrivals. Watch local mandi arrivals and storage costs. Current trend: Stable at ₹20-25/kg.';

            // AI Price Prediction Database
            const priceDb = {
                // Vegetables
                'tomato': 42, 'onion': 35, 'potato': 28, 'carrot': 55, 'chilli': 65,
                'brinjal': 40, 'ladies finger': 45, 'okra': 45, 'cabbage': 30,
                'cauliflower': 40, 'beetroot': 45, 'spinach': 25, 'pumpkin': 20,
                'bottle gourd': 22, 'bitter gourd': 48, 'snake gourd': 35,
                'ridge gourd': 38, 'cucumber': 30, 'radish': 35, 'drumstick': 50,
                'capsicum': 80, 'beans': 60, 'garlic': 120, 'ginger': 90, 'peas': 70,
                'mushroom': 140, 'sweet potato': 32, 'tapioca': 25,

                // Fruits
                'banana': 35, 'mango': 120, 'apple': 140, 'grape': 80,
                'watermelon': 18, 'muskmelon': 35, 'papaya': 30, 'guava': 55,
                'pomegranate': 110, 'orange': 70, 'lemon': 85, 'sapota': 45,
                'custard apple': 90, 'jackfruit': 40, 'coconut': 35,
                'pineapple': 50, 'strawberry': 250, 'kiwi': 300, 'pear': 120,

                // Cereals & Pulses
                'rice': 55, 'wheat': 32, 'maize': 24, 'corn': 25, 'millet': 40,
                'ragi': 38, 'bajra': 35, 'jowar': 36, 'barley': 45, 'oats': 50,
                'black gram': 100, 'green gram': 110, 'red gram': 115, 'bengal gram': 80,
                'dal': 110, 'soybean': 45, 'groundnut': 80, 'mustard': 60,

                // Plants & Spices
                'cotton': 75, 'sugarcane': 5, 'turmeric': 105,
                'pepper': 450, 'cardamom': 1800, 'clove': 900, 'cumin': 250,
                'coriander': 90, 'fenugreek': 70, 'mint': 40, 'tulsi': 150,
                'neem': 20, 'aloe vera': 30, 'rose': 200, 'jasmine': 300
            };

            const foundCrop = Object.keys(priceDb).find(crop => q.includes(crop));

            if (foundCrop && (q.includes('price') || q.includes('cost') || q.includes('rate') || q.includes('predict'))) {
                const basePrice = priceDb[foundCrop];
                const fluctuation = (Math.random() * 0.15) - 0.05; // -5% to +10%
                const predictedPrice = Math.round(basePrice * (1 + fluctuation));
                return `AI Prediction for ${foundCrop.toUpperCase()}:\n• 1 kg: ₹${predictedPrice}\n• 0.5 kg: ₹${(predictedPrice / 2).toFixed(1)}\nTrend: ${fluctuation > 0 ? 'Rising 📈' : 'Dropping 📉'}`;
            }
            if (q.includes('tomato') && q.includes('price')) {
                return 'Tomato prices are volatile. Recent rains may reduce supply, potentially increasing prices to ₹40-50/kg. Good time to sell if quality is high.';
            }
            if (q.includes('wheat') && q.includes('fertilizer')) {
                return 'For wheat, focus on balanced N-P-K (4:2:1). Apply basal compost + split nitrogen (tillering and booting stages). Zinc helps if leaves yellow.';
            }
            if (q.includes('organic') && q.includes('cert')) {
                return 'Organic certification requires a 3-year conversion period, records of inputs, and field inspections (NPOP standards). Start with documentation.';
            }
            if (q.includes('pest') || q.includes('insect') || q.includes('bug')) {
                return 'Integrated Pest Management (IPM): Use yellow sticky traps for flying insects. Neem oil (5ml/L) works for early infestations. Encourage beneficial insects.';
            }
            if (q.includes('water') || q.includes('irrigat')) {
                return 'Drip irrigation is highly efficient, saving 40-60% water. Mulching helps retain soil moisture and suppresses weeds.';
            }
            if (q.includes('scheme') || q.includes('govt') || q.includes('loan')) {
                return 'Key schemes: PM-KISAN (income support), Kisan Credit Card (KCC) for low-interest loans, and PM Fasal Bima Yojana for crop insurance.';
            }
            if (q.includes('what crop') || q.includes('which crop')) {
                return 'Choose based on your soil + water + market: Short-duration veggies (Radish, Spinach) for quick cashflow, Cereals for stability, Pulses for soil health.';
            }
            if (q.match(/\b(hi|hello|hey|greetings)\b/)) {
                return 'Namaste! I am your AI Farm Advisor. Ask me about crop diseases, market prices, weather tips, or farming techniques.';
            }
            return 'Tip: Rotate crops to prevent soil depletion, test soil once per season, and follow local weather advisories for irrigation planning.';
        }

*/
    function generateAiResponse(prompt) {
        const q = (prompt || '').toLowerCase();
        const priceDb = {
            'tomato': 42, 'onion': 35, 'potato': 28, 'carrot': 55, 'chilli': 65,
            'brinjal': 40, 'ladies finger': 45, 'okra': 45, 'cabbage': 30,
            'cauliflower': 40, 'beetroot': 45, 'spinach': 25, 'pumpkin': 20,
            'bottle gourd': 22, 'bitter gourd': 48, 'snake gourd': 35,
            'ridge gourd': 38, 'cucumber': 30, 'radish': 35, 'drumstick': 50,
            'capsicum': 80, 'beans': 60, 'garlic': 120, 'ginger': 90, 'peas': 70,
            'mushroom': 140, 'sweet potato': 32, 'tapioca': 25,
            'banana': 35, 'mango': 120, 'apple': 140, 'grape': 80,
            'watermelon': 18, 'muskmelon': 35, 'papaya': 30, 'guava': 55,
            'pomegranate': 110, 'orange': 70, 'lemon': 85, 'sapota': 45,
            'custard apple': 90, 'jackfruit': 40, 'coconut': 35,
            'pineapple': 50, 'strawberry': 250, 'kiwi': 300, 'pear': 120,
            'rice': 55, 'wheat': 32, 'maize': 24, 'corn': 25, 'millet': 40,
            'ragi': 38, 'bajra': 35, 'jowar': 36, 'barley': 45, 'oats': 50,
            'black gram': 100, 'green gram': 110, 'red gram': 115, 'bengal gram': 80,
            'dal': 110, 'soybean': 45, 'groundnut': 80, 'mustard': 60,
            'cotton': 75, 'sugarcane': 5, 'turmeric': 105,
            'pepper': 450, 'cardamom': 1800, 'clove': 900, 'cumin': 250,
            'coriander': 90, 'fenugreek': 70, 'mint': 40, 'tulsi': 150,
            'neem': 20, 'aloe vera': 30, 'rose': 200, 'jasmine': 300
        };
        const foundCrop = Object.keys(priceDb).find((crop) => q.includes(crop));

        if (q.includes('potato') && q.includes('price')) {
            return 'Potato prices often rise before festivals and drop after peak arrivals. Watch local mandi arrivals and storage costs. Current trend: Stable at Rs 20-25/kg.';
        }
        if (foundCrop && (q.includes('price') || q.includes('cost') || q.includes('rate') || q.includes('predict'))) {
            const basePrice = priceDb[foundCrop];
            const fluctuation = (Math.random() * 0.15) - 0.05;
            const predictedPrice = Math.round(basePrice * (1 + fluctuation));
            return `AI Prediction for ${foundCrop.toUpperCase()}:\n- 1 kg: Rs ${predictedPrice}\n- 0.5 kg: Rs ${(predictedPrice / 2).toFixed(1)}\nTrend: ${fluctuation > 0 ? 'Rising' : 'Dropping'}`;
        }
        if (q.includes('tomato') && q.includes('price')) {
            return 'Tomato prices are volatile. Recent rains may reduce supply, potentially increasing prices to Rs 40-50/kg. Good time to sell if quality is high.';
        }
        if (q.includes('wheat') && q.includes('fertilizer')) {
            return 'For wheat, focus on balanced N-P-K (4:2:1). Apply basal compost plus split nitrogen during tillering and booting stages.';
        }
        if (q.includes('organic') && q.includes('cert')) {
            return 'Organic certification usually needs a conversion period, input records, and field inspections. Start with consistent documentation.';
        }
        if (q.includes('pest') || q.includes('insect') || q.includes('bug')) {
            return 'Integrated Pest Management works best: use sticky traps, neem oil for early infestations, and encourage beneficial insects.';
        }
        if (q.includes('water') || q.includes('irrigat')) {
            return 'Drip irrigation saves water and mulching helps retain soil moisture while suppressing weeds.';
        }
        if (q.includes('scheme') || q.includes('govt') || q.includes('loan')) {
            return 'Popular options include PM-KISAN, Kisan Credit Card, and PM Fasal Bima Yojana for crop insurance.';
        }
        if (q.includes('what crop') || q.includes('which crop')) {
            return 'Choose based on your soil, water access, and market demand. Short-duration vegetables help cashflow, cereals add stability, and pulses improve soil health.';
        }
        if (q.match(/\b(hi|hello|hey|greetings)\b/)) {
            return 'Namaste! I am your AI Farm Advisor. Ask me about crop diseases, market prices, weather tips, or farming techniques.';
        }

        return 'Tip: Rotate crops, test soil once per season, and follow local weather advisories before planning irrigation.';
    }

        // --- Navigation Logic (Instant) ---
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                const view = item.getAttribute('data-view');
                if (view) {
                    navigateTo(view);
                }
            });
        });

        // --- Event Delegation (Snappy Responses) ---
        document.addEventListener('input', (e) => {
            if (e.target.id === 'ebook-search') {
                const query = e.target.value.toLowerCase();
                const cards = document.querySelectorAll('.ebook-card');
                cards.forEach(card => {
                    const name = card.querySelector('h3').textContent.toLowerCase();
                    const tamil = card.querySelector('small').textContent.toLowerCase();
                    card.style.display = (name.includes(query) || tamil.includes(query)) ? 'flex' : 'none';
                });
            }
        });

        document.addEventListener('click', async (e) => {
            const t = e.target;

            // Modals / overlays
            if (t.id === 'close-modal' || t.closest('#close-modal')) { closeProductModal(); return; }
            if (t.id === 'close-invoice' || t.closest('#close-invoice')) { closeInvoiceModal(); return; }
            if (t.id === 'download-invoice' || t.closest('#download-invoice')) { showPopupNotification('Downloading invoice (demo)'); return; }
            if (t.id === 'close-chat' || t.closest('#close-chat')) { chatWindow.style.display = 'none'; return; }
            if (t.id === 'send-chat' || t.closest('#send-chat')) {
                const text = (chatInputField.value || '').trim();
                if (!text) return;
                appState.messages.push({ sender: 'You', text, time: timeNow() });
                chatInputField.value = '';
                chatMessages.innerHTML = appState.messages.map(m => `<div style="margin-bottom:8px;"><strong>${escapeHtml(m.sender)}:</strong> ${escapeHtml(m.text)}</div>`).join('');
                chatMessages.scrollTop = chatMessages.scrollHeight;
                return;
            }

            // Open add product
            if (t.id === 'open-add-product' || t.closest('#open-add-product')) { openProductModal('add'); return; }
            if (t.id === 'save-product' || t.closest('#save-product')) { saveProductFromModal(); return; }

            // View navigation triggers (cards/quick actions/fabs)
            const navTrigger = t.closest('.quick-btn[data-view], .card[data-view], .fab-opt[data-view], .fab-futuristic[data-view]');
            if (navTrigger?.dataset?.view) { navigateTo(navTrigger.dataset.view); return; }

            // Data-driven actions
            const actionEl = t.closest('[data-action]');
            if (actionEl) {
                const action = actionEl.dataset.action;
                if (action === 'market-filter') {
                    appState.marketplaceFilter = actionEl.dataset.filter || 'all';
                    showPopupNotification(`Filter: ${appState.marketplaceFilter}`);
                    navigateTo('marketplace');
                    return;
                }
                if (action === 'market-filter-more') { showPopupNotification('More filters coming soon'); return; }

                if (action === 'toggle-favorite') {
                    const id = String(actionEl.dataset.productId || '');
                    if (!id) return;
                    if (appState.favorites.includes(id)) appState.favorites = appState.favorites.filter(x => x !== id);
                    else appState.favorites.push(id);
                    showPopupNotification(appState.favorites.includes(id) ? 'Added to favorites' : 'Removed from favorites');
                    if (appState.currentView) navigateTo(appState.currentView);
                    return;
                }

                if (action === 'view-product') {
                    const product = getProductById(actionEl.dataset.productId);
                    if (product) showProductDetails(product);
                    return;
                }

                if (action === 'buy-now') {
                    const product = getProductById(actionEl.dataset.productId);
                    if (product) handleBuyNow(product);
                    return;
                }

                if (action === 'add-to-basket') {
                    const id = Number(actionEl.dataset.itemId);
                    const item = appState.recommendations.find(r => Number(r.id) === id);
                    if (!item) return;
                    appState.basket.push({ id: item.id, name: item.name, price: item.price, qty: 1 });
                    showPopupNotification('Added to basket');
                    return;
                }

                if (action === 'subscribe-box') {
                    const cost = 1499;
                    appState.wallet = Math.max(0, Number(appState.wallet || 0) - cost);
                    appState.subscriptions.count = Number(appState.subscriptions.count || 0) + 1;
                    showPopupNotification('Subscribed (demo)');
                    navigateTo('home');
                    return;
                }

                if (action === 'get-offer') { showPopupNotification('Offer applied (demo)'); return; }

                if (action === 'chat-suggest') {
                    const input = document.getElementById('chat-neg-input');
                    if (input) { input.value = actionEl.dataset.text || actionEl.textContent || ''; input.focus(); }
                    return;
                }

                if (action === 'chat-send') {
                    const input = document.getElementById('chat-neg-input');
                    const text = (input?.value || '').trim();
                    if (!text) return;
                    appState.messages.push({ sender: 'You', text, time: timeNow() });
                    if (input) input.value = '';
                    navigateTo('chat-negotiation');
                    setTimeout(() => scrollToBottom('chat-neg-messages'), 120);
                    setTimeout(() => {
                        appState.messages.push({ sender: 'Buyer: Amit', text: getChatResponse(text), time: timeNow() });
                        navigateTo('chat-negotiation');
                        setTimeout(() => scrollToBottom('chat-neg-messages'), 120);
                    }, 600);
                    return;
                }

                if (action === 'ai-suggest') {
                    const input = document.getElementById('ai-input');
                    if (input) { input.value = actionEl.dataset.text || actionEl.textContent || ''; input.focus(); }
                    return;
                }

                if (action === 'ai-send') {
                    const input = document.getElementById('ai-input');
                    const promptText = (input?.value || '').trim();
                    if (!promptText) return;
                    appState.aiMessages.push({ sender: 'You', text: promptText, time: timeNow() });
                    appState.aiMessages.push({ sender: 'AI', text: generateAiResponse(promptText), time: timeNow() });
                    if (input) input.value = '';
                    navigateTo('ai-assistant');
                    setTimeout(() => scrollToBottom('ai-messages'), 120);
                    return;
                }

                if (action === 'edit-stock') {
                    const product = getProductById(actionEl.dataset.productId);
                    if (!product) return;
                    const input = prompt('New stock (kg):', String(product.stock));
                    if (input === null) return;
                    const stock = Number(input);
                    if (!Number.isFinite(stock) || stock < 0) { showPopupNotification('Invalid stock'); return; }

                    try {
                        const response = await fetch(`${API_BASE}/api/products/${encodeURIComponent(product.id)}`, {
                            method: 'PUT',
                            headers: getJsonHeaders(true),
                            body: JSON.stringify({ stock })
                        });
                        const data = await parseJsonSafely(response);

                        if (!response.ok) {
                            showPopupNotification(data.error || 'Could not update stock');
                            return;
                        }

                        await refreshProducts({ rerender: false, showErrors: true });
                        navigateTo('products');
                        showPopupNotification('Stock updated');
                    } catch (error) {
                        console.error('Failed to update stock:', error);
                        showPopupNotification('Failed to update stock');
                    }
                    return;
                }

                if (action === 'edit-product') {
                    const product = getProductById(actionEl.dataset.productId);
                    if (product) openProductModal('edit', product);
                    return;
                }

                if (action === 'download-ebook') {
                    const crop = actionEl.dataset.crop || 'crop';
                    showPopupNotification(`Generating PDF for ${crop} (demo)`);
                    return;
                }
            }

            // Existing legacy actions by class/id
            if (t.classList.contains('accept-contract')) { showPopupNotification('Accepted!'); t.disabled = true; t.textContent = 'Accepted'; return; }
            if (t.classList.contains('rent-tool')) {
                showPopupNotification('Rented!');
                t.parentElement.querySelector('.tool-status').className = 'tool-status rented';
                t.parentElement.querySelector('.tool-status').textContent = 'Rented';
                t.remove();
                return;
            }
            if (t.classList.contains('redeem-carbon')) {
                appState.wallet += (appState.carbonCredits * 850);
                appState.carbonCredits = 0;
                showPopupNotification('Redeemed!');
                navigateTo('carbon');
                return;
            }

            if (t.id === 'calculate-btn') {
                const p = (parseFloat(document.getElementById('expected-sales')?.value) || 0) - ((parseFloat(document.getElementById('seeds-cost')?.value) || 0) + (parseFloat(document.getElementById('labor-cost')?.value) || 0));
                const out = document.getElementById('calc-output');
                if (out) {
                    out.textContent = `Profit: ₹${p}`;
                    out.style.background = p >= 0 ? 'var(--primary-green)' : '#ff5252';
                }
                return;
            }

            if (t.id === 'analyze-disease') {
                const res = document.getElementById('disease-result');
                if (!res) return;
                res.style.display = 'block';
                res.innerHTML = 'Analyzing...';
                setTimeout(() => { res.innerHTML = '<strong>Diagnosis:</strong> Early Blight detected. Apply fungicide.'; }, 800);
                return;
            }

            if (t.id === 'apply-loan') {
                const amount = Number(document.getElementById('loan-amount')?.value) || 50000;
                const steps = document.querySelectorAll('.step');
                steps.forEach((s, i) => setTimeout(() => s.classList.add('active'), i * 400));
                setTimeout(() => {
                    const el = document.getElementById('loan-status');
                    if (el) el.innerHTML = `<div class="card" style="background:#e8f5e9; color: #2e7d32; padding:10px;"><strong>Approved! ₹${amount.toLocaleString()} disbursed.</strong></div>`;
                    appState.wallet += amount;
                }, 1300);
                return;
            }

            // Fallback: make every button feel responsive
            const btn = t.closest('button');
            if (btn && contentArea.contains(btn)) {
                const label = (btn.textContent || '').trim();
                if (label) showPopupNotification(label);
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key !== 'Enter') return;

            if (e.target?.id === 'chat-neg-input') {
                e.preventDefault();
                document.querySelector('[data-action="chat-send"]')?.click();
            }

            if (e.target?.id === 'ai-input') {
                e.preventDefault();
                document.querySelector('[data-action="ai-send"]')?.click();
            }

            if (e.target?.id === 'chat-input-field') {
                e.preventDefault();
                sendChatBtn?.click();
            }
        });

        // --- View Specific Interactivity ---
        function initViewInteractivity(view) {
            if (view === 'home') {
                const nodeInterval = setInterval(() => {
                    const nodes = document.querySelectorAll('.neural-node');
                    nodes.forEach(node => {
                        // Randomly update some nodes to simulate activity
                        if (Math.random() > 0.6) {
                            const type = node.dataset.type;
                            const detailEl = node.querySelector('.node-detail');
                            const indicator = node.querySelector('.status-dot');

                            if (indicator) {
                                indicator.style.boxShadow = `0 0 ${Math.random() * 10 + 2}px #4ade80`;
                            }

                            let data = [];
                            if (type === 'Weather Sensors') data = ['Temp: 29°C', 'Hum: 62%', 'Wind: 12km/h', 'UV: Moderate', 'Pressure: 1012hPa'];
                            else if (type === 'Soil pH Monitors') data = ['pH: 6.5', 'Moisture: 45%', 'N: Optimal', 'P: Low', 'K: High'];
                            else if (type === 'Drone Patrol') data = ['Bat: 82%', 'Field B', 'Rec: ON', 'Returning', 'Alt: 50m'];
                            else if (type === 'Market API') data = ['Syncing...', 'Prices +2%', 'Latency: 24ms', 'Fetching...', 'Live'];
                            else if (type === 'Supply Chain') data = ['Truck #4: Moving', 'Stock: OK', 'Dispatching', 'Route: Clear', 'ETA: 2h'];
                            else if (type === 'Satellite Link') data = ['Sig: -85dBm', 'Up: 12Mbps', 'Down: 50Mbps', 'Ping: 40ms', 'Sat: 4/12'];

                            if (detailEl && data.length) {
                                detailEl.textContent = data[Math.floor(Math.random() * data.length)];
                            }
                        }
                    });
                }, 1500);
                appState.intervals.push(nodeInterval);
            }

            if (view === 'harvest-countdown') {
                const timerInterval = setInterval(() => {
                    const sEl = document.querySelector('.timer-unit:nth-child(3) .timer-val');
                    const mEl = document.querySelector('.timer-unit:nth-child(2) .timer-val');
                    if (sEl) {
                        let s = parseInt(sEl.textContent);
                        if (s > 0) sEl.textContent = s - 1;
                        else {
                            sEl.textContent = 59;
                            if (mEl) {
                                let m = parseInt(mEl.textContent);
                                if (m > 0) mEl.textContent = m - 1;
                                else mEl.textContent = 23; // Loop hour for demo
                            }
                        }
                    }
                }, 1000);
                appState.intervals.push(timerInterval);
            }

            if (view === 'iot') {
                const iotInterval = setInterval(() => {
                    document.querySelectorAll('.sensor-value').forEach(el => {
                        const isPercent = el.textContent.includes('%');
                        const current = parseFloat(el.textContent);
                        const change = (Math.random() - 0.5) * 3;
                        let next = current + change;
                        if (isPercent) next = Math.min(100, Math.max(0, next));
                        el.textContent = isPercent ? Math.floor(next) + '%' : next.toFixed(1);
                    });
                }, 2000);
                appState.intervals.push(iotInterval);
            }

            if (view === 'market-intelligence') {
                // Animate bars
                setTimeout(() => {
                    document.querySelectorAll('.market-bar').forEach(bar => {
                        bar.style.height = bar.dataset.height;
                    });
                }, 100);
            }
        }

        // --- View Renderer ---
        function renderView(view) {
            let html = '';
            switch (view) {
                case 'e-book':
                    html = `<h2>E Book: Crop Knowledge Hub</h2>
                        <div class="card" style="margin-bottom: 20px;">
                            <p>Complete guide to growing and managing all listed crops on Farm Link.</p>
                            <div style="display: flex; gap: 10px; margin-top: 15px;">
                                <input type="text" id="ebook-search" placeholder="Search for a crop (e.g., Potato)..." style="flex: 1;">
                                <button class="primary-btn" style="width: auto; padding: 0 20px;"><i class="fas fa-search"></i></button>
                            </div>
                        </div>
                        <div class="service-grid" id="ebook-list">
                            ${appState.cropDetails.map(crop => `
                                <div class="card ebook-card">
                                    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 15px;">
                                        <img src="${crop.image}" class="ebook-img" alt="${crop.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                                        <div style="display: none; width: 60px; height: 60px; background: var(--primary-green); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.2rem;">
                                            ${crop.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h3 style="margin: 0;">${crop.name}</h3>
                                            <small style="color: var(--primary-green); font-weight: bold;">${crop.tamil}</small>
                                        </div>
                                    </div>
                                    <div class="ebook-info">
                                        <p><strong><i class="fas fa-info-circle"></i> Type:</strong> ${crop.type}</p>
                                        <p><strong><i class="fas fa-utensils"></i> Usage:</strong> ${crop.usage}</p>
                                        <p><strong><i class="fas fa-tractor"></i> Plough:</strong> ${crop.plough}</p>
                                        <p><strong><i class="fas fa-tint"></i> Water:</strong> ${crop.water}</p>
                                        <p><strong><i class="fas fa-seedling"></i> Organic Fertilizer:</strong> ${crop.fertilizer}</p>
                                        <p><strong><i class="fas fa-cloud-sun"></i> Climate:</strong> ${crop.climate}</p>
                                        <p><strong><i class="fas fa-calendar-alt"></i> Harvest Period:</strong> ${crop.harvest}</p>
                                    </div>
                                    <button data-action="download-ebook" data-crop="${crop.name}" style="margin-top: 15px; background: #3b82f6;">Download PDF</button>
                                </div>

                            `).join('')}
                        </div>`;
                    break;
                case 'smart-feed':
                    html = `<h2>Smart Recommendation Feed</h2>
                        <div style="max-width: 600px; margin: 0 auto;">
                            ${appState.feedPosts.map(post => `
                                <div class="feed-card">
                                    <div class="feed-header">
                                        <i class="fas fa-user-circle" style="font-size: 2.5rem; color: var(--primary-green); margin-right: 15px;"></i>
                                        <strong>${post.user}</strong>
                                    </div>
                                    <img src="${post.img}" class="feed-img">
                                    <div class="feed-actions">
                                        <i class="far fa-heart"></i>
                                        <i class="far fa-comment"></i>
                                        <i class="far fa-paper-plane"></i>
                                    </div>
                                    <div class="feed-content">
                                        <p><strong>${post.likes} likes</strong></p>
                                        <p><strong>${post.user}</strong> ${post.text}</p>
                                        <p style="color: #64748b; font-size: 0.8rem; margin-top: 5px;">View all ${post.comments} comments</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>`;
                    break;
                case 'video-feed':
                    html = `<h2>Short Video Feed (Reels Style)</h2>
                        <div class="reels-container">
                            ${appState.reels.map(reel => `
                                <div class="reel-card">
                                    <img src="${reel.video}" class="reel-video">
                                    <div class="reel-overlay">
                                        <h4>${reel.title}</h4>
                                        <p>${reel.user}</p>
                                    </div>
                                    <div class="reel-actions">
                                        <div><i class="fas fa-heart"></i><br><small>${reel.likes}</small></div>
                                        <div><i class="fas fa-comment"></i><br><small>240</small></div>
                                        <div><i class="fas fa-share"></i><br><small>Share</small></div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>`;
                    break;
                case 'sell-smart':
                    html = `<h2>“Sell Smart” Assistant</h2>
                        <div class="card" style="background: #f0fdf4; border-left: 5px solid var(--primary-green);">
                            <h3>AI Selling Strategy</h3>
                            <p>Based on market data, here's your optimal selling plan:</p>
                            <div style="margin-top: 20px; display: grid; gap: 15px;">
                                <div class="card">
                                    <strong><i class="fas fa-tag"></i> Suggested Price</strong>
                                    <h2 style="color: var(--primary-green);">₹32/kg</h2>
                                    <p>5% higher than local mandi average.</p>
                                </div>
                                <div class="card">
                                    <strong><i class="fas fa-clock"></i> Best Time to Sell</strong>
                                    <h2>Next Tuesday</h2>
                                    <p>Supply is expected to drop by 15%.</p>
                                </div>
                                <div class="card">
                                    <strong><i class="fas fa-user-tie"></i> Best Buyer</strong>
                                    <h2>Reliance Fresh</h2>
                                    <p>Highest rating for bulk procurement.</p>
                                </div>
                            </div>
                            <button style="margin-top: 20px;">Execute Strategy</button>
                        </div>`;
                    break;
                case 'market-intelligence':
                    html = `<h2>Market Intelligence</h2>
                        <div class="intel-grid">
                            <div class="card">
                                <div style="display:flex; justify-content:space-between; align-items:center;">
                                    <h3>Demand vs Supply</h3>
                                    <select style="padding:5px; border-radius:5px; border:1px solid #ddd; font-size:0.8rem;"><option>This Week</option><option>Last Month</option></select>
                                </div>
                                <div class="graph-placeholder" style="height: 300px; display: flex; align-items: flex-end; justify-content: space-around; padding: 20px 10px; border-bottom: 2px solid #e2e8f0; position: relative; overflow:hidden;">
                                    <!-- Interactive Bars -->
                                    ${[60, 85, 45, 90, 70, 50, 80].map((h, i) => `
                                        <div style="display:flex; flex-direction:column; align-items:center; height:100%; justify-content:flex-end; z-index:2; flex:1;">
                                            <div class="market-bar" data-height="${h}%" style="width: 20px; height: 0; background: linear-gradient(to top, #3b82f6, #60a5fa); border-radius: 4px 4px 0 0; transition: height 1s cubic-bezier(0.4, 0, 0.2, 1);"></div>
                                            <span style="font-size:0.7rem; margin-top:8px; color:#64748b;">${['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}</span>
                                        </div>
                                    `).join('')}
                                    <!-- Demand Line (SVG) -->
                                    <svg style="position:absolute; bottom:30px; left:0; width:100%; height:80%; pointer-events:none; z-index:3;">
                                        <polyline points="20,150 70,100 120,180 170,50 220,120 270,80 320,140" style="fill:none;stroke:#ff5252;stroke-width:3; stroke-linecap:round; stroke-linejoin:round; filter:drop-shadow(0 2px 4px rgba(255,82,82,0.4)); animation: dash 2s ease forwards; stroke-dasharray: 1000; stroke-dashoffset: 0;" />
                                    </svg>
                                </div>
                            </div>
                            <div class="card">
                                <h3>Seasonal Insights</h3>
                                <ul style="list-style: none; padding: 0;">
                                    <li style="margin-bottom: 10px;"><i class="fas fa-arrow-up" style="color: #10b981;"></i> Wheat prices up 12%</li>
                                    <li style="margin-bottom: 10px;"><i class="fas fa-arrow-down" style="color: #ef4444;"></i> Potato surplus in North</li>
                                    <li><i class="fas fa-info-circle" style="color: #3b82f6;"></i> High demand for Millets</li>
                                </ul>
                            </div>
                        </div>`;
                    break;
                case 'harvest-countdown':
                    html = `<h2>Harvest Countdown</h2>
                        <div class="card" style="text-align: center; padding: 50px;">
                            <h3>Crop: Golden Wheat (Field B)</h3>
                            <div class="countdown-timer">
                                <div class="timer-unit"><span class="timer-val">12</span><span class="timer-label">Days</span></div>
                                <div class="timer-unit"><span class="timer-val">08</span><span class="timer-label">Hours</span></div>
                                <div class="timer-unit"><span class="timer-val">45</span><span class="timer-label">Mins</span></div>
                            </div>
                            <p style="margin-top: 20px; color: #64748b;"><strong>Best Selling Window:</strong> March 30th - April 5th</p>
                            <button style="margin-top: 20px; background: var(--earth-brown);">Open Pre-Booking</button>
                        </div>`;
                    break;
                case 'buyer-requests':
                    html = `<h2>Buyer Requests (Reverse Marketplace)</h2>
                        <div class="service-grid">
                            ${appState.buyerRequests.map(req => `
                                <div class="card" style="border-left: 5px solid #3b82f6;">
                                    <h3>${req.buyer}</h3>
                                    <p><strong>Item:</strong> ${req.item}</p>
                                    <p><strong>Quantity:</strong> ${req.qty}</p>
                                    <p><strong>Timeline:</strong> ${req.date}</p>
                                    <button style="margin-top: 15px; background: #3b82f6;">Submit Quote</button>
                                </div>
                            `).join('')}
                        </div>`;
                    break;
                case 'bulk-order':
                    html = `<h2>Bulk Order (B2B Marketplace)</h2>
                        <div class="card" style="background: #1e293b; color: white; padding: 40px; margin-bottom: 20px;">
                            <h3>Enterprise & Bulk Supply</h3>
                            <p>Direct supply contracts for Hotels, Supermarkets, and Export Houses.</p>
                        </div>
                        <div class="service-grid">
                            <div class="card">
                                <h4>Hospitality Supply</h4>
                                <p>Standardized grading and daily delivery.</p>
                                <button>View Requirements</button>
                            </div>
                            <div class="card">
                                <h4>Industrial Procurement</h4>
                                <p>Bulk cereals and oilseeds for processing units.</p>
                                <button>View Requirements</button>
                            </div>
                        </div>`;
                    break;
                case 'expense-tracker':
                    html = `<h2>Expense Tracker</h2>
                        <div class="analytics-grid">
                            <div class="analytics-card" style="background: #f1f5f9; color: #334155;"><h3>Total Costs</h3><h2>₹15,400</h2></div>
                            <div class="analytics-card" style="background: #fef2f2; color: #991b1b;"><h3>Seeds</h3><h2>₹4,200</h2></div>
                            <div class="analytics-card" style="background: #f0fdf4; color: #166534;"><h3>Labor</h3><h2>₹8,500</h2></div>
                        </div>
                        <div class="card">
                            <h3>Add New Expense</h3>
                            <div style="display: flex; gap: 10px; margin-top: 15px;">
                                <input type="text" placeholder="Category" style="flex: 1;">
                                <input type="number" placeholder="Amount" style="flex: 1;">
                                <button style="width: auto; padding: 0 30px;">Add</button>
                            </div>
                        </div>`;
                    break;
                case 'nearby-events':
                    html = `<h2>Nearby Farmer Events</h2>
                        <div class="service-grid">
                            ${appState.nearbyEvents.map(event => `
                                <div class="card">
                                    <div style="font-size: 2rem; color: var(--primary-green); margin-bottom: 10px;"><i class="fas fa-calendar-check"></i></div>
                                    <h3>${event.title}</h3>
                                    <p><i class="fas fa-map-marker-alt"></i> ${event.location}</p>
                                    <p><i class="fas fa-clock"></i> ${event.date}</p>
                                    <button style="margin-top: 15px;">Interested</button>
                                </div>
                            `).join('')}
                        </div>`;
                    break;
                case 'automation':
                    html = `<h2>Smart Automation</h2>
                        <div class="card">
                            <h3>Active Rules</h3>
                            <div style="margin-top: 20px;">
                                <div class="card" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                                    <div><strong>Auto-sell Potatoes</strong><br><small>If price > ₹30/kg</small></div>
                                    <label class="switch"><input type="checkbox" checked><span class="slider round"></span></label>
                                </div>
                                <div class="card" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                                    <div><strong>Auto-accept B2B orders</strong><br><small>If stock > 1000kg</small></div>
                                    <label class="switch"><input type="checkbox"><span class="slider round"></span></label>
                                </div>
                            </div>
                            <button style="margin-top: 20px;">+ Create New Rule</button>
                        </div>`;
                    break;
                case 'gift-box':
                    html = `<h2>Farm-to-Home Gift Boxes</h2>
                        <div class="service-grid">
                            <div class="card">
                                <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80" class="card-img">
                                <h3>Seasonal Fruit Box</h3>
                                <p>The perfect healthy gift for family & friends.</p>
                                <button>Send as Gift</button>
                            </div>
                            <div class="card">
                                <img src="https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?auto=format&fit=crop&w=400&q=80" class="card-img">
                                <h3>Organic Veggie Starter</h3>
                                <p>Curated selection of 5 fresh vegetables.</p>
                                <button>Send as Gift</button>
                            </div>
                        </div>`;
                    break;
                case 'adopt-farm':
                    html = `<h2>Adopt a Farm</h2>
                        <div class="card" style="background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80'); background-size: cover; color: white; padding: 50px;">
                            <h3>Be a Virtual Farmer</h3>
                            <p>Sponsor a farm, get regular video updates, and receive the harvest directly at your doorstep.</p>
                            <button style="margin-top: 20px; background: white; color: var(--primary-green);">Browse Farms</button>
                        </div>
                        <h3 class="section-title">Why Adopt?</h3>
                        <div class="service-grid">
                            <div class="card"><h4>Direct Support</h4><p>100% funds go to the farmer.</p></div>
                            <div class="card"><h4>Fresh Produce</h4><p>Get first right to every harvest.</p></div>
                            <div class="card"><h4>Real Connection</h4><p>Live video calls with your farmer.</p></div>
                        </div>`;
                    break;
                case 'knowledge-quiz':
                    html = `<h2>Farmer Knowledge Quiz</h2>
                        <div class="quiz-container card">
                            <p><strong>Question 1 of 5:</strong></p>
                            <h3>What is the best N-P-K ratio for initial wheat growth?</h3>
                            <div class="quiz-option">A) 4:2:1</div>
                            <div class="quiz-option">B) 1:2:4</div>
                            <div class="quiz-option">C) 1:1:1</div>
                            <div class="quiz-option">D) 2:1:1</div>
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px;">
                                <span>Earn 50 Points for correct answer!</span>
                                <button style="width: auto; padding: 0 30px;">Next</button>
                            </div>
                        </div>`;
                    break;
                case 'transparency-scanner':
                    html = `<h2>Transparency Scanner</h2>
                        <div class="card" style="text-align: center; padding: 40px;">
                            <div style="width: 200px; height: 200px; background: #eee; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; border-radius: 12px; border: 2px dashed #cbd5e1;">
                                <i class="fas fa-qrcode fa-5x" style="color: #64748b;"></i>
                            </div>
                            <h3>Scan Product QR Code</h3>
                            <p>Instantly see harvest date, soil health, and farmer journey.</p>
                            <button style="margin-top: 20px;"><i class="fas fa-camera"></i> Open Camera</button>
                        </div>`;
                    break;
                case 'sustainability':
                    html = `<h2>Sustainability Score</h2>
                        <div class="card" style="text-align: center;">
                            <div style="width: 150px; height: 150px; border-radius: 50%; border: 10px solid #10b981; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center;">
                                <h1 style="font-size: 3rem; color: #10b981;">85</h1>
                            </div>
                            <h3>Excellent Eco-Score!</h3>
                            <p>Your carbon footprint is 30% lower than regional average.</p>
                            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-top: 30px;">
                                <div class="card"><i class="fas fa-water" style="color: #3b82f6;"></i><br><small>Water Saved: 20k L</small></div>
                                <div class="card"><i class="fas fa-leaf" style="color: #10b981;"></i><br><small>Organic: 95%</small></div>
                                <div class="card"><i class="fas fa-solar-panel" style="color: #f59e0b;"></i><br><small>Renewable: 40%</small></div>
                            </div>
                        </div>`;
                    break;
                case 'service-marketplace':
                    html = `<h2>Freelancer & Service Marketplace</h2>
                        <div class="service-grid">
                            <div class="card">
                                <h3>Tractor Operator</h3>
                                <p>Rajesh M. • 5km away</p>
                                <p>₹400/hour • 4.8★</p>
                                <button>Hire Now</button>
                            </div>
                            <div class="card">
                                <h3>Soil Expert</h3>
                                <p>Dr. Gupta • Online</p>
                                <p>₹200/consult • 4.9★</p>
                                <button>Book Call</button>
                            </div>
                        </div>`;
                    break;
                case 'offline-sync':
                    html = `<h2>Offline Sync Settings</h2>
                        <div class="card">
                            <div class="sync-status">
                                <div class="sync-dot"></div>
                                <span>All data is synced and safe.</span>
                            </div>
                            <div style="margin-top: 30px;">
                                <div class="card" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                                    <div><strong>Offline Mode</strong><br><small>Work without internet</small></div>
                                    <label class="switch"><input type="checkbox" checked><span class="slider round"></span></label>
                                </div>
                                <div class="card" style="display: flex; justify-content: space-between; align-items: center;">
                                    <div><strong>Sync on Metered Data</strong><br><small>Use mobile data for sync</small></div>
                                    <label class="switch"><input type="checkbox"><span class="slider round"></span></label>
                                </div>
                            </div>
                            <button style="margin-top: 20px;">Manual Sync Now</button>
                        </div>`;
                    break;
                case 'crop-experiment':
                    html = `<h2>Crop Experiment Hub</h2>
                        <div class="service-grid">
                            <div class="card">
                                <h3>Hybrid Chilli Growth</h3>
                                <p>Testing new H-21 seeds with organic compost.</p>
                                <div class="progress-bar" style="height: 10px; background: #eee; border-radius: 5px; margin: 10px 0;">
                                    <div style="width: 65%; height: 100%; background: var(--primary-green); border-radius: 5px;"></div>
                                </div>
                                <p><small>Day 45 of 90</small></p>
                                <button>Post Update</button>
                            </div>
                        </div>`;
                    break;
                case 'smart-alerts':
                    html = `<h2>Smart Alerts Center</h2>
                        <div class="card">
                            <div class="card" style="border-left: 5px solid #ef4444; margin-bottom: 10px;">
                                <strong>🚨 Price Drop Alert!</strong>
                                <p>Potato prices in nearby mandis dropped by 8%.</p>
                                <small>10 mins ago</small>
                            </div>
                            <div class="card" style="border-left: 5px solid #10b981; margin-bottom: 10px;">
                                <strong>📈 Demand Spike!</strong>
                                <p>High demand for Organic Wheat in Mumbai.</p>
                                <small>1 hour ago</small>
                            </div>
                            <div class="card" style="border-left: 5px solid #f59e0b;">
                                <strong>⚠️ Weather Warning</strong>
                                <p>Light rain expected tomorrow. Cover your harvest.</p>
                                <small>3 hours ago</small>
                            </div>
                        </div>`;
                    break;
                case 'home':
                    html = `
                    <div class="price-ticker">
                        <div class="price-ticker-content">
                            ${appState.livePrices.map(p => `
                                <span class="price-item">
                                    ${p.name}: ₹${p.price} 
                                    <i class="fas fa-caret-${p.trend === 'up' ? 'up price-up' : 'down price-down'}"></i>
                                </span>
                            `).join('')}
                            <!-- Duplicate for seamless loop -->
                            ${appState.livePrices.map(p => `
                                <span class="price-item">
                                    ${p.name}: ₹${p.price} 
                                    <i class="fas fa-caret-${p.trend === 'up' ? 'up price-up' : 'down price-down'}"></i>
                                </span>
                            `).join('')}
                        </div>
                    </div>

                    <div class="section-fade">
                        <div class="quick-actions" style="margin-top: 20px;">
                            <div class="quick-btn neon-card floating-anim" data-view="marketplace" style="border-radius: 12px; border: 1px solid rgba(74, 222, 128, 0.2);"><i class="fas fa-store neon-text"></i> Marketplace</div>
                            <div class="quick-btn neon-card floating-anim" data-view="emergency" style="border-radius: 12px; border: 1px solid rgba(255, 152, 0, 0.3); animation-delay: 0.2s;"><i class="fas fa-exclamation-triangle" style="color:#ff9800;"></i> Emergency Sale</div>
                            <div class="quick-btn neon-card floating-anim" data-view="stream" style="border-radius: 12px; animation-delay: 0.4s;"><i class="fas fa-video neon-text"></i> Live View</div>
                            <div class="quick-btn neon-card floating-anim" data-view="loan" style="border-radius: 12px; animation-delay: 0.6s;"><i class="fas fa-university neon-text"></i> Quick Loan</div>
                            <div class="quick-btn neon-card floating-anim" data-view="chat-negotiation" style="border-radius: 12px; animation-delay: 0.8s;"><i class="fas fa-comments neon-text"></i> Chat</div>
                        </div>
                        
                        <div class="card dark-glass neon-hero" style="color: white; padding: 60px 40px; border-radius: 30px; margin-bottom: 2.5rem; box-shadow: 0 30px 60px rgba(0,0,0,0.5); position: relative; border: 1px solid rgba(74, 222, 128, 0.2);">
                            <div style="position: relative; z-index: 1; max-width: 600px;">
                                <span class="neon-badge" style="padding: 8px 20px; border-radius: 30px; font-size: 0.85rem; font-weight: bold; margin-bottom: 20px; display: inline-block; letter-spacing: 1px;">AI-POWERED COMMAND CENTER</span>
                                <h1 class="neon-text" style="font-size: 4rem; margin-bottom: 15px; line-height: 1; font-weight: 900; letter-spacing: -2px;">System Online, ${appState.userName.split(' ')[0]}</h1>
                                <p style="font-size: 1.25rem; opacity: 0.8; margin-bottom: 35px; line-height: 1.6;">Real-time farm synchronization active. Market volatility: <span class="neon-text">Low</span>. Optimization score: <span style="color: #4ade80;">94%</span>.</p>
                                <div style="display: flex; gap: 20px;">
                                    <div class="badge neon-badge" style="padding: 15px 30px; font-size: 1.1rem; border-radius: 15px;"><i class="fas fa-broadcast-tower"></i> Live Data Feed</div>
                                    <div class="badge neon-badge" style="padding: 15px 30px; font-size: 1.1rem; border-radius: 15px; background: rgba(59, 130, 246, 0.1) !important; color: #60a5fa !important; border-color: rgba(59, 130, 246, 0.3) !important;"><i class="fas fa-shield-alt"></i> Secure Link</div>
                                </div>
                            </div>
                            <!-- Futuristic Decorative Elements -->
                            <div style="position: absolute; right: 40px; top: 40px; width: 150px; height: 150px; border: 2px dashed rgba(74, 222, 128, 0.2); border-radius: 50%; animation: rotate 20s linear infinite;"></div>
                            <div style="position: absolute; right: 75px; top: 75px; width: 80px; height: 80px; border: 2px solid rgba(74, 222, 128, 0.4); border-radius: 50%; animation: rotate 10s linear reverse infinite;"></div>
                        </div>

                        <!-- Judge's Impression Features -->
                        <div class="analytics-grid" style="margin-bottom: 2.5rem;">
                            <div class="card glass-card" style="padding: 25px;">
                                <h3 style="font-size: 1.2rem; color: #1e293b; margin-bottom: 10px;"><i class="fas fa-box" style="color: var(--primary-green);"></i> My Subscriptions</h3>
                                <p style="color: #64748b; margin-bottom: 15px;">You are subscribed to <strong>${appState.subscriptions.count} farms</strong> (${appState.subscriptions.farms.join(', ')}).</p>
                                <button class="primary-btn" style="width: auto; padding: 8px 20px; font-size: 0.9rem;">View Deliveries</button>
                            </div>
                            <div class="card glass-card" style="padding: 25px;">
                                <h3 style="font-size: 1.2rem; color: #1e293b; margin-bottom: 10px;"><i class="fas fa-bullseye" style="color: #f43f5e;"></i> Daily Mission</h3>
                                <p style="color: #64748b; margin-bottom: 5px;">${appState.dailyMission.task} → Earn <strong>${appState.dailyMission.reward} points</strong></p>
                                <div class="mission-progress-bar">
                                    <div class="mission-fill" style="width: ${(appState.dailyMission.progress / appState.dailyMission.total) * 100}%"></div>
                                </div>
                                <small style="display: block; margin-top: 8px; color: #94a3b8;">${appState.dailyMission.progress}/${appState.dailyMission.total} completed</small>
                            </div>
                            <div class="card glass-card" style="padding: 25px; border: 1px solid rgba(59, 130, 246, 0.3);">
                                <h3 style="font-size: 1.2rem; color: #1e293b; margin-bottom: 10px;"><i class="fas fa-brain" style="color: #3b82f6;"></i> AI Insight</h3>
                                <p style="color: #64748b; font-size: 0.95rem;">Tomato demand is increasing in your area. Consider increasing price by <span style="color: #10b981; font-weight: bold;">10%</span> for better profit.</p>
                            </div>
                        </div>

                        <div class="analytics-grid">
                            <div class="analytics-card dark-glass neon-card" style="text-align: left; padding: 30px; border-radius: 25px;">
                                <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                                    <i class="fas fa-wallet neon-text" style="font-size: 2.5rem;"></i>
                                    <span style="font-size: 0.7rem; color: #4ade80;">+2.4% <i class="fas fa-arrow-up"></i></span>
                                </div>
                                <h3 style="color: rgba(255,255,255,0.5); font-size: 0.9rem; margin: 20px 0 5px;">CREDIT RESERVE</h3>
                                <h2 class="neon-text" style="font-size: 2.8rem; font-weight: 800;">₹${appState.wallet.toLocaleString()}</h2>
                            </div>
                            <div class="analytics-card dark-glass neon-card" style="text-align: left; padding: 30px; border-radius: 25px;">
                                <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                                    <i class="fas fa-shopping-cart neon-text" style="font-size: 2.5rem;"></i>
                                    <span style="font-size: 0.7rem; color: #4ade80;">ACTIVE</span>
                                </div>
                                <h3 style="color: rgba(255,255,255,0.5); font-size: 0.9rem; margin: 20px 0 5px;">LIVE REVENUE</h3>
                                <h2 class="neon-text" style="font-size: 2.8rem; font-weight: 800;">₹42,500</h2>
                            </div>
                            <div class="analytics-card neon-card" style="text-align: left; padding: 30px; border-radius: 25px; background: linear-gradient(225deg, #065f46 0%, #064e3b 100%) !important; position: relative; overflow: hidden;">
                                <i class="fas fa-dna" style="position: absolute; right: -20px; bottom: -20px; font-size: 8rem; opacity: 0.1; color: white;"></i>
                                <i class="fas fa-award" style="font-size: 2.5rem; color: #fbbf24; filter: drop-shadow(0 0 15px rgba(251, 191, 36, 0.6));"></i>
                                <h3 style="color: rgba(255,255,255,0.7); font-size: 0.9rem; margin: 20px 0 5px;">FARMER RANK</h3>
                                <h2 style="font-size: 2.8rem; font-weight: 800; color: white;">#${Math.floor(appState.points / 10)}</h2>
                            </div>
                        </div>

                        <div style="display: flex; justify-content: space-between; align-items: center; margin: 4rem 0 2rem;">
                            <h3 style="font-size: 1.8rem; font-weight: 800; margin: 0; color: #1e293b;"><i class="fas fa-project-diagram neon-text"></i> Neural Network Nodes</h3>
                            <div style="display: flex; gap: 10px;">
                                <div style="width: 10px; height: 10px; border-radius: 50%; background: #4ade80; animation: pulse 1s infinite;"></div>
                                <small style="color: #64748b; font-weight: 600;">All Systems Operational</small>
                            </div>
                        </div>

                        <!-- Enhanced Visual Neural Network Section (Replaces empty text) -->
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin-bottom: 3rem;">
                            ${[
                            { name: 'Weather Sensors', icon: 'fa-cloud-sun' },
                            { name: 'Soil pH Monitors', icon: 'fa-flask' },
                            { name: 'Drone Patrol', icon: 'fa-paper-plane' },
                            { name: 'Market API', icon: 'fa-chart-line' },
                            { name: 'Supply Chain', icon: 'fa-truck' },
                            { name: 'Satellite Link', icon: 'fa-wifi' }
                        ].map((node, i) => `
                                <div class="card glass-card neural-node" data-type="${node.name}" style="padding: 15px; text-align: center; border: 1px solid rgba(74, 222, 128, 0.2); transition: transform 0.3s; cursor: pointer;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                                    <i class="fas ${node.icon}" style="color: ${i % 2 === 0 ? '#3b82f6' : '#10b981'}; font-size: 1.5rem; margin-bottom: 10px;"></i>
                                    <h4 style="font-size: 0.9rem; margin: 0; color: #334155;">${node.name}</h4>
                                    <div style="display:flex; justify-content:center; align-items:center; gap:5px; margin-top:5px;">
                                        <div class="status-dot" style="width:8px; height:8px; background:#4ade80; border-radius:50%; transition: box-shadow 0.2s;"></div>
                                        <small style="color: #4ade80;">Online</small>
                                    </div>
                                    <div class="node-detail" style="font-size: 0.75rem; color: #64748b; margin-top: 5px; height: 1.2em; overflow: hidden; white-space: nowrap;">Initializing...</div>
                                </div>
                            `).join('')}
                            </div>
                        </div>
                        
                        <div class="service-grid">
                            <div class="card glass-card" data-view="marketplace" style="padding: 25px; border-radius: 24px; transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); cursor: pointer; border: 1px solid rgba(255,255,255,0.8);">
                                <div style="width: 60px; height: 60px; background: #f0fdf4; border-radius: 18px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
                                    <i class="fas fa-store" style="font-size: 1.8rem; color: var(--primary-green);"></i>
                                </div>
                                <h3 style="font-size: 1.4rem; color: #1e293b; margin-bottom: 10px;">Smart Market</h3>
                                <p style="color: #64748b; line-height: 1.6;">Automated trading algorithms for your surplus harvest.</p>
                            </div>
                            <div class="card glass-card" data-view="ai-assistant" style="padding: 25px; border-radius: 24px; transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); cursor: pointer; border: 1px solid rgba(255,255,255,0.8);">
                                <div style="width: 60px; height: 60px; background: #eff6ff; border-radius: 18px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
                                    <i class="fas fa-brain" style="font-size: 1.8rem; color: #2563eb;"></i>
                                </div>
                                <h3 style="font-size: 1.4rem; color: #1e293b; margin-bottom: 10px;">AI Agronomist</h3>
                                <p style="color: #64748b; line-height: 1.6;">Predictive soil modeling and yield forecasting.</p>
                            </div>
                            <div class="card glass-card" data-view="analytics" style="padding: 25px; border-radius: 24px; transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); cursor: pointer; border: 1px solid rgba(255,255,255,0.8);">
                                <div style="width: 60px; height: 60px; background: #fff7ed; border-radius: 18px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
                                    <i class="fas fa-chart-line" style="font-size: 1.8rem; color: #ea580c;"></i>
                                </div>
                                <h3 style="font-size: 1.4rem; color: #1e293b; margin-bottom: 10px;">Deep Analytics</h3>
                                <p style="color: #64748b; line-height: 1.6;">Visualized profit cycles and cost-efficiency metrics.</p>
                            </div>
                        </div>

                        <!-- SALE PRODUCTS AT THE BOTTOM OF THE PAGE -->
                        <div style="margin-top: 5rem; border-top: 2px solid rgba(74, 222, 128, 0.1); padding-top: 3rem;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                                <h3 style="font-size: 1.8rem; font-weight: 800; color: #1e293b;"><i class="fas fa-shopping-bag neon-text"></i> My Products for Sale</h3>
                                <button id="open-add-product" class="primary-btn" style="width: auto; padding: 10px 25px; border-radius: 12px;">+ Add New Product</button>
                            </div>
                            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 2rem;">
                                ${appState.myProducts.map(p => `
                                    <div class="card glass-card" style="padding: 15px; border-radius: 20px; position: relative; overflow: hidden;">
                                        ${p.trending ? '<div class="neon-badge" style="position: absolute; top: 10px; right: 10px; z-index: 1; font-size: 0.6rem; padding: 4px 10px;">TRENDING</div>' : ''}
                                        <img src="${p.img}" style="width: 100%; height: 160px; object-fit: cover; border-radius: 15px; margin-bottom: 15px;">
                                        <h4 style="font-size: 1.2rem; color: #1e293b; margin-bottom: 5px;">${p.name}</h4>
                                        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
                                            <span style="font-weight: 700; color: var(--primary-green); font-size: 1.1rem;">₹${p.price}/kg</span>
                                            <span style="font-size: 0.8rem; color: #64748b; background: #f1f5f9; padding: 4px 10px; border-radius: 20px;">Stock: ${p.stock}kg</span>
                                        </div>
                                        <div style="margin-top: 15px; display: flex; gap: 10px;">
                                            <button class="primary-btn" data-action="edit-product" data-product-id="${p.id}" style="padding: 8px; font-size: 0.9rem; flex: 1;">Edit Listing</button>
                                            <button class="neon-badge" style="width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center; cursor: pointer;"><i class="fas fa-chart-line"></i></button>
                                        </div>
                                    </div>
                                `).join('') || '<div class="card glass-card" style="padding: 25px;"><h4 style="margin-bottom: 10px;">No listings yet</h4><p style="color: #64748b;">Create your first product to make this dashboard live.</p></div>'}
                            </div>
                        </div>
                    </div>
                `;
                    break;
                case 'marketplace':
                    const marketFilter = (appState.marketplaceFilter || 'all').toLowerCase();
                    const matchesMarketFilter = (p) => {
                        if (marketFilter === 'all') return true;
                        if (marketFilter === 'trending') return !!p.trending;
                        return (p.category || '').toLowerCase() === marketFilter;
                    };
                    const marketProducts = appState.products.filter(matchesMarketFilter);
                    const trendingProducts = marketProducts.filter(p => p.trending);

                    html = `<h2>Live Marketplace</h2>
                        <div class="filters-bar" style="display: flex; gap: 10px; margin-bottom: 20px; overflow-x: auto; padding-bottom: 10px;">
                            <button class="quick-btn ${marketFilter === 'all' ? 'active' : ''}" data-action="market-filter" data-filter="all">All Crops</button>
                            <button class="quick-btn ${marketFilter === 'trending' ? 'active' : ''}" data-action="market-filter" data-filter="trending">Trending</button>
                            <button class="quick-btn ${marketFilter === 'vegetables' ? 'active' : ''}" data-action="market-filter" data-filter="vegetables">Vegetables</button>
                            <button class="quick-btn ${marketFilter === 'cereals' ? 'active' : ''}" data-action="market-filter" data-filter="cereals">Cereals</button>
                            <button class="quick-btn ${marketFilter === 'fruits' ? 'active' : ''}" data-action="market-filter" data-filter="fruits">Fruits</button>
                            <button class="quick-btn" data-action="market-filter-more"><i class="fas fa-filter"></i> More Filters</button>
                        </div>
                        <h3 class="section-title"><i class="fas fa-fire" style="color: #ff5252;"></i> Trending Today</h3>
                        <div class="service-grid">
                            ${(trendingProducts.length ? trendingProducts : marketProducts).map(p => `
                                <div class="card">
                                    ${p.trending ? '<div class="harvest-fresh">TRENDING</div>' : ''}
                                    <img src="${p.img}" class="card-img">
                                    <h3>${p.name}</h3>
                                    <p>₹${p.price}/kg | Stock: ${p.stock}kg</p>
                                    <div style="display: flex; gap: 5px; margin-top: 10px;">
                                        <button data-action="buy-now" data-product-id="${p.id}" style="flex: 1; padding: 8px;">Buy Now</button>
                                        <button class="quick-btn" data-action="toggle-favorite" data-product-id="${p.id}" style="width: auto;">
                                            <i class="fas fa-heart" style="color: ${appState.favorites.includes(p.id) ? '#ff5252' : '#94a3b8'}"></i>
                                        </button>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                        <h3 class="section-title" style="margin-top: 30px;">All Products</h3>
                        <div class="service-grid">
                            ${marketProducts.map(p => `
                                <div class="card">
                                    <img src="${p.img}" class="card-img">
                                    <h3>${p.name}</h3>
                                    <p>₹${p.price}/kg | Stock: ${p.stock}kg</p>
                                    <button data-action="view-product" data-product-id="${p.id}" style="margin-top: 10px;">View Details</button>
                                </div>
                            `).join('')}
                        </div>`;
                    break;
                case 'smart-buying':
                    html = `<h2>Smart Buying Experience</h2>
                        <h3 class="section-title">Recommended For You</h3>
                        <div class="service-grid">
                            ${appState.recommendations.map(r => `
                                <div class="card">
                                    <img src="${r.img}" class="card-img">
                                    <h3>${r.name}</h3>
                                    <p>Best price: ₹${r.price}</p>
                                    <button data-action="add-to-basket" data-item-id="${r.id}">Add to Basket</button>
                                </div>
                            `).join('')}
                        </div>
                        <h3 class="section-title" style="margin-top: 30px;">Combo Offers & Subscriptions</h3>
                        <div class="service-grid">
                            <div class="card subscription-card">
                                <h4>Monthly Veggie Box</h4>
                                <div class="subscription-price">₹1,499/mo</div>
                                <p>15kg Assorted fresh vegetables delivered weekly.</p>
                                <button data-action="subscribe-box" style="margin-top: 15px;">Subscribe Now</button>
                            </div>
                            <div class="card" style="background: #fff3e0;">
                                <h4>Seed + Fertilizer Combo</h4>
                                <p>Save 15% when you buy together.</p>
                                <div style="font-size: 1.2rem; font-weight: bold; margin: 10px 0;">₹1,100 <span style="text-decoration: line-through; color: #999; font-size: 0.9rem;">₹1,350</span></div>
                                <button data-action="get-offer" style="background: #ff9800;">Get Offer</button>
                            </div>
                        </div>`;
                    break;
                case 'chat-negotiation':
                    html = `<h2>Live Chat & Negotiation</h2>
                        <div class="card dark-glass" style="height: 500px; display: flex; flex-direction: column; padding: 0;">
                            <div style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; gap: 15px;">
                                <i class="fas fa-user-circle neon-text" style="font-size: 2.5rem;"></i>
                                <div><strong style="color: white;">Buyer: Amit Sharma</strong><br><small style="color: #4ade80;">Online</small></div>
                            </div>
                            <div id="chat-neg-messages" style="flex: 1; overflow-y: auto; padding: 20px; display: flex; flex-direction: column; gap: 15px;">
                                ${appState.messages.map(m => `
                                    <div class="message ${m.sender === 'You' ? 'user' : 'bot'}" style="max-width: 70%; ${m.sender === 'You' ? 'align-self: flex-end;' : 'align-self: flex-start; background: #f0f0f0;'}">
                                        <div style="font-size: 0.7rem; opacity: 0.7; margin-bottom: 3px;">${m.sender} • ${m.time}</div>
                                        ${escapeHtml(m.text)}
                                    </div>
                                `).join('')}
                            </div>
                            <div style="padding: 15px; border-top: 1px solid #eee; display: flex; flex-direction: column; gap: 10px;">
                                <div style="display: flex; gap: 10px;">
                                    <button class="quick-btn" data-action="chat-suggest" data-text="Suggest Price: ₹22/kg" style="width: auto; font-size: 0.8rem;">Suggest Price: ₹22/kg</button>
                                    <button class="quick-btn" data-action="chat-suggest" data-text="Available Tomorrow" style="width: auto; font-size: 0.8rem;">Available Tomorrow</button>
                                </div>
                                <div style="display: flex; gap: 10px;">
                                    <input type="text" id="chat-neg-input" placeholder="Type a message..." style="flex: 1; border-radius: 20px;">
                                    <button data-action="chat-send" style="width: auto; padding: 0 20px; border-radius: 20px;"><i class="fas fa-paper-plane"></i></button>
                                </div>
                            </div>
                        </div>`;
                    break;
                case 'analytics':
                    html = `<h2>Personal Analytics Dashboard</h2>
                        <div class="analytics-grid">
                            <div class="analytics-card" style="background: #e8f5e9; color: #2e7d32;"><h3>Weekly Earnings</h3><h2>₹${appState.earnings.reduce((a, b) => a + b, 0).toLocaleString()}</h2></div>
                            <div class="analytics-card" style="background: #ffebee; color: #c62828;"><h3>Weekly Spending</h3><h2>₹${appState.spending.reduce((a, b) => a + b, 0).toLocaleString()}</h2></div>
                            <div class="analytics-card" style="background: #e3f2fd; color: #1565c0;"><h3>Net Profit</h3><h2>₹${(appState.earnings.reduce((a, b) => a + b, 0) - appState.spending.reduce((a, b) => a + b, 0)).toLocaleString()}</h2></div>
                        </div>
                        <div class="card" style="height: 300px; display: flex; align-items: flex-end; gap: 10px; padding: 40px 20px 20px;">
                            ${appState.earnings.map((e, i) => `
                                <div style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 10px;">
                                    <div style="width: 100%; background: var(--primary-green); height: ${(e / 20000) * 100}%; border-radius: 4px 4px 0 0; position: relative;" title="Day ${i + 1}: ₹${e}">
                                        <div style="position: absolute; top: -20px; width: 100%; text-align: center; font-size: 0.7rem; color: #666;">₹${e / 1000}k</div>
                                    </div>
                                    <div style="font-size: 0.8rem; color: #666;">Day ${i + 1}</div>
                                </div>
                            `).join('')}
                        </div>`;
                    break;
                case 'ai-assistant':
                    html = `<h2>AI Farming Assistant</h2>
                        <div class="card" style="height: 550px; display: flex; flex-direction: column; padding: 0;">
                            <div id="ai-messages" style="flex: 1; padding: 20px; overflow-y: auto;">
                                ${appState.aiMessages.map(m => `
                                    <div class="message ${m.sender === 'You' ? 'user' : 'bot'}" style="${m.sender === 'You' ? 'align-self: flex-end;' : 'background: #e8f5e9;'} margin-bottom: 12px;">
                                        <div style="font-size: 0.7rem; opacity: 0.7; margin-bottom: 3px;">${m.sender}${m.time ? ` • ${m.time}` : ''}</div>
                                        ${escapeHtml(m.text)}
                                    </div>
                                `).join('')}

                                <div style="margin-top: 20px;">
                                    <p style="font-size: 0.8rem; color: #64748b; margin-bottom: 10px;">Suggested Topics:</p>
                                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                                        <button class="quick-btn" data-action="ai-suggest" data-text="What crop should I grow in this season?" style="text-align: left; padding: 10px; font-size: 0.85rem;"><i class="fas fa-seedling"></i> Crop Planning</button>
                                        <button class="quick-btn" data-action="ai-suggest" data-text="Predict potato prices for next month." style="text-align: left; padding: 10px; font-size: 0.85rem;"><i class="fas fa-chart-line"></i> Market Trends</button>
                                        <button class="quick-btn" data-action="ai-suggest" data-text="How to control pests in Tomato?" style="text-align: left; padding: 10px; font-size: 0.85rem;"><i class="fas fa-bug"></i> Pest Control</button>
                                        <button class="quick-btn" data-action="ai-suggest" data-text="Best organic fertilizer for soil?" style="text-align: left; padding: 10px; font-size: 0.85rem;"><i class="fas fa-leaf"></i> Organic Farming</button>
                                        <button class="quick-btn" data-action="ai-suggest" data-text="Government schemes for farmers?" style="text-align: left; padding: 10px; font-size: 0.85rem;"><i class="fas fa-university"></i> Gov Schemes</button>
                                        <button class="quick-btn" data-action="ai-suggest" data-text="Tips for drip irrigation?" style="text-align: left; padding: 10px; font-size: 0.85rem;"><i class="fas fa-tint"></i> Water Mgmt</button>
                                    </div>
                                </div>
                            </div>
                            <div style="padding: 15px; border-top: 1px solid #eee; display: flex; gap: 10px; background: #fff; border-radius: 0 0 12px 12px;">
                                <input type="text" id="ai-input" placeholder="Ask AI about crops, weather, or prices..." style="flex: 1; border-radius: 20px; padding: 10px 15px; border: 1px solid #ddd;">
                                <button data-action="ai-send" style="width: auto; padding: 0 20px; border-radius: 20px;"><i class="fas fa-robot"></i></button>
                            </div>
                        </div>`;
                    break;
                case 'farmer-story':
                    html = `<h2>Farmer Stories (Emotional UI)</h2>
                        <div class="service-grid">
                            <div class="card" style="padding: 0; overflow: hidden;">
                                <img src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&q=80" style="width: 100%; height: 200px; object-fit: cover;">
                                <div style="padding: 20px;">
                                    <div style="display: flex; align-items: center; gap: 15px; margin-top: -50px; position: relative;">
                                        <i class="fas fa-user-circle" style="font-size: 5rem; color: var(--primary-green); background: white; border-radius: 50%; border: 4px solid white;"></i>
                                        <div style="margin-top: 30px;"><strong>Suresh Patel</strong><br><small>Gujarat • 15 Years Experience</small></div>
                                    </div>
                                    <p style="margin-top: 15px; font-style: italic; color: #555;">"Farming is not just a job, it's our heritage. I use organic methods passed down through 3 generations."</p>
                                    <div style="display: flex; gap: 10px; margin-top: 15px;">
                                        <div class="badge"><i class="fas fa-leaf"></i> Organic</div>
                                        <div class="badge"><i class="fas fa-star"></i> 4.9 (230 Reviews)</div>
                                    </div>
                                    <button style="margin-top: 20px; background: var(--earth-brown);">Follow Story</button>
                                </div>
                            </div>
                        </div>`;
                    break;
                case 'deals':
                    html = `<h2>Daily Deals & Flash Sales</h2>
                        <div class="card" style="background: #ff5252; color: white; text-align: center; padding: 30px; margin-bottom: 20px;">
                            <h3>⚡ MEGA FLASH SALE ENDS IN:</h3>
                            <div style="font-size: 2.5rem; font-weight: bold; margin: 10px 0;">02 : 45 : 12</div>
                            <p>Up to 50% off on all seasonal seeds!</p>
                        </div>
                        <div class="service-grid">
                            ${appState.deals.map(d => `
                                <div class="card">
                                    <div class="harvest-fresh" style="background: #ff5252;">${d.discount} OFF</div>
                                    <img src="${d.img}" class="card-img">
                                    <h3>${d.name}</h3>
                                    <div style="font-size: 1.2rem; font-weight: bold; margin: 10px 0;">₹${d.price}</div>
                                    <button style="background: #ff5252;">Grab Deal</button>
                                </div>
                            `).join('')}
                        </div>`;
                    break;
                case 'gamification':
                    html = `<h2>Gamification: My Progress</h2>
                        <div class="analytics-grid">
                            <div class="analytics-card" style="background: #ffb400;"><h3>Current Level</h3><h2>12</h2></div>
                            <div class="analytics-card" style="background: #4caf50;"><h3>XP Points</h3><h2>${appState.points}</h2></div>
                            <div class="analytics-card" style="background: #9c27b0;"><h3>Achievements</h3><h2>${appState.badges.length}</h2></div>
                        </div>
                        <h3 class="section-title">Your Badges</h3>
                        <div style="display: flex; gap: 20px; overflow-x: auto; padding: 10px;">
                            ${appState.badges.map(b => `
                                <div style="text-align: center; min-width: 100px;">
                                    <div style="width: 80px; height: 80px; background: #fff; border-radius: 50%; display: flex; justify-content: center; align-items: center; box-shadow: var(--shadow); margin: 0 auto 10px; border: 3px solid #ffb400;">
                                        <i class="fas fa-award" style="font-size: 2rem; color: #ffb400;"></i>
                                    </div>
                                    <small style="font-weight: bold;">${b}</small>
                                </div>
                            `).join('')}
                        </div>
                        <h3 class="section-title" style="margin-top: 30px;">Daily Quests</h3>
                        <div class="card" style="margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center;">
                            <div><strong>List 1 new product</strong><br><small>+50 XP</small></div>
                            <i class="fas fa-check-circle" style="color: #4caf50; font-size: 1.5rem;"></i>
                        </div>
                        <div class="card" style="margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center;">
                            <div><strong>Complete 1 sale</strong><br><small>+100 XP</small></div>
                            <button class="quick-btn" style="width: auto;">In Progress</button>
                        </div>`;
                    break;
                case 'learning':
                    html = `<h2>Learning Hub (Farmer YouTube)</h2>
                        <div class="service-grid">
                            <div class="card" style="padding: 0; overflow: hidden;">
                                <div style="height: 200px; background: #000; display: flex; justify-content: center; align-items: center; position: relative;">
                                    <img src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=600&q=80" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.7;">
                                    <i class="fas fa-play-circle" style="position: absolute; font-size: 4rem; color: white; opacity: 0.8; cursor: pointer;"></i>
                                </div>
                                <div style="padding: 15px;">
                                    <strong>Advanced Irrigation Techniques</strong>
                                    <p style="font-size: 0.8rem; color: #666; margin-top: 5px;">15k Views • 2 days ago</p>
                                </div>
                            </div>
                            <div class="card" style="padding: 0; overflow: hidden;">
                                <div style="height: 200px; background: #000; display: flex; justify-content: center; align-items: center; position: relative;">
                                    <img src="https://images.unsplash.com/photo-1592819695396-064b9572a660?auto=format&fit=crop&w=600&q=80" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.7;">
                                    <i class="fas fa-play-circle" style="position: absolute; font-size: 4rem; color: white; opacity: 0.8; cursor: pointer;"></i>
                                </div>
                                <div style="padding: 15px;">
                                    <strong>Organic Pesticide Preparation</strong>
                                    <p style="font-size: 0.8rem; color: #666; margin-top: 5px;">8k Views • 1 week ago</p>
                                </div>
                            </div>
                        </div>`;
                    break;
                case 'stream':
                    html = `<h2>Live Farm Streaming</h2>
                        <div class="card" style="background: #000; color: white; padding: 0; overflow: hidden; position: relative;">
                            <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80" style="width:100%; height:400px; object-fit:cover; opacity: 0.8;">
                            <div style="position: absolute; top: 20px; left: 20px; background: rgba(255,0,0,0.8); padding: 5px 15px; border-radius: 5px; font-weight: bold;"><i class="fas fa-circle"></i> LIVE</div>
                            <div style="position: absolute; bottom: 20px; left: 20px;"><h4>Farm: Green Valley (Field A)</h4><p>Viewers: 124 Buyers</p></div>
                        </div>
                        <div class="service-grid" style="margin-top:20px;">
                            <div class="card"><h3>Stream Settings</h3><button>Go Live</button></div>
                            <div class="card"><h3>Transparency Score</h3><p>Current: <strong>98%</strong></p></div>
                        </div>`;
                    break;
                case 'heatmap':
                    html = `<h2>Demand Heatmap</h2>
                        <div class="card" style="height:400px; background: url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1000&q=80'); background-size: cover; position: relative;">
                            <div style="position: absolute; top: 100px; left: 150px; width:100px; height:100px; background: rgba(255,0,0,0.5); border-radius:50%; filter:blur(20px);"></div>
                            <div style="position: absolute; top: 200px; left: 300px; width:150px; height:150px; background: rgba(255,0,0,0.4); border-radius:50%; filter:blur(30px);"></div>
                            <div class="map-overlay" style="position: absolute; bottom: 20px; right: 20px; background: white; padding: 10px; border-radius: 5px;">
                                <p><i class="fas fa-circle" style="color:red;"></i> High Demand (Potatoes)</p>
                            </div>
                        </div>`;
                    break;
                case 'loan':
                    html = `<h2>Quick Loan</h2>
                        <div class="card" style="margin-bottom: 20px; background: linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%); color: white;">
                            <h3><i class="fas fa-university"></i> Instant Micro-Loan</h3>
                            <p>Apply in seconds. Demo approval for testing the UI flow.</p>
                        </div>
                        <div class="card">
                            <div class="input-group">
                                <label>Loan Amount (₹)</label>
                                <input type="number" id="loan-amount" value="50000" min="1000" step="500">
                            </div>
                            <div class="input-group">
                                <label>Tenure (months)</label>
                                <input type="number" id="loan-tenure" value="6" min="1" step="1">
                            </div>
                            <div class="loan-stepper" style="margin-top: 15px;">
                                <div class="step"></div>
                                <div class="step"></div>
                                <div class="step"></div>
                            </div>
                            <button id="apply-loan" style="margin-top: 10px;">Apply Now</button>
                            <div id="loan-status" style="margin-top: 15px;"></div>
                        </div>`;
                    break;
                case 'carbon':
                    html = `<h2>Carbon Credits Wallet</h2>
                        <div class="analytics-grid">
                            <div class="analytics-card" style="background: #f0fdf4; color: #166534;">
                                <h3>Carbon Credits</h3>
                                <h2>${Number(appState.carbonCredits || 0).toFixed(1)}</h2>
                                <small>Credits (demo)</small>
                            </div>
                            <div class="analytics-card" style="background: #eff6ff; color: #1e40af;">
                                <h3>Wallet Balance</h3>
                                <h2>₹${Number(appState.wallet || 0).toLocaleString()}</h2>
                                <small>INR</small>
                            </div>
                        </div>
                        <div class="card">
                            <h3>Redeem Credits</h3>
                            <p>Demo rate: <strong>₹850</strong> per credit.</p>
                            <button class="redeem-carbon" ${appState.carbonCredits > 0 ? '' : 'disabled'} style="margin-top: 10px;">Redeem Now</button>
                        </div>`;
                    break;
                case 'disease':
                    html = `<h2>AI Crop Disease Check</h2><div class="card"><div class="disease-preview-grid" style="display:flex; gap:20px; margin-bottom:20px;">
                        <img src="https://images.unsplash.com/photo-1591130901023-013624d7759c?auto=format&fit=crop&w=400&q=80" class="card-img" style="width:200px; height:150px; object-fit:cover; border-radius:8px;">
                        <div><h4>Example: Tomato Blight</h4><p>AI identifies patterns in leaves to detect early signs of disease.</p></div>
                        </div><div class="upload-area" id="upload-disease-img"><i class="fas fa-cloud-upload-alt fa-2x"></i><p>Upload your crop image for instant diagnosis</p></div><button id="analyze-disease" style="margin-top:10px;">Analyze Now</button><div id="disease-result" class="analysis-result"></div></div>`;
                    break;
                case 'calculator':
                    html = `<h2>Profit Calculator</h2><div class="card" style="margin-bottom:20px;"><img src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1000&q=80" class="card-img" style="height:200px;"></div><div class="card"><div class="input-group"><label>Expected Sales (₹)</label><input type="number" id="expected-sales"></div><div class="input-group"><label>Input Costs (₹)</label><input type="number" id="seeds-cost"></div><div class="input-group"><label>Labor Costs (₹)</label><input type="number" id="labor-cost"></div><button id="calculate-btn">Calculate Profit</button><div id="calc-output" style="margin-top:10px; padding:10px; border-radius:6px; color:white;"></div></div>`;
                    break;
                case 'emergency':
                    html = `<h2>Emergency Crop Sale Mode</h2>
                        <div class="card" style="background:#fff3e0; border-left:5px solid #ff9800;">
                            <h3>🚨 Urgent Sale Needed?</h3>
                            <p>Need to sell immediately due to rain or urgency? We'll push your listing to top buyers.</p>
                            <button style="background:#ff9800; margin-top:15px;">ACTIVATE EMERGENCY MODE</button>
                        </div>`;
                    break;
                case 'rescue':
                    html = `<h2>Unsold Rescue</h2><div class="card" style="margin-bottom:20px;"><img src="https://images.unsplash.com/photo-1590779033100-9f60705a2f3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" class="card-img" style="height:250px;"></div><div class="card"><h3>Donate Excess Harvest</h3><p>Help local NGOs and get tax benefits.</p><button>Donate Now</button></div>`;
                    break;
                case 'community':
                    html = `<h2>Farmer Community</h2><div class="card" style="margin-bottom:20px;"><img src="https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1000&q=80" class="card-img" style="height:250px;"></div><div class="card"><img src="https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&w=400&q=80" class="card-img" style="height:100px;"><h3>Active Discussion</h3><p>"How to manage pest control in Organic Cotton?"</p><button>Join Discussion</button></div>`;
                    break;
                case 'harvest':
                    html = `<h2>Smart Harvest Booking</h2>
                        <div class="card">
                            <img src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1000&q=80" class="card-img" style="height:200px;">
                            <h3>Pre-book Harvest Date</h3>
                            <p>Buyers can book vegetables before they are harvested.</p>
                            <div class="calendar-mock" style="display:grid; grid-template-columns: repeat(7, 1fr); gap:10px; margin:20px 0;">
                                ${Array.from({ length: 14 }, (_, i) => `<div style="padding:10px; border:1px solid #ddd; text-align:center; border-radius:5px; ${i === 5 ? 'background:var(--primary-green); color:white;' : ''}">Day ${i + 1}</div>`).join('')}
                            </div>
                            <button>Open Booking</button>
                        </div>`;
                    break;
                case 'products':
                    html = `<h2>Inventory Management</h2><button id="open-add-product" style="margin-bottom:20px;">+ New Crop Listing</button><div class="service-grid">${appState.myProducts.map(p => `<div class="card">${p.fresh ? '<span class="harvest-fresh">Fresh</span>' : ''}<img src="${p.img}" class="card-img"><h3>${p.name}</h3><p>${p.stock}kg | ₹${p.price}/kg</p><div style="display:flex; gap:8px; margin-top:10px;"><button class="quick-btn" data-action="edit-stock" data-product-id="${p.id}" style="padding:5px 10px; font-size:0.8rem;">Edit Stock</button><button class="quick-btn" data-action="edit-product" data-product-id="${p.id}" style="padding:5px 10px; font-size:0.8rem;">Edit Listing</button></div></div>`).join('') || '<div class="card"><h3>No products yet</h3><p>Your live listings will appear here after you add them.</p></div>'}</div>`;
                    break;
                case 'weather':
                    const wData = [];
                    for (let i = -7; i <= 7; i++) {
                        const d = new Date(); d.setDate(d.getDate() + i);
                        const dayLabel = d.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric' });
                        const temp = Math.floor(Math.random() * 10 + 25) + '°C';
                        const type = i < 0 ? 'past' : (i === 0 ? 'today' : 'future');
                        wData.push({ date: dayLabel, temp: temp, type: type });
                    }
                    html = `<h2>Weather Reporting & Advisory</h2>
                        <div class="card weather-banner" style="background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=1200&q=80'); color: white; margin-bottom: 20px;">
                            <h3>Current: 28°C | Sunny</h3>
                            <p><strong>Seasonal Suitability:</strong> Spring/Summer. Perfect for sowing rice and pulses.</p>
                            <p>Advisory: No rain expected for 48 hours. Continue planned irrigation.</p>
                        </div>
                        <h3 class="section-title"><i class="fas fa-history"></i> 7-Day History & 7-Day Forecast</h3>
                        <div class="weather-timeline">${wData.map(d => `<div class="weather-day ${d.type}"><div class="date">${d.date}</div><div class="icon"><i class="fas fa-sun"></i></div><div class="temp">${d.temp}</div></div>`).join('')}</div>
                        
                        <div class="service-grid" style="margin-top:20px;">
                            <div class="card"><h3>Winter</h3><p>Suitable for Wheat, Mustard, and Peas.</p></div>
                            <div class="card"><h3>Monsoon</h3><p>Suitable for Rice, Maize, and Soybeans.</p></div>
                            <div class="card"><h3>Summer</h3><p>Suitable for Watermelons, Cucumber, and Millets.</p></div>
                        </div>`;
                    break;
                case 'mentoring':
                    html = `<h2>Live Farmer Mentoring Hub</h2>
                        <div class="card" style="background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1200&q=80'); color: white; padding: 40px; border-radius: 12px; margin-bottom: 20px;">
                            <h3>Next Live Session: <strong>Organic Pest Control</strong></h3>
                            <p>Join Expert Dr. Sharma Tomorrow at 10:00 AM</p>
                            <button style="width:auto;">Register for Session</button>
                        </div>
                        
                        <div class="mentoring-categories">
                            <h3 class="section-title"><i class="fas fa-tractor"></i> Field Preparation</h3>
                            <div class="service-grid">
                                <div class="card">
                                    <h4>How to Plough</h4>
                                    <p>Step-by-step guide on depth and soil aeration techniques.</p>
                                    <button class="quick-btn">Read Guide</button>
                                </div>
                                <div class="card">
                                    <h4>Soil Nutrients</h4>
                                    <p>Understanding N-P-K levels before planting.</p>
                                    <button class="quick-btn">View Chart</button>
                                </div>
                            </div>
                        </div>`;
                    break;
                case 'iot':
                    html = `<h2>Live IoT Sensors</h2><div class="card" style="margin-bottom:20px;"><img src="https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=1000&q=80" class="card-img" style="height:250px;"><h3>Smart Irrigation Control</h3></div><div class="analytics-grid"><div class="sensor-card"><div>Soil Moisture</div><div class="sensor-value">${Math.floor(Math.random() * 20 + 50)}%</div></div><div class="sensor-card"><div>Humidity</div><div class="sensor-value">${Math.floor(Math.random() * 15 + 40)}%</div></div><div class="sensor-card"><div>PH Level</div><div class="sensor-value">${(Math.random() * 1 + 6).toFixed(1)}</div></div></div>`;
                    break;
                default: html = `<h2>Welcome to Farm Link</h2><p>Select a service from the sidebar to begin.</p>`;
            }
            contentArea.innerHTML = html;
        }

        // --- Fast Lang Toggle ---
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active');
                showPopupNotification(`Lang: ${btn.textContent}`);
            });
        });

        navigateTo('home');
    });
