const { success, failCode, errorCode } = require("../config/response")
const { sequelize } = require("../models")
const initModels = require("../models/init-models")
const models = initModels(sequelize)

const likeRes = async (req, res) => {
    try {
        let { user_id, res_id } = req.body
        let data0 = await models.like_res.findOne({
            where: {
                user_id,
                res_id
            }
        })
        if (data0) {
            errorCode(res, "data exist")
        }
        else {
            let date = new Date()
            let data = await models.like_res.create({
                user_id,
                res_id,
                date_like: date
            })
            success(res, data, 'like success')
        }



    }
    catch (e) {
        await errorCode(res, 'BE error')
    }
}

const unlike = async (req, res) => {
    try {
        let { user_id, res_id } = req.query
        let data = await models.like_res.destroy({
            where: {
                user_id,
                res_id
            }
        })
        success(res, data, 'unlike success')
    }
    catch (e) {
        await failCode(res, 'BE error')
    }
}

const getLikeRes = async (req, res) => {
    try {
        let { user_id, res_id } = req.query
        let data = await models.like_res.findOne({
            where: {
                user_id,
                res_id
            }
        })
        if (!data) {
            success(res, data, 'false')
        }
        else {
            success(res, data, 'true')
        }
    }
    catch (e) {
        await errorCode(res, 'BE error')
    }
}

const getLikeResAndUser = async (req, res) => {
    try {
        let { resId } = req.params
        let data = await models.like_res.findAll({
            where: {
                res_id: resId,
            },
            include: ["re", "user"],
        })
        if (data.length > 0) {
            let resData = {
                "res_id": data[0].res_id,
                "restaurant" : data[0].re.dataValues,
                "user": []
            }
            data.map((ele) => {
                resData.user.push({...ele.user.dataValues, "date_like": ele.date_like})
            })
            success(res, resData, 'success')
        } else {
            success(res, data, 'Dữ liệu không tồn tại')
        }
    }
    catch (e) {
        await errorCode(res, 'Be error')
        console.log(e)
    }
}


const getLikeUserLikeRes = async (req, res) => {
    try {
        let { userId } = req.params
        let data = await models.like_res.findAll({
            where: {
                user_id: userId,
            },
            include: ["re", "user"],
        })
        if (data.length > 0) {
            let resData = {
                "user_id": data[0].user_id,
                "user" : data[0].user.dataValues,
                "restaurant": []
            }
            data.map((ele) => {
                resData.restaurant.push({...ele.re.dataValues, "date_like": ele.date_like})
            })
            success(res, resData, 'success')
        } else {
            success(res, data, 'Dữ liệu không tồn tại')
        }
    }
    catch (e) {
        await errorCode(res, 'Be error')
        console.log(e)
    }
}



module.exports = { likeRes, getLikeRes, unlike, getLikeResAndUser, getLikeUserLikeRes }
