const express = require('express')
const { foodRouter } = require('./foodRoute')
const { likeResRoute } = require('./likeResRoute')
const { orderRoute } = require('./orderRoute')
const { rateResRoute } = require('./rateResRoute')

const rootRouter = express.Router()

rootRouter.use('/food', foodRouter)
rootRouter.use('/like-res', likeResRoute)
rootRouter.use('/rate-res', rateResRoute)
rootRouter.use('/order-food', orderRoute)

module.exports = {rootRouter}

