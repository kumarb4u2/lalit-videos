const multer = require("multer");
var path = require("path");
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./src/server/public/uploads");
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

module.exports = upload;
