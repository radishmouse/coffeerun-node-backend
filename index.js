'use strict';


// Basic App setup --------------------
var path = require('path');
var express = require('express');
var app = express();
var port = process.env.PORT || 1337;

var makeRoutes = require('./router-maker');

var bodyParser = require('body-parser');
app.use(bodyParser());

console.log(path.join(__dirname, './static/'));
app.use(express.static(path.join(__dirname, './static')));

var MONGO_URI = "mongodb://u:p@ds051893.mongolab.com:51893/heroku_8kj35h1f";
// var MONGO_URI = "mongodb://theuser:thepassword@ds031892.mongolab.com:31892/heroku_app36993917";
// var MONGO_URI = 'mongodb://localhost/coffeeorder';

// Database ORM, thanks to mongoose
var mongoose = require('mongoose');
mongoose.connect(MONGO_URI);

// Our models
var CoffeeOrderModel = require('./models/coffeeorder');
// var MenuItem = require('./models/menuitem');
// var Creature = require('./models/creature');

// Routing --------------------------------
var router = express.Router();

// some really basic logging middleware
router.use(function (req, res, next) {
    console.log('Accessing ' + req.path);
    next();
});

// This is for cross domain fun
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");

    next();
});

router.get('/', function (req, res) {
    res.json({message: 'so say we all'});
});


// Dynamically create routes for models
makeRoutes(router, CoffeeOrderModel, 'coffeeorder');
// makeRoutes(router, MenuItem, 'menuitem');
// makeRoutes(router, Creature, 'creature');


// Fire it up! Fire it up!------------------------------
app.use('/api', router);
app.listen(port, '0.0.0.0');
console.log('Now you are 1337: ' + port);
