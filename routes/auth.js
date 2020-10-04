const express = require('express')
const router = express.Router()

//controllers
const authController = require('../controllers/auth.controller')

/* Route identity:
 * /auth: using email & password
 * /auth/<social_account>: social account
 * 
*/

router.post('/',
    authController.validateAccount,
    authController.createToken)

module.exports = router