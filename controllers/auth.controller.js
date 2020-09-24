const jwt = require('jsonwebtoken')

//models
const Account = require('../models/Account.model')

module.exports.validateAccount = async (req, res, next) => {
    const { email, password } = req.body

    //Find user in db
    const user = await Account.findOne({
        email: email,
        password: password
    })

    if (user) {
        next()

    } else {
        res.status(404).json({
            error: 'Invalid user'
        })
    }
}

module.exports.createToken = (req, res) => {
    const { email, password } = req.body

    const sessionToken = jwt.sign({
        email: email,
        password: password
    }, process.env.JWT_PRIVATE_KEY)

    res.status(201)
        .json({
            token: sessionToken
        })
}