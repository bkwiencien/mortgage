var orm = require("../config/orm.js");

var mortgageQueries = {
  selectAll: function (cb) {
    orm.selectAll('tableName', function (res) {
      cb(res);
    });
  },
  insertOne: function (burgerName, cb) {
      orm.insertOne(burgerName, function(res){
      cb(res);
    });
  },
  updateOne: function (burgerId, cb) {
    orm.updateOne(burgerId, function (res){
      cb(res);
    })
  },
  insertAll: function (rows,cb) {
    for (j=0;j<rows.length;j++) {
      var rr = rows[j];
      orm.insertOne(rr,function(res){
      //  cb(res);
      })
    }
    }
  };

module.exports = mortgageQueries;
