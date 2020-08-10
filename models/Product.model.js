const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    id: String,
    url: String,
    name: String
})

const Product = mongoose.model('Product', productSchema, 'products')

module.exports = Product