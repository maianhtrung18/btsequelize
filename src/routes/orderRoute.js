const express = require('express')
const { orderFood } = require('../controllers/order_foodController')
const orderRoute = express.Router()

orderRoute.post('/user-order', orderFood)
module.exports = {orderRoute}