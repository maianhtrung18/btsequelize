const express = require('express')
const { addRate, getRateListAndUser } = require('../controllers/rate_resController')
const rateResRoute = express.Router()

rateResRoute.post('/add-rate-res', addRate)
rateResRoute.get('/get-rate-res-user', getRateListAndUser)

module.exports = {rateResRoute}