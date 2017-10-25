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
    doCalculations(req.body);
    res.redirect('/');
});

function doCalculations(argo) {
    var myLabel = "";
    var currentPrincipal = 0;
    var monthlyPayment = 0;
    var interestRate = 0;
    var additionalPrincipal = 0;
    myLabel = argo.label;
    currentPrincipal = argo.currentprincipal;
    monthlyPayment = argo.mpayment;
    interestRate = argo.interestrate;
    additionalPrincipal = argo.additional;
    console.log("in doCalculations label " + myLabel);
}

module.exports = router;
