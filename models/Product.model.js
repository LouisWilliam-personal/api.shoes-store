const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    url: String,
    productName: String,
    model: String,
    price: Number,
    currencyUnit: String
})

module.exports = mongoose.model('Product', productSchema)