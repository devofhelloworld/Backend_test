const express = require('express');
const handlerequest = express.Router();
const home = require('../controllers/home');

handlerequest.get('/',home.showdev);

module.exports = handlerequest;