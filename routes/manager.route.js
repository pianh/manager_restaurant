var express = require('express');
var multer = require('multer');
const upload = multer();
var router = express.Router();
const {ManagermentController} = require('../controllers/manager.controller');
var manager = new ManagermentController();

//Trang chu cua manager
router.route("/:restaurantId").get(manager.managermentIndex);

//Trang don hang
router.route("/order/:restaurantId").get(manager.managermentOrder);

//Trang mon an

router.route("/food/:restaurantId").get(manager.managermentFood);


router.route("/food/edit/:id").get(manager.managermentEditFood).post(upload.array("images",4),manager.editFoodHandlle);

router.route("/food/remove/:id").get(manager.removeFoodHandle);

//Trang them mon an
router.route("/addFood/:restaurantId").get(manager.managermentAddFood);

//Trang chinh sua mon an
router.route("/editFood/:restaurantId").get(manager.managermentEditFood);

//Ham show chi tiet thanh phan
router.route("/ingredient/:restaurantId").get(manager.managermentIngredientList);

// Trang them chi tiet thanh phan
router.route("/addIngredient/:restaurantId").get(manager.managermentAddIngredientList);

//Trang show loai tiec
router.route("/party/:restaurantId").get(manager.managermentTypeOfpartyList);


// Trang them bua tiec
router.route("/addParty/:restaurantId").get(manager.managermentAddParty);

//Trang danh sach ban
router.route("/table/:restaurantId").get(manager.managermentTable);

//Trang them ban
router.route("/addTable/:restaurantId").get(manager.managermentAddTable);


// Trang show khach hang
router.route("/customer/:restaurantId").get(manager.managermentCustomer);

//Ham sua chi tiet thanh phan
router.route("/editIngredient/:restaurantId").get(manager.managermentEditIngredientList);

//Ham sua bua tiec
router.route("/editParty/:restaurantId").get(manager.managermentEditParty);

// Ham sua ban
router.route("/editTable/:restaurantId").get(manager.managermentEditTable);

// Ham dat ban
router.route("/reserveTable/:restaurantId").get(manager.managermentReserveTable);

module.exports = router;