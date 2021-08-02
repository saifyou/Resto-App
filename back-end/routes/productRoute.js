const express = require('express')
const router = express.Router()
const Product = require("../controller/productController")
router.get('/getProduct',Product.getProduct)
router.post('/addProduct',Product.addProduct)
router.delete('/deleteProduct/:id',Product.deleteProduct)
router.put('/updateProduct/:id',Product.updateProduct)

module.exports = router