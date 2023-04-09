
const { sequelize } = require("../models")
const initModels = require("../models/init-models")
const models = initModels(sequelize)
const { errorCode, success, failCode } = require("../config/response")

const addRate = async (req, res) => {
    try {
        let { user_id, res_id, amount } = req.body
        let date_rate = new Date()
        let data1 = await models.rate_res.findAll({
            where: {
                user_id,
                res_id
            }
        })
        if (data1.length > 0) {
            errorCode(res, "Data exist")
        }
        else {
            let data = await models.rate_res.create({
                user_id,
                res_id,
                amount,
                date_rate
            })
            success(res, data, "Success")
        }
      
    }
    catch (e) {
        errorCode(res, 'BE error')
    }
}

const getRateListAndUser = async (req, res) => {
    try {
        let {resId} = req.params
        let data = await models.rate_res.findAll({
            where:{
                res_id: resId
            },
            include: ["re", "user"],
        })

        let resData = {
            "res_id": data[0].re.res_id,    
            "restaurant": {...data[0].re.dataValues, "amount": 0},
            "user": []
        }
        let amount = 0
        data.map((ele)=>{
            resData.user.push({...ele.user.dataValues, "amount": ele.amount})
            amount += ele.amount
        })
        amount = amount / resData.user.length;
        resData.restaurant.amount = amount.toFixed(1)
        success(res, resData, 'sucess')
    }
    catch (e) {
        errorCode(res, "BE error")
    }
}

const getRateListAndRestaurant = async (req, res) => {
    try {
        let {userId} = req.params
        let data = await models.rate_res.findAll({
            where:{
                user_id: userId
            },
            include: ["re", "user"],
        })

        let resData = {
            "user_id": data[0].user.user_id,    
            "user": {...data[0].user.dataValues},
            "restaurant": []
        }
        data.map((ele)=>{
            resData.restaurant.push({...ele.re.dataValues, "amount": ele.amount})
        })
        success(res, resData, 'sucess')
    }
    catch (e) {
        errorCode(res, "BE error")
    }
}

module.exports = { addRate, getRateListAndUser, getRateListAndRestaurant }