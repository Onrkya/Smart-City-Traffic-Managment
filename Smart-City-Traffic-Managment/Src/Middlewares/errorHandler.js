const APIError = require("../Utils/errors");

const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof APIError) {
        return res.status(err.statusCode || 400).json({
            success: false,
            message: err.message
        });
    } else {
        
        return res.status(500).json({
            success: false,
            message: "We have a mistake please check at . "
        });
    }
};

module.exports = errorHandlerMiddleware;
