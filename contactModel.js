// File Name : ContactModel.js

// Imports
var mongoose = require('mongoose');
// Setup Schema
var contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: String,
    phone: String,
    create_date: {
        type: Date,
        default: Date.now
    }
})

// Export Contact Model
var Contact = module.exports = mongoose.model('contact', contactSchema);

module.exports.get = function(callback, limit){
    Contact.find(callback).limit(limit);
}

