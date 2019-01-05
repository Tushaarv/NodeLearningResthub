// File Name: Index.js

// Imports
let express = require('express')

// Initialize the app
let app = express()

// Setup server port
var port = process.env.port || 8080

// Send Message for default URL
app.get('/', (req, res) => res.send('Welcome to Node API'))

// Lauch app
app.listen(port, function(){
    console.log("Running the API on Port: ", + port)
})

