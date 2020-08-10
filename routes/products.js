const router = require('express').Router()

const Product = require('../models/Product.model')

router.get('/', async (req, res) => {
    const products = await Product.find({})
    res.status(200).send(products)
})

module.exports = router