var appRoot = require('app-root-path');
var con = require(appRoot + '/services/connectionService');

exports.getClasss = function (queryString, callback) {
    var sql = "select  * from tbl_class";
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

exports.getClassById = function (id, callback) {
    var sql = "select  * from tbl_class where id='" + id + "'";
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

exports.postClass = function (classO, callback) {
    var setString = "";
    var keyString = "";
    var valueString = "";
    let classObjectLeng = Object.keys(classO).length;
    var i = 1;
    for (var key in classO) {  
        if (i != classObjectLeng)
		{
		keyString=keyString+key+',';
		valueString=valueString+"'"+classO[key]+"',"; 
		}
		else 
		{
		keyString=keyString+key;
		valueString=valueString+"'"+classO[key]+"'"; 
        } 
        i++;

    }

        var sql = "INSERT INTO tbl_class (" + keyString + ") VALUES (" + valueString + ")";

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
exports.patchClass = function (id, classO, callback) {
    var setString = "";
    let classObjectLeng = Object.keys(classO).length;
    var i = 1;
    for (var key in classO) {

        console.log(key + "  " + classO[key]); // here is your column name you are looking for
        if (i != classObjectLeng)
            setString = setString + key + "='" + classO[key] + "',";
        else
            setString = setString + key + "='" + classO[key] + "'";
        i++;

    }
    var sql = "UPDATE tbl_class SET " + setString + "WHERE id = '" + id + "'";
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

exports.deleteClass = function (id, callback) {
    var sql = "DELETE from tbl_class where id='" + id + "'";
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