
var express = require('express');
var cors = require('cors')
var app = express();
var port = process.env.port || 1337;
app.use(cors())
var bodyParser = require('body-parser');
 // create application/x-www-form-urlencoded parser
 app.use(bodyParser.urlencoded({ extended: true }));
 // create application/json parser
 app.use(bodyParser.json());

var productController = require('./Controller/ProductController')();
app.use("/api/products", productController);
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });
  
  app.listen(port, function () {
    var datetime = new Date();
    var message = "Server runnning on Port:- " + port + "Started at :- " + datetime;
    console.log(message);
});

