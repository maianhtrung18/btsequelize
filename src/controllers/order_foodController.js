const { success, failCode, errorCode } = require("../config/response")
const { sequelize } = require("../models")
const initModels = require("../models/init-models")
const models = initModels(sequelize)

const orderFood = async (req, res) => {

    try {
        let { user_id, food_id, amount, code, arr_sub_id } = req.body
        let arr_sub_id1 = arr_sub_id.toString()
        let data = await models.order.create({
            user_id, food_id, amount, code, arr_sub_id
        })
        res.send(data)
    }
    catch (e) {
        console.log(e)
        errorCode(res, "BE error")
    }

}

module.exports = { orderFood }