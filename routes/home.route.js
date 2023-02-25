var express = require('express');
var router = express.Router();
const {HomeController} = require('../controllers/home.controller');
var home =new HomeController();

router.route("/test").get(home.test);
router.route("/").get(home.index);
module.exports = router;