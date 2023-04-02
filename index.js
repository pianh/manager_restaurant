var express = require('express');
var app = express();
const cookieParser = require('cookie-parser');

const path = require("path");

// Say our original entrance script is `app.js`
const MongoDB = require("./providers/database")
const routes = require('./routes/index');
const config = require("./configs/database.config");
// ddang nhap bang form, submit file
app.use(express.urlencoded({ limit: "100mb", extended: false }));
app.use(express.json({ limit: "100mb" }));
app.use(cookieParser());


// Phuong thuc get() phan hoi mot GET Request ve Homepage
app.set('views', './views');
app.set('view engine', 'ejs');

app.use("/datatables", express.static(path.join(__dirname, "node_modules", "datatables", "media")));

app.use(express.static(__dirname + '/public'));

app.use('/', routes); 

async function runServer(){
  try {
    await MongoDB.connect(config.uri);
    
  } catch (error) {
    console.log("Cannot connect to the database!", error);
    process.exit();
  }
  var server = app.listen(8081, async function () {
      var port = server.address().port
      console.clear()
      console.log("Ung dung Node.js dang lang nghe tai dia chi: http://%s:%s", "localhost", port)
  })
  return server;
}
runServer()

