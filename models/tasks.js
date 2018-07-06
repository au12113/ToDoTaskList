const mongoose = require('mongoose')

var Task = mongoose.Schema({
    subject : String,
    description: String,
    status: Boolean
})

module.exports = mongoose.model('Task', Task)