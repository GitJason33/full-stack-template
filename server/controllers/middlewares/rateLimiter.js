import { rateLimit } from 'express-rate-limit';
import AppError from "../tools/AppError";
/**
 * rate limit each IP address to a certain number of request in a time
 * interval of minute
 **/
function rateLimiter(req, resp, next) {
  if (resp.getHeader('x-ratelimit-limit') === '0') {
    next(new AppError(429, 'Rate limit exceeded, try again in a minute'));
  }
  else{
    const limiter = rateLimit({
      windowMs: 5 * 60 * 1000, // 5 minutes
      max: 50, // no. of requests
    });

    limiter(req, resp, next);
  }
}

module.exports = rateLimiter;