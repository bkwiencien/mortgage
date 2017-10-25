var express = require('express');
var router = express.Router();
var queries = require('../models/mortgage.js');
var path = require("path");

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + "/../views/index.html"));
    //console.log("i will send javascript too");
   // res.sendFile(path.join(__dirname + "/../public/assets/javascript/send.js"));
   // console.log("it was sent");
});

router.post('/create', function (req, res) {
    queries.insertOne(req.body.burger_name, function(data) {
        res.redirect('/');
    });
});

router.post('/update/:id', function (req, res) {
    queries.updateOne(req.params.id, function(data) {
        res.redirect('/');
    });
});

module.exports = router;
