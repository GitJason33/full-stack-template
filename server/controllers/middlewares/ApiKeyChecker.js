const AppError = require('../tools/AppError.js');


function APIKeyChecker(req, resp, next){
  try {
    if(req.headers["api-key"] !== process.env.API_KEY)
      throw new AppError(403, "Access denied!");

    else
      next();
  } catch (err) {
    next(err); 
  }
}


module.exports = APIKeyChecker;