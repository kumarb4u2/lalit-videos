const express = require('express');
const cors = require('cors');
const upload = require('./middlewares/uploadVideo');
const getVideosCtrl = require('./controllers/getVideos');
const uploadVideosCtrl = require('./controllers/uploadVideos');
const { STATIC_PATH } = require('./constants');
const app = express();
const port = 4000;

app.use(express.static(STATIC_PATH));
app.use(cors());

app.get('/videos', getVideosCtrl);

app.post('/videos', upload.single('file'), uploadVideosCtrl);

app.listen(port, () => console.log(`Video app listening on port ${port}!`));
