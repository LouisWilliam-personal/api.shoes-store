const router = require('express').Router()

const productsController = require('../controllers/products.controller.js')

router.get('/', productsController.getProducts)

router.post('/', productsController.postProducts)

router.delete('/', productsController.deleteProducts)

module.exports = router