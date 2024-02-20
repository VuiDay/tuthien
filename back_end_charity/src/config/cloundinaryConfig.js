const cloudinary = require('cloudinary').v2;
require('dotenv').config()
          
cloudinary.config({ 
  cloud_name: process.env.CLOUND_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET
});

module.exports = cloudinary