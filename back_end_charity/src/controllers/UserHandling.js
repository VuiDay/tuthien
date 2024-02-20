const {User} = require('../models/database')
const cloudinary = require('../config/cloundinaryConfig.js')
var passport = require('passport');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const secret = 'cuongen123'
const saltRounds = 10
var LocalStrategy = require('passport-local')
const { Op } = require("sequelize");

const RegisterApp = (req, res)=> {
    try {
        const {email, username, password, avatar} = req.body
        console.log(email, username, password, avatar)
        if(email && username && password) {
            User.findAll({
                where: {
                    [Op.or]: [
                        {Username: username},
                        {Email: email}
                    ]
                }
            })
            .then(async (data)=> {
                if(data && data.length > 0) {
                    res.json('Đã tồn tại tên đăng nhập hoặc email này!')
                } else {
                    const results = await cloudinary.uploader.upload(avatar)
                    let avatarURL = results.secure_url
                    bcrypt.hash(password, saltRounds, (err, hash)=> {
                        if(err) {
                            res.json('Error: ', err)
                        } else {
                            User.create({
                                Username: username,
                                Password: hash,
                                Email: email,
                                Avatar: avatarURL
                            })
                            .then(()=> {
                                res.json("Đăng kí thành công!")
                            })
                        }
                    })
                }
            })
        }
    }catch(error){
        return res.status(400).json({
            name: error.name,
            message: error.message
        });
    }
}

const LoginApp = (req, res)=> {
    res.json('Hello')
}
module.exports = {RegisterApp, LoginApp}