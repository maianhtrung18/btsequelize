const { success, failCode, errorCode } = require("../config/response")
const { sequelize } = require("../models")
const initModels = require("../models/init-models")
const models = initModels(sequelize)

const likeRes = async (req, res) => {
    try {
        let { user_id, res_id } = req.body
        let date = new Date()
        let data = await models.like_res.create({
            user_id,
            res_id,
            date_like: date
        })
        success(res, data, 'like success')
    }
    catch (e) {
        await errorCode(res, 'BE error')
    }
}

const unlike = async (req, res) => {
    try{
        let {user_id, res_id} = req.query
        let data = await models.like_res.destroy({
            where:{
                user_id,
                res_id
            }
        })
        success(res, data, 'unlike success')
    }
    catch(e){
        await failCode(res, 'BE error')
    }
}

const getLikeRes = async (req, res) => {
    try {
        let { user_id, res_id } = req.query
        // console.log(req)
        let data = await models.like_res.findOne({
            where: {
                user_id,
                res_id
            }
        })
        success(res, data, 'get success')
    }
    catch (e) {
        await errorCode(res, 'BE error') 
    }

}



module.exports = { likeRes, getLikeRes, unlike }
