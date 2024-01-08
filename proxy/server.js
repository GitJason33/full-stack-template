require('dotenv').configDotenv({ path: "./.env" });
const express = require('express');

const myAxios = require('./axios.config.js');

const addImportantHttpHeaders = require("./middlewares/ImportantHttpHeaders.js");
const rateLimiter = require('./middlewares/rateLimiter.js');
const setCors = require('./middlewares/setCors.js');



// init variables
const app = express();
const PORT = process.env.PORT || 7689;


// middlewares
app.use(rateLimiter);
app.use(setCors);
app.use(express.json());
app.use(addImportantHttpHeaders);


// routes
app.get("/", (req, resp) => {
  resp.send({ msg: "<h1>What are you doing here?</h1>" });
});
app.get('/api', async (req, resp) => {
  const data = await myAxios.get('/');

  resp.json(data);
});


// app listens at port on localhost
app.listen(
  PORT, 
  () => console.log(`API running at http://localhost:${PORT}`)
);