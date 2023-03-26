var express = require('express');
var router = express.Router();
const homeRoute = require("./home.route");
const adminRoute = require("./admin.route");
const managerRoute = require("./manager.route");




/* GET home page. */
router.use('/home', homeRoute);

router.use('/admin', adminRoute);
router.use('/manager', managerRoute);
module.exports = router;
