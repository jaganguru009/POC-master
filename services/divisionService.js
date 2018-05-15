var appRoot = require('app-root-path');
var con = require(appRoot + '/services/connectionService');

exports.getDivisions = function (queryString, callback) {
  var sql = "select  * from tbl_division";
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

exports.getDivisionById = function (id, callback) {
    var sql = "select  * from tbl_division where id='" + id + "'";
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

exports.postDivision = function (division, callback) {
 var setString = "";
 var keyString="";
 var valueString="";
    let divisionbjectLeng = Object.keys(division).length;
    var i = 1;
    for (var key in division) {  
        if (i != divisionbjectLeng)
		{
		keyString=keyString+key+',';
		valueString=valueString+"'"+division[key]+"',"; 
		}
		else 
		{
		keyString=keyString+key;
		valueString=valueString+"'"+division[key]+"'"; 
        } 
        i++;

    }

    var sql = "INSERT INTO tbl_division ("+keyString+") VALUES (" +valueString+")";

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
 exports.patchDivision = function (id, division, callback) {
    var setString = "";
    let divisionbjectLeng = Object.keys(division).length;
    var i = 1;
    for (var key in division) {

        console.log(key + "  " + division[key]); // here is your column name you are looking for
        if (i != divisionbjectLeng)
            setString = setString + key + "='" + division[key] + "',";
        else
            setString = setString + key + "='" + division[key] + "'";
        i++;

    }
    var sql = "UPDATE tbl_division SET " + setString + "WHERE id = '" + id + "'";
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

exports.deleteDivision = function (id, callback) {
    var sql = "DELETE from tbl_division where id='" + id + "'";
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