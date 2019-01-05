// File Name: Index.js

// Imports
let express = require('express')
let apiRoutes = require("./api-routes")

// Initialize the app
let app = express();

// Setup server port
var port = process.env.port || 8080;

// // Send Message for default URL
app.get('/', (req, res) => res.send('Welcome to Node API'));

// Use API routes in the app
app.use('/api', apiRoutes);

// Lauch app
app.listen(port, function(){
    console.log('Running the API on Port: ', + port)
});