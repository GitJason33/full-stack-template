const cors = require('cors');


function setCors() {
  return cors({
    origin: process.env.DEV_MODE === "dev"
      ? process.env.CORS_CLIENTS_DEV
      : process.env.CORS_CLIENTS_PROD
  });
}


module.exports = setCors;