const express        = require('express');
const controller     = require('../controllers/controller');
const userController = require('../controllers/userController');
const app            = express();

app.get('/', controller.getIndex);
app.get('/about', controller.getAbout);

app.get('/users', userController.getUsers);
app.get('/user/:username', userController.getUser);

module.exports = app;