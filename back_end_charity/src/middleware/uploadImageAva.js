const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
const cloudinary = require('../config/cloundinaryConfig')

const storage = new CloudinaryStorage({
    cloudinary,
    allowedFormats: ['jpg', 'png'],
    params: {
        folder: 'avatar_user'
    }
})

const upload = multer({storage})

module.exports = upload