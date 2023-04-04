
const { sequelize } = require("../models")
const initModels = require("../models/init-models")




const models = initModels(sequelize)

const getFood = async (req, res) => {
    data = await models.food.findAll()
    res.send(data)
}

const createFood = async (req, res) => {


    res.send(req.body)
}

const editFood = async (req, res) => {

}

const deleteFood = async (req, res) => {

}

module.exports = {getFood, createFood, editFood, deleteFood}