const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME || 'dixl4fgs8',  
  api_key: process.env.CLOUDINARY_API_KEY || '214995768958347',  
  api_secret: process.env.CLOUDINARY_API_SECRET || 'hD9MUJzR1_rsxcg-gGgOJlfoB_Q',  
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads', 
    allowed_formats: ['jpg', 'png', 'jpeg', 'webp'], 
    public_id: (req, file) => Date.now(), 
  },
});

const upload = multer({ storage });

module.exports = { cloudinary, upload };
