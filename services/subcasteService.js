var appRoot = require('app-root-path');
var con = require(appRoot + '/services/connectionService');

exports.getSubcastes = function (queryString, callback) {
  var sql = "select  * from tbl_subcaste";
    con.query(sql, function (err, result) {
        if (err) {
            callback(null, err);
            return;
        }
        else {
            callback(null, result);
            return;
        }
    });
}

exports.getSubcasteById = function (id, callback) {
    var sql = "select  * from tbl_subcaste where id='" + id + "'";
    con.query(sql, function (err, result) {
        if (err) {
            callback(null, err);
            return;
        }
        else {
            callback(null, result);
            return;
        }
    });
}

exports.postSubcaste = function (subcaste, callback) {
 var setString = "";
 var keyString="";
 var valueString="";
    let subcastebjectLeng = Object.keys(subcaste).length;
    var i = 1;
    for (var key in subcaste) {  
        if (i != subcastebjectLeng)
		{
		keyString=keyString+key+',';
		valueString=valueString+"'"+subcaste[key]+"',"; 
		}
		else 
		{
		keyString=keyString+key;
		valueString=valueString+"'"+subcaste[key]+"'"; 
        } 
        i++; 
    }

    var sql = "INSERT INTO tbl_subcaste ("+keyString+") VALUES (" +valueString+")";

    con.query(sql, function (err, result) {
        if (err) {
            callback(null, err);
            return;
        }
        else {
            callback(null, result);
            return;
        }
    });
}
 exports.patchSubcaste = function (id, subcaste, callback) {
    var setString = "";
    let subcastebjectLeng = Object.keys(subcaste).length;
    var i = 1;
    for (var key in subcaste) {

        console.log(key + "  " + subcaste[key]); // here is your column name you are looking for
        if (i != subcastebjectLeng)
            setString = setString + key + "='" + subcaste[key] + "',";
        else
            setString = setString + key + "='" + subcaste[key] + "'";
        i++;

    }
    var sql = "UPDATE tbl_subcaste SET " + setString + "WHERE id = '" + id + "'";
    console.log("Final Update query =\n" + sql);
    con.query(sql, function (err, result) {
        if (err) {
            callback(null, err);
            return;
        }
        else {
            callback("User Updated");
        }
        console.log(result.affectedRows + " record(s) updated");
    })
}

exports.deleteSubcaste = function (id, callback) {
    var sql = "DELETE from tbl_subcaste where id='" + id + "'";
    con.query(sql, function (err, result) {
        if (err) {
            callback(null, err);
            return;
        }
        else {
            callback(null, result);
            return;
        }
    });
}