var express = require('express');
var router = express.Router();
const homeRoute = require("./home.route");





/* GET home page. */
router.use('/', homeRoute);


module.exports = router;
