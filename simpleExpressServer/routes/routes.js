const express = require('express');
const router = express.Router();
const controllers = require('./../controllers/controllers');
var path = require('path');

router.get('/apiTest', controllers.apiTest);

module.exports = router;




