var express = require('express');
var router = express.Router();
const {HomeController} = require('../controllers/home.controller');
var home =new HomeController();

router.route("/test").get(home.test);
router.route("/restaurants/:id").get(home.restaurant).post(home.restaurantReserveHandle);
router.route("/logout").get(home.logout);
router.route("/login").get(home.login).post(home.loginHandle);
router.route("/register").get(home.register).post(home.registerHandle);
router.route("/food/:id").get(home.detailFood);

router.route("/cart").get(home.cart);
router.route("/addToCart").post(home.addCart);  

router.route("/updateToCart").post(home.updateCart); 
router.route("/removeFromCart").post(home.removeCart); 
router.route("/clearAllProductInCart").get(home.clearAllCart);

router.route("/checkout").get(home.checkOut).post(home.checkOutHandler);

router.route("/myaccount").get(home.myaccount).post(home.changeInfomation);



router.route("/").get(home.index);
// router.get('/', (req, res) => {
//     const username = req.session.username;
//     res.render('home/index', { username: username });
// });

// Route /myaccount
// router.get('/home/myaccount', (req, res) => {
//     const username = req.session.username; // Lấy thông tin username từ session
//     const isAdmin = req.session.isAdmin; // Lấy thông tin quyền hạn quản trị viên từ session
  
//     // Nếu chưa đăng nhập thì chuyển hướng về trang đăng nhập
//     if (!username) {
//       res.redirect('/home/login');
//       return;
//     }
  
//     // Hiển thị thông tin tài khoản
//     res.render('/home/myaccount', {
//       username: username,
//       isAdmin: isAdmin
//     });
//   });


module.exports = router;