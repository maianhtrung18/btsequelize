const express = require('express')
const { likeRes, getLikeRes, unlike, getLikeResAndUser } = require('../controllers/like_resController')
const likeResRoute = express.Router()

likeResRoute.post('/like', likeRes)
likeResRoute.get('/get-like', getLikeRes)
likeResRoute.post('/unlike', unlike)
likeResRoute.get('/res-like-user', getLikeResAndUser)


module.exports = {likeResRoute}