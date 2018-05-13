var appRoot = require('app-root-path');
var con = require(appRoot + '/services/connectionService');

exports.getCasts = function (queryString, callback) {
  var sql = "select  * from tbl_caste";
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

exports.getCastById = function (id, callback) {
    var sql = "select  * from tbl_caste where id='" + id + "'";
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

exports.postCast = function (caste, callback) {
 var setString = "";
 var keyString="";
 var valueString="";
    let casteObjectLeng = Object.keys(caste).length;
    var i = 1;
    for (var key in caste) { 
        if (i != casteObjectLeng)
		{
		keyString=keyString+',';
		valueString=valueString+"'"+caste[key]+"',"; 
		}
		else 
		{
		keyString=keyString;
		valueString=valueString+"'"+caste[key]; 
		} 

    }

    var sql = "INSERT INTO tbl_caste ("+keyString+") VALUES (" +valueString+")";

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
 exports.patchCast = function (id, caste, callback) {
    var setString = "";
    let casteObjectLeng = Object.keys(caste).length;
    var i = 1;
    for (var key in caste) {

        console.log(key + "  " + caste[key]); // here is your column name you are looking for
        if (i != casteObjectLeng)
            setString = setString + key + "='" + caste[key] + "',";
        else
            setString = setString + key + "='" + caste[key] + "'";
        i++;

    }
    var sql = "UPDATE tbl_caste SET " + setString + "WHERE id = '" + id + "'";
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

exports.deleteCast = function (id, callback) {
    var sql = "DELETE from tbl_caste where id='" + id + "'";
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