const Product = require('../models/Product.model')

module.exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).send(products)     

    } catch (error) {
        res.status(401).send(error)
    }
    
}