const axios = require("axios");


const myAxios = axios.create({
  baseURL: process.env.DEV_MODE === "dev" 
    ? process.env.BASE_URL_DEV
    : process.env.BASE_URL_PROD,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": process.env.API_KEY,
  }
});


module.exports = myAxios;