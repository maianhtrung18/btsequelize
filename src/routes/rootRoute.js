const express = require('express')
const { foodRouter } = require('./foodRoute')
const { likeResRoute } = require('./likeResRoute')

const rootRouter = express.Router()

rootRouter.use('/food', foodRouter)
rootRouter.use('/like-res', likeResRoute)

module.exports = {rootRouter}

