var mysql = require('mysql')
var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'admin',
        database: 'wwm'
      })
      
      connection.connect()
      
      connection.query('SELECT COUNT(*) FROM `mac__mac_addresses`', function (err, rows, fields) {
          if (err) throw err
        
          console.log('The solution is: ', rows[0])
          res.send( 'The solution is: ' + rows[0]);
        })
      
        connection.end()    
});

module.exports = router;



