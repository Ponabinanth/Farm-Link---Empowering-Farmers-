const express = require('express');
const path = require('path');
const debug = require('debug')('farm:server');

const app = express();
const PORT = process.env.PORT || 3000;

// Feature: Middleware for parsing request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Feature: Request Logger
app.use((req, res, next) => {
    debug(`${req.method} request to ${req.url}`);
    next();
});

// Feature: Serve Static Files (Frontend)
// Make sure you have a 'public' folder for HTML/CSS/JS
app.use(express.static(path.join(__dirname, 'public')));

// Feature: API Routes

// 1. Health Check
app.get('/api/health', (req, res) => {
    res.json({
        status: 'up',
        uptime: process.uptime(),
        timestamp: new Date()
    });
});

// 2. Example Business Logic Route
app.get('/api/inventory', (req, res) => {
    // Mock data - replace with database calls later
    const inventory = [
        { id: 1, item: 'Tractor', status: 'Active' },
        { id: 2, item: 'Seeds', quantity: 500, unit: 'kg' },
        { id: 3, item: 'Fertilizer', quantity: 20, unit: 'bags' }
    ];
    res.json(inventory);
});

// Feature: 404 Handler (Page Not Found)
app.use((req, res, next) => {
    res.status(404).send({
        error: 'Not Found',
        message: 'The requested resource could not be found.'
    });
});

// Feature: Global Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({
        error: 'Internal Server Error',
        message: 'Something went wrong on the farm!'
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`Debug logs enabled? Run: set DEBUG=farm:* & node server.js`);
});