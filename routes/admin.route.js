var express = require('express');
var router = express.Router();
const {AdminController} = require('../controllers/admin.controller');
var admin = new AdminController();

router.route("/admin").get(admin.adminIndex);
router.route("/admin/order").get(admin.adminOrder);


module.exports = router;