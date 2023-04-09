const { success, failCode, errorCode } = require("../config/response")
const { sequelize } = require("../models")
const initModels = require("../models/init-models")
const models = initModels(sequelize)

const orderFood = async (req, res) => {

    try {
        let { user_id, food_id, amount, code, arr_sub_id } = req.body

        let data1 = await models.order.findOne({
            where: {
                user_id,
                food_id
            }
        })

        if (data1) {
            let data = await models.order.update({
                amount, code, arr_sub_id
            },
                {
                    where: {
                        user_id,
                        food_id
                    }
                }
            )
            success(res, data, "success")
        }
        else {
            let data = await models.order.create({
                user_id, food_id, amount, code, arr_sub_id
            })
            success(res, data, "success")
        }

    }
    catch (e) {
        console.log(e)
        errorCode(res, "BE error")
    }

}

module.exports = { orderFood }