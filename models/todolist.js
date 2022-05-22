// SCHEMA
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true     // 'required' specifies that the field is required
    },
    date: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});


const todoModel = mongoose.model('todoModel', todoSchema);

// exporting this module
module.exports = todoModel;