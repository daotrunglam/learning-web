"use strict";

var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _viewEngine = _interopRequireDefault(require("./config/viewEngine"));
var _web = _interopRequireDefault(require("./route/web"));
var _connectDB = _interopRequireDefault(require("./config/connectDB"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// import cors from "cors";

require("dotenv").config();
var app = (0, _express["default"])();
// app.use(cors({ origin: true }));

// Add headers before the routes are defined
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Request methods you wish to allow
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

  // Request headers you wish to allow
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

//config app
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// server err max_allowed_packet: run SHOW VARIABLES LIKE "max_allowed_packet" trong sql tren db
// sau do vao thu muc "C:\xampp\mysql\bin\my.ini" edit file my.ini
// search max_allowed_packet change value
app.use(_bodyParser["default"].json({
  limit: "100mb"
}));
app.use(_bodyParser["default"].urlencoded({
  limit: "100mb",
  extended: true
}));
(0, _viewEngine["default"])(app);
(0, _web["default"])(app);
(0, _connectDB["default"])();
var port = process.env.PORT || 6969;
//Port === undefined => port = 6969

app.listen(port, function () {
  //callback
  console.log("Backend Nodejs is running on the port: " + port);
});