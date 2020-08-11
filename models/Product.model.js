const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    url: String,
    name: String
})

module.exports = mongoose.model('Product', productSchema)