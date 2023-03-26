var express = require('express');
var multer = require('multer');
const upload = multer();
var router = express.Router();
const {ManagermentController} = require('../controllers/manager.controller');
var manager = new ManagermentController();

//Trang chu cua manager
router.route("/").get(manager.managermentIndex);

//Trang don hang
router.route("/order").get(manager.managermentOrder);

//Trang mon an

router.route("/food").get(manager.managermentFood);

router.route("/food/edit/:id").get(manager.managermentEditFood).post(upload.array("images",4),manager.editFoodHandlle);

router.route("/food/remove/:id").get(manager.removeFoodHandle);

//Trang them mon an
router.route("/addFood").get(manager.managermentAddFood);

//Trang chinh sua mon an
router.route("/editFood").get(manager.managermentEditFood);

//Ham show chi tiet thanh phan
router.route("/ingredient").get(manager.managermentIngredientList);

// Trang them chi tiet thanh phan
router.route("/addIngredient").get(manager.managermentAddIngredientList);

//Trang show loai tiec
router.route("/party").get(manager.managermentTypeOfpartyList);


// Trang them bua tiec
router.route("/addParty").get(manager.managermentAddParty);

//Trang danh sach ban
router.route("/table").get(manager.managermentTable);

//Trang them ban
router.route("/addTable").get(manager.managermentAddTable);


// Trang show khach hang
router.route("/customer").get(manager.managermentCustomer);

//Ham sua chi tiet thanh phan
router.route("/editIngredient").get(manager.managermentEditIngredientList);

//Ham sua bua tiec
router.route("/editParty").get(manager.managermentEditParty);

// Ham sua ban
router.route("/editTable").get(manager.managermentEditTable);



module.exports = router;