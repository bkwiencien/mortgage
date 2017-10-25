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
 }
};

module.exports = orm;