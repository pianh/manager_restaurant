var express = require('express');
var app = express();


// Say our original entrance script is `app.js`
const MongoDB = require("./providers/database")
const routes = require('./routes/index');
const config = require("./configs/database.config");

// Phuong thuc get() phan hoi mot GET Request ve Homepage
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/images', express.static(__dirname + 'public/images'));
app.use('/fonts', express.static(__dirname + 'public/fonts'));

app.use('/', routes);
app.get('/amber', (req, res) => {
  res.render('index');
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
