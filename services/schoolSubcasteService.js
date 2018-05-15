var appRoot = require('app-root-path');
var con = require(appRoot + '/services/connectionService');

exports.getschoolSubcastes = function (queryString, callback) {
  var sql = "select  * from tbl_school_subcaste";
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

exports.getschoolSubcasteById = function (id, callback) {
    var sql = "select  * from tbl_school_subcaste where id='" + id + "'";
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

exports.postschoolSubcaste = function (schoolSubcaste, callback) {
 var setString = "";
 var keyString="";
 var valueString="";
    let schoolSubcastebjectLeng = Object.keys(schoolSubcaste).length;
    var i = 1;
    for (var key in schoolSubcaste) {  
        if (i != schoolSubcastebjectLeng)
		{
		keyString=keyString+key+',';
		valueString=valueString+"'"+schoolSubcaste[key]+"',"; 
		}
		else 
		{
		keyString=keyString+key;
		valueString=valueString+"'"+schoolSubcaste[key]+"'"; 
        } 
        i++; 
    }

    var sql = "INSERT INTO tbl_school_subcaste ("+keyString+") VALUES (" +valueString+")";

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
 exports.patchschoolSubcaste = function (id, schoolSubcaste, callback) {
    var setString = "";
    let schoolSubcastebjectLeng = Object.keys(schoolSubcaste).length;
    var i = 1;
    for (var key in schoolSubcaste) {

        console.log(key + "  " + schoolSubcaste[key]); // here is your column name you are looking for
        if (i != schoolSubcastebjectLeng)
            setString = setString + key + "='" + schoolSubcaste[key] + "',";
        else
            setString = setString + key + "='" + schoolSubcaste[key] + "'";
        i++;

    }
    var sql = "UPDATE tbl_school_subcaste SET " + setString + "WHERE id = '" + id + "'";
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

exports.deleteschoolSubcaste = function (id, callback) {
    var sql = "DELETE from tbl_school_subcaste where id='" + id + "'";
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