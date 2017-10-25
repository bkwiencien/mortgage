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
    var inter = 0;
    var interByMonth = 0;
    var myLabel = "";
    var paymentNumber = 0;
    var currentPrincipal = 0;
    var monthlyPayment = 0;
    var interestRate = 0;
    var additionalPrincipal = 0;
    myLabel = argo.label;
    currentPrincipal = parseFloat(argo.currentprincipal);
    monthlyPayment = parseFloat(argo.mpayment);
    interestRate = parseFloat(argo.interestrate);
    additionalPrincipal = parseFloat(argo.additional);
    console.log("in doCalculations label " + currentPrincipal + " " + interestRate);
    while (currentPrincipal > 0) {
        if ((monthlyPayment + additionalPrincipal) > currentPrincipal) {
            paymentNumber++;
            currentPrincipal = 0; 
        }else {
          inter = parseFloat((currentPrincipal * interestRate));
          interByMonth = parseFloat(inter/12.0);
          currentPrincipal = (currentPrincipal + interByMonth);
          currentPrincipal = currentPrincipal - monthlyPayment - additionalPrincipal;
          paymentNumber++;
          console.log(paymentNumber+ " " + currentPrincipal + " " + monthlyPayment + " "+ additionalPrincipal);
        }
    }
}

module.exports = router;
