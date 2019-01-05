// File Name: api-routes.js

// Imports

// Initialization
// Initialize Express Router
let router = require('express').Router();

// Set Default API Response
router.get('/', function(req, res) {
    res.json({
        status: 'API Is Working',
        message: 'Resthub with MVC'
    })
});

// Export API Routes
module.exports = router;