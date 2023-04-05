
const { sequelize } = require("../models")
const initModels = require("../models/init-models")
const models = initModels(sequelize)
const { errorCode, success } = require("../config/response")

const addRate = async (req, res) => {
    try {
        let {user_id, res_id, amount} = req.body
        let date_rate = new Date()
        let data = await models.rate_res.create({
            user_id,
            res_id,
            amount,
            date_rate
        })
        res.send(data)
    }
    catch (e) {
        errorCode(res, 'BE error')
    }
}

const getRateListAndUser = async (req, res) => {
    try{
        let data = await models.rate_res.findAll({
            include: ["re","user"],
        })
        success(res, data, 'sucess')
    }
    catch(e){
    }
}

module.exports = { addRate, getRateListAndUser }