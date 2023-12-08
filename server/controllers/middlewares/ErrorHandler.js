const AppError = require('../tools/AppError.js');


const ErrorHandler = (err, req, resp, next) => {
  if(err instanceof AppError)
    resp.status(err.status).json(err.message);

  else
    resp.status(500).json(`Server error: ${err}`)
}

module.exports = ErrorHandler;