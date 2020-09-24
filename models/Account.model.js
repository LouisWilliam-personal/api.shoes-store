const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    email: String,
    password: String //need encoding password
})

module.exports = mongoose.model('Account', accountSchema, 'accounts')