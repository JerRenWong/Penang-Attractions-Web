const multer = require('multer');

// Configure multer for handling file uploads
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  // If no file is uploaded, allow it
  if (!file) {
    return cb(null, true);
  }
  
  // Accept images only (including HEIC)
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif|heic|HEIC)$/)) {
    return cb(new Error('Only image files are allowed (JPG, JPEG, PNG, GIF, HEIC)!'), false);
  }
  cb(null, true);
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB max file size (increased for HEIC files)
  },
});

module.exports = upload;
