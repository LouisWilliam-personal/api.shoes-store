module.exports.getProducts = async (req, res) => {
    const products = await Product.find({})
    res.status(200).send(products)
}