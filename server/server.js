require("dotenv").configDotenv({ path: './.env' });

const express = require('express');
const cors = require('cors');


const ErrorHandler = require("./controllers/middlewares/ErrorHandler.js");
const APIKeyChecker = require("./controllers/middlewares/ApiKeyChecker.js");



// init variables
const app = express();
const PORT = process.env.PORT || 12_000;


// middlewares
app.use(cors({ origin: process.env.CORS_CLIENTS }));
app.use(APIKeyChecker);
app.use(express.json());



// endpoint routers
app.get("/api", (req, resp) => {
  resp.json({ msg: "welcome to template api" })
});



// end route is the error one
app.use(ErrorHandler);



// app listens at port on localhost
app.listen(
  PORT, 
  () => console.log(`API running at http://localhost:${PORT}/api`)
);