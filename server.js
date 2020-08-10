const app = require('express')()
const PORT = process.env.PORT || 3000

// import routes
const products = require('./routes/products')
const dotenv = require('dotenv')

dotenv.config()

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })

//use route(middleware)
app.use('/products', products)

//start welcome page
app.get('/', (req, res) => {
    res.send('Welcome!')
})

app.listen(PORT, () => {
    console.log("Server is running")
})