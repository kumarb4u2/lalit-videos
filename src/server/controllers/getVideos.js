const fs = require('fs');

module.exports = (req, res) => {
  fs.readdir('./src/server/public/uploads', (err, items) => {
    res.status(200).send({ videos: items });
  });
};
