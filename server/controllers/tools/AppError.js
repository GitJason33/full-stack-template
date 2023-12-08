/**
 * throw custom REST API errors with a status code and error msg
 */
class AppError extends Error{
  constructor(status, msg) {
    super(msg);
    this.status = status;
  }
}

module.exports = AppError;