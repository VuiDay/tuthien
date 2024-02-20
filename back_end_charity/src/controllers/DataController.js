const {
    Role,
    User,
    School,
    Post,
    Category,
    Product,
    Donate,
    Order,
    OrderItem,
    Discounts,
    AdImage
} = require('../models/database')
var passport = require('passport');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const secret = 'cuongen123'
const saltRounds = 10
var LocalStrategy = require('passport-local')
