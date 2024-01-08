require("dotenv").configDotenv({ path: './.env' });
const express = require('express');
const logger = require('morgan');


const ErrorHandler = require("./controllers/middlewares/ErrorHandler.js");
const APIKeyChecker = require("./controllers/middlewares/ApiKeyChecker.js");
const addImportantHttpHeaders = require("./controllers/middlewares/ImportantHttpHeaders.js");
const rateLimiter = require('./controllers/middlewares/rateLimiter.js');
const setCors = require("./controllers/middlewares/setCors.js");



// init variables
const app = express();
const PORT = process.env.PORT || 12_000;


// middlewares
app.use(logger('dev'));
app.use(rateLimiter);
app.use(setCors);
app.use(APIKeyChecker);
app.use(express.json());
app.use(addImportantHttpHeaders);


// endpoint routers
app.get("/", (req, resp) => {
  resp.json({ msg: "welcome to template api" })
});



// end route is the error one
app.use(ErrorHandler);



// app listens at port on localhost
app.listen(
  PORT, 
  () => console.log(`API running at http://localhost:${PORT}`)
);