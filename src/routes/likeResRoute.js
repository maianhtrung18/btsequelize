const express = require('express')
const { likeRes, getLikeRes, unlike } = require('../controllers/like_resController')
const likeResRoute = express.Router()

likeResRoute.post('/like', likeRes)
likeResRoute.get('/get-like', getLikeRes)
likeResRoute.post('/unlike', unlike)


module.exports = {likeResRoute}