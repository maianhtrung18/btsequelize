const express = require('express')
const { addRate, getRateListAndUser, getRateListAndRestaurant } = require('../controllers/rate_resController')
const rateResRoute = express.Router()

rateResRoute.post('/add-rate-res', addRate)
rateResRoute.get('/get-rate-res-user/:resId', getRateListAndUser)
rateResRoute.get('/get-rate-user-res/:userId', getRateListAndRestaurant)

module.exports = {rateResRoute}