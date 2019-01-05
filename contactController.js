// File Name: ContactController.js

// Imports
let Contact = require('./contactModel');

// Handle Index Actions
exports.index = function(req, res) {
    Contact.get(function (err, contacts){
        if (err) {
            res.json({
                status: "error",
                message: err
            })
        }

        res.json({
            status: "Sucecss",
            message: "Contact retrieved successfully",
            data: contacts
        });
    });
};

// Handle Create Contact Actions
exports.new = function(req, res) {
    var contact = new Contact();
    contact.name = req.body.name ? req.body.name : contact.name;
    contact.gender = req.body.gender;
    contact.email = req.body.email;
    contact.phone = req.body.phone;

    // Save the Contact and check for errors
    contact.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: 'New Contact Created',
            data: contact
        });
    });
};

// Handle View Contact Info
exports.view = function(req, res) {
    contact.findById(req.params.contact_id, function(err, contact){
        if (err)
            res.json(err);
        res.json({
            message: 'Contact details loading...',
            data: contact
        });
    });
};

// Handle Update Contact Info 
exports.update = function(req, res) {
    Contact.findById(req.params.contact_id, function(err, contact) {
        if (err)
            res.json(err);

        contact.name = req.body.name ? req.body.name : contact.name;
        contact.gender = req.body.gender;
        contact.email = req.body.email;
        contact.phone = req.body.phone;

        // Save the Contact and check for errors
        contact.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Contact Info Updated',
                data: contact
            });
        });
    });
};

// Handle Delete Contact 
exports.delete = function(req, res) {
    Contact.remove({
        _id : req.params.contact_id
    }, function(err, contact) {
        if(err)
            res.send(err);
        
        res.json({
            status: "Success",
            message: "Contact deleted"
        });
    });
};

