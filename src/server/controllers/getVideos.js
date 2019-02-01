const fs = require("fs");

module.exports = (req, res) => {
  fs.readdir("./src/server/public/uploads", (err, items) => {
    console.log(items);
    for (var i = 0; i < items.length; i++) {
      console.log(items[i]);
    }
    res.status(200).send({ videos: items });
  });
};
