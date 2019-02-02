const fs = require('fs');
const { STATIC_PATH, UPLOAD_DIRECTORY } = require('../constants');

module.exports = (req, res) => {
  fs.readdir(`${STATIC_PATH}/${UPLOAD_DIRECTORY}`, (err, items) => {
    if (!err) {
      res.status(200).send({ videos: items });
    } else {
      res.sendStatus(500);
    }
  });
};
