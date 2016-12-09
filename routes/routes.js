var express = require('express');
var router = express.Router();
var controllers = require('.././controllers');

/* GET home page. */
router.get('/', controllers.homecontroller.index);

module.exports = router;
