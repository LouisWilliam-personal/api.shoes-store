const mongoose = require('mongoose')

//require modeling
const Product = require('../models/Product.model')

module.exports.getProducts = (req, res) => {
    Product
        .find()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((e) => {
            res.status(500).json(e);
        })
}

module.exports.postProducts = (req, res) => {

    const { products } = req.body.products

    products.map((item, i) => {
        let product = new Product({
            _id: new mongoose.Types.ObjectId(),
            url: item.url,
            productName: item.productName,
            model: item.model,
            price: item.price,
            currencyUnit: item.currencyUnit
        })

        product
            .save()
            .then(result => console.log(result))
            .catch(err => console.log(err))
    })

    res.status(200).json(
        {
            msg: 'Send data successully'
        }
    )
}

module.exports.deleteProducts = (req, res) => {
    Product.deleteMany({}, () => {
        res.send('Deleted')
    })
}