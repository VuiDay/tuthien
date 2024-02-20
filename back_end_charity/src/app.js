const express = require('express')
const app = express()
require('dotenv').config()
var cors = require('cors')
const router = require('./routes/index')

const port = process.env.PORT

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type, Accept,Authorization,Origin");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
app.use(cors())
app.use('/', router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
