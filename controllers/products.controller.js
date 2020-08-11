const mongoose = require('mongoose')

//require modeling
const Product = require('../models/Product.model')

module.exports.getProducts = (req, res) => {
    Product
        .find()
        .then((result) => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch((e) => {
            console.log(e);
            res.status(500).json(e);
        })
}

module.exports.postProducts = (req, res) => {

    const { products } = req.body

    products.map((item, i) => {
        let product = new Product({
            _id: new mongoose.Types.ObjectId(),
            url: item.url,
            name: item.name
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