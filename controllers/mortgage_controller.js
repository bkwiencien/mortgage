var express = require('express');
var router = express.Router();
var queries = require('../models/mortgage.js');
var path = require("path");
var array = [];

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + "/../views/index.html"));
});

router.post('/calculate', function (req, res) {
    console.log("in mortgage_controller.post " + req.body.label);
       res.redirect('/');
});

module.exports = router;
