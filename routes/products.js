const router = require('express').Router()
const productsController = require('../controllers/products.controller')

const Product = require('../models/Product.model')

router.get('/', productsController)

module.exports = router