const express = require('express')
const {RegisterApp, LoginApp} = require('../controllers/UserHandling')
const upload = require('../middleware/uploadImageAva')
const {Router} = require('express')
const userHandle = Router()

userHandle.post('/register', upload.single('avatar'), RegisterApp)
userHandle.post('/login', LoginApp)

module.exports = userHandle