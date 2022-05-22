const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/to-do-list-app');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error in establishing connection with the MongoDB"));

db.once('open', function(){
    console.log('Connected to the database.');
});

module.exports = db;