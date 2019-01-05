// File Name: Index.js

// Imports
let express = require('express')
let apiRoutes = require('./api-routes')
let bodyParser = require('body-parser')
let mongoose = require('mongoose')

// Initialize the app
let app = express();

// Configure body parser to handle post requests
app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(bodyParser.json())

// Connect to Mongoose and set connection variables
mongoose.connect('mongodb://localhost/resthub');
var db = mongoose.connection;

// Setup server port
var port = process.env.port || 8080;

// // Send Message for default URL
app.get('/', (req, res) => res.send('Welcome to Node API with Nodemon'));

// Use API routes in the app
app.use('/api', apiRoutes);

// Lauch app
app.listen(port, function(){
    console.log('Running the API on Port: ', + port)
});