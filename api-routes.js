// File Name: api-routes.js

// Imports

// Initialization
// Initialize Express Router
let router = require('express').Router();
// Import Contact Controller
var contactController = require('./contactController')

// Set Default API Response
router.get('/', function(req, res) {
    res.json({
        status: 'API Is Working',
        message: 'Resthub with MVC'
    })
});

// Contact Routes
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);

router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);

// Export API Routes
module.exports = router;