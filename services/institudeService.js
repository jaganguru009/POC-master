var appRoot = require('app-root-path');
var con = require(appRoot + '/services/connectionService');

exports.getInstitudes = function (queryString, callback) {
  var sql = "select  * from tbl_institude_info";
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

exports.getInstitudeById = function (id, callback) {
    var sql = "select  * from tbl_institude_info where id='" + id + "'";
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

exports.postInstitude = function (institude, callback) {
 var setString = "";
 var keyString="";
 var valueString="";
    let institudebjectLeng = Object.keys(institude).length;
    var i = 1;
    for (var key in institude) {  
        if (i != institudebjectLeng)
		{
		keyString=keyString+key+',';
		valueString=valueString+"'"+institude[key]+"',"; 
		}
		else 
		{
		keyString=keyString+key;
		valueString=valueString+"'"+institude[key]+"'"; 
        } 
        i++;

    }

    var sql = "INSERT INTO tbl_institude_info ("+keyString+") VALUES (" +valueString+")";

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
 exports.patchInstitude = function (id, institude, callback) {
    var setString = "";
    let institudebjectLeng = Object.keys(institude).length;
    var i = 1;
    for (var key in institude) {

        console.log(key + "  " + institude[key]); // here is your column name you are looking for
        if (i != institudebjectLeng)
            setString = setString + key + "='" + institude[key] + "',";
        else
            setString = setString + key + "='" + institude[key] + "'";
        i++;

    }
    var sql = "UPDATE tbl_institude_info SET " + setString + "WHERE id = '" + id + "'";
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

exports.deleteInstitude = function (id, callback) {
    var sql = "DELETE from tbl_institude_info where id='" + id + "'";
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