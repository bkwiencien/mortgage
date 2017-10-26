var connection = require("../config/connection.js");

connection.connect(function(err) {
  if(err) {
    console.log("Error", err.stack);
  }
  console.log("Connected as id: %s", connection.threadId)
});

var orm = {
  selectAll: function(tableName,cb){  
  connection.query('select  * from ledger', function(err, result) {
      if (err) throw err;
      cb(result);
  });
 },
 insertOne: function(obj,cb){  
  var values = [];
  values.push(obj.paymentnumber);
  values.push(obj.principal);
  values.push(obj.interest);
  values.push(obj.monthlypayment);
  var sql = 'insert into ledger (payment_number,principal,interest,monthlly_payment) values ('+values[0]+','+values[1]+','+values[2]+','+values[3]+')';	
  console.log("sql statement " + sql);
  connection.query(sql,  function(err, result) {
      if (err) throw err;
      cb(result);
  });
 }
};

module.exports = orm;