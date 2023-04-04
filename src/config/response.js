const success = (res, data, message) => {
    const statusCode = 200
    res.status(statusCode).json({
        statusCode: `${statusCode}`,
        message,
        content: data
    })
}
const errorCode = (res, message) => {
    const statusCode = 400
    res.status(statusCode).json({
        statusCode: `${statusCode}`,
        message
    })
}

const failCode = (res, message) => {
    const statusCode = 500
    res.status(statusCode).json({
        statusCode: `${statusCode}`,
        message
    })
}

module.exports = {success, errorCode, failCode}