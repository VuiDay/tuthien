const express = require('express')
const router = express.Router()
const userHandle  = require('./User.js')

router.use("/user", userHandle)

module.exports = router