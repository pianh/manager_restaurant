var express = require('express');
var app = express();


// Say our original entrance script is `app.js`
const MongoDB = require("./providers/database")
const routes = require('./routes/index');
const config = require("./configs/database.config");

// Phuong thuc get() phan hoi mot GET Request ve Homepage
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
// app.use('/css', express.static(__dirname + 'public/css'));
// app.use('/js', express.static(__dirname + 'public/js'));
// app.use('/images', express.static(__dirname + 'public/images'));
// app.use('/fonts', express.static(__dirname + 'public/fonts'));


// app.use('/assets', express.static(__dirname + 'public/assets/'));



app.use('/', routes);
// app.get('/amber', (req, res) => {
//   res.render('index');
// })
app.get('/login', (req, res) => {
  res.render('login');
})

app.get('/register', (req, res) => {
  res.render('register');
})
app.get('/cart', (req, res) => {
  res.render('cart');
})

app.get('/checkout', (req, res) => {
  res.render('checkout');
})

app.get('/myaccount', (req, res) => {
  res.render('myaccount');
})

app.get('/error404', (req, res) => {
  res.render('error404');
})

app.get('/contact', (req, res) => {
  res.render('contact');
})

app.get('/single_product', (req, res) => {
  res.render('single_product');
})

app.get('/restaurants', (req, res) => {
  res.render('restaurants');
})

//Admin
app.get('/admin', (req, res) => {
  res.render('admin/adminIndex');
})

app.get('/admin_order', (req, res) => {
  res.render('admin/order');
})

app.get('/admin_addFood', (req, res) => {
  res.render('admin/addFood');
})

app.get('/admin_customer', (req, res) => {
  res.render('admin/customerList');
})

app.get('/admin_ingredientList', (req, res) => {
  res.render('admin/ingredientList');
})

app.get('/admin_table', (req, res) => {
  res.render('admin/tableList');
})

app.get('/admin_typeOfpartyList', (req, res) => {
  res.render('admin/typeOfpartyList');
})

app.get('/admin_food', (req, res) => {
  res.render('admin/food');
})

app.get('/admin_reserveTable', (req, res) => {
  res.render('admin/reserveTable');
})


app.get('/admin_restaurant', (req, res) => {
  res.render('admin/restaurants');
})


app.get('/admin_manager', (req, res) => {
  res.render('admin/manager');
})


async function runServer(){
  try {
    await MongoDB.connect(config.uri);
    
  } catch (error) {
    console.log("Cannot connect to the database!", error);
    process.exit();
  }
  var server = app.listen(8081, async function () {
      var port = server.address().port
      console.log("Ung dung Node.js dang lang nghe tai dia chi: http://%s:%s", "localhost", port)
  })
  return server;
}
runServer()

