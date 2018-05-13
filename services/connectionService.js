var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root', 
    database : 'schooldb' 
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("My sql connected");
});

module.exports = connection;