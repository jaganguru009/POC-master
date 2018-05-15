var appRoot = require('app-root-path');
var con = require(appRoot + '/services/connectionService');

exports.getReligions = function (queryString, callback) {
  var sql = "select  * from tbl_religion";
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

exports.getReligionById = function (id, callback) {
    var sql = "select  * from tbl_religion where id='" + id + "'";
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

exports.postReligion = function (religion, callback) {
 var setString = "";
 var keyString="";
 var valueString="";
    let religionbjectLeng = Object.keys(religion).length;
    var i = 1;
    for (var key in religion) {  
        if (i != religionbjectLeng)
		{
		keyString=keyString+key+',';
		valueString=valueString+"'"+religion[key]+"',"; 
		}
		else 
		{
		keyString=keyString+key;
		valueString=valueString+"'"+religion[key]+"'"; 
        } 
        i++;

    }

    var sql = "INSERT INTO tbl_religion ("+keyString+") VALUES (" +valueString+")";

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
 exports.patchReligion = function (id, religion, callback) {
    var setString = "";
    let religionbjectLeng = Object.keys(religion).length;
    var i = 1;
    for (var key in religion) {

        console.log(key + "  " + religion[key]); // here is your column name you are looking for
        if (i != religionbjectLeng)
            setString = setString + key + "='" + religion[key] + "',";
        else
            setString = setString + key + "='" + religion[key] + "'";
        i++;

    }
    var sql = "UPDATE tbl_religion SET " + setString + "WHERE id = '" + id + "'";
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

exports.deleteReligion = function (id, callback) {
    var sql = "DELETE from tbl_religion where id='" + id + "'";
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