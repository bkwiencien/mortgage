var express = require('express');
var router = express.Router();
var queries = require('../models/mortgage.js');
var path = require("path");
var array = [];

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + "/../views/index.html"));
});

router.post('/calculate', function (req, res) {
    var myLabel = "";
    var currentPrincipal = 0;
    var monthlyPayment = 0;
    var interestRate = 0;
    var additionalPrincipal = 0;
    myLabel = req.body.label;
    currentPrincipal = req.body.currentprincipal;
    monthlyPayment = req.body.mpayment;
    interestRate = req.body.interestrate;
    additionalPrincipal = req.body.additional;
    console.log("in mortgage_controller.post " + req.body.label);
    doCalculations();
    res.redirect('/');
});

function doCalculations() {
    console.log("in doCalculations");
}

module.exports = router;
