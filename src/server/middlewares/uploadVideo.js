const multer = require('multer');
const path = require('path');
const mkdirp = require('mkdirp');

const { STATIC_PATH, UPLOAD_DIRECTORY } = require('../constants');
const storage = multer.diskStorage({
  destination(req, file, cb) {
    const uploadPath = `${STATIC_PATH}/${UPLOAD_DIRECTORY}`;
    mkdirp.sync(uploadPath);
    cb(null, uploadPath);
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}___${file.originalname}`);
  }
});

const upload = multer({ storage });

module.exports = upload;
