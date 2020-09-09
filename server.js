const app = require('express')()
const PORT = process.env.PORT || 8080
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config()
const cors = require('cors')

// import routes
const products = require('./routes/products')

mongoose.connect(process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, () => {
        console.log('Database is connected')
    }
)

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//using router middleware
app.use('/products', products)

//start welcome page
app.get('/', (req, res) => {
    res.send('Welcome!')
})

app.listen(PORT, () => {
    console.log("Server is running")
})
