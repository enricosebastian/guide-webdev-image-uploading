const express        = require('express');
const fileUpload     = require('express-fileupload');
const controller     = require('../controllers/controller');
const userController = require('../controllers/userController');
const imageController = require('../controllers/imageController');
const app            = express();

app.use(fileUpload());
app.use(express.static('upload'));

app.get('/', controller.getIndex);
app.get('/about', controller.getAbout);

app.get('/users', userController.getUsers);
app.get('/user/:username', userController.getUser);

app.post('/uploadImg', imageController.uploadImg);

module.exports = app;