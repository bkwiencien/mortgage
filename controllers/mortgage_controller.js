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
    array = doCalculations(req.body);
    for(i=0;i<array.length;i++) {
      queries.insertOne(array[i],function(data){
        var i =0;
    })

};
});

function doCalculations(argo) {
    var rows = [];
    var row = {
         paymentnumber: 0,
         principal:     0,
         interest:      0,
         monthlypayment: 0
    };
    function Row(ppaymentnumber,pprincipal,pinterest,pmonthlypayment) {
      this.paymentnumber = ppaymentnumber;
      this.principal = pprincipal;
      this.interest = pinterest;
      this.monthlypayment = pmonthlypayment;
    };
    var inter = 0;
    var interByMonth = 0;
    var myLabel = "";
    var paymentNumber = 0;
    var currentPrincipal = 0;
    var monthlyPayment = 0;
    var interestRate = 0;
    var additionalPrincipal = 0;
    var totalInterest = 0;
    myLabel = argo.label;
    currentPrincipal = parseFloat(argo.currentprincipal);
    monthlyPayment = parseFloat(argo.mpayment);
    interestRate = parseFloat(argo.interestrate);
    additionalPrincipal = parseFloat(argo.additional);
    console.log("in doCalculations label " + currentPrincipal + " " + interestRate);
    while (currentPrincipal > 0) {
        if ((monthlyPayment + additionalPrincipal) > currentPrincipal) {
            paymentNumber++;
            inter = parseFloat((currentPrincipal*interestRate));
            interByMonth = parseFloat(inter/12.0);
            totalInterest = totalInterest + interByMonth;
            currentPrincipal = 0; 
            var rr = new Row(paymentNumber,currentPrincipal,interByMonth,monthlyPayment+additionalPrincipal);
            rows.push(rr);
        }else {
          inter = parseFloat((currentPrincipal * interestRate));
          interByMonth = parseFloat(inter/12.0);
          currentPrincipal = parseFloat((currentPrincipal + interByMonth));
          currentPrincipal = currentPrincipal - monthlyPayment - additionalPrincipal;
          currentPrincipal = Math.round(currentPrincipal,-2);
          paymentNumber++;
          var rrr = new Row(paymentNumber,currentPrincipal,interByMonth,monthlyPayment+additionalPrincipal);
            rows.push(rrr);
          console.log(paymentNumber+ " " + currentPrincipal + " " + monthlyPayment + " "+ additionalPrincipal);
        }
    }
    return(rows);
}

module.exports = router;
