var appRoot = require('app-root-path');
var con = require(appRoot + '/services/connectionService');

exports.getOccupations = function (queryString, callback) {
  var sql = "select  * from tbl_occupation";
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

exports.getOccupationById = function (id, callback) {
    var sql = "select  * from tbl_occupation where id='" + id + "'";
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

exports.postOccupation = function (occupation, callback) {
 var setString = "";
 var keyString="";
 var valueString="";
    let occupationbjectLeng = Object.keys(occupation).length;
    var i = 1;
    for (var key in occupation) {  
        if (i != occupationbjectLeng)
		{
		keyString=keyString+key+',';
		valueString=valueString+"'"+occupation[key]+"',"; 
		}
		else 
		{
		keyString=keyString+key;
		valueString=valueString+"'"+occupation[key]+"'"; 
        } 
        i++;

    }

    var sql = "INSERT INTO tbl_occupation ("+keyString+") VALUES (" +valueString+")";

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
 exports.patchOccupation = function (id, occupation, callback) {
    var setString = "";
    let occupationbjectLeng = Object.keys(occupation).length;
    var i = 1;
    for (var key in occupation) {

        console.log(key + "  " + occupation[key]); // here is your column name you are looking for
        if (i != occupationbjectLeng)
            setString = setString + key + "='" + occupation[key] + "',";
        else
            setString = setString + key + "='" + occupation[key] + "'";
        i++;

    }
    var sql = "UPDATE tbl_occupation SET " + setString + "WHERE id = '" + id + "'";
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

exports.deleteOccupation = function (id, callback) {
    var sql = "DELETE from tbl_occupation where id='" + id + "'";
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