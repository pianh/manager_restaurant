var express = require('express');
var router = express.Router();
const homeRoute = require("./home.route");
const adminRoute = require("./admin.route");
const managerRoute = require("./manager.route");
const {CookieProvider} = require("../providers/cookie")



/* GET home page. */
router.get("/api/user",(req,res)=>{
    const cookies = new CookieProvider(req,res);
    res.json({user:cookies.getCookie('user')})
})
router.use('/admin', adminRoute);
router.use('/manager', managerRoute);
router.use('/home', homeRoute);
router.use('/', homeRoute);
module.exports = router;
