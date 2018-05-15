var appRoot = require('app-root-path');
var con = require(appRoot + '/services/connectionService');

exports.getPermissions = function (queryString, callback) {
  var sql = "select  * from permissions";
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

exports.getPermissionById = function (id, callback) {
    var sql = "select  * from permissions where id='" + id + "'";
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

exports.postPermission = function (Permission, callback) {
 var setString = "";
 var keyString="";
 var valueString="";
    let PermissionbjectLeng = Object.keys(Permission).length;
    var i = 1;
    for (var key in Permission) {  
        if (i != PermissionbjectLeng)
		{
		keyString=keyString+key+',';
		valueString=valueString+"'"+Permission[key]+"',"; 
		}
		else 
		{
		keyString=keyString+key;
		valueString=valueString+"'"+Permission[key]+"'"; 
        } 
        i++; 
    }

    var sql = "INSERT INTO permissions ("+keyString+") VALUES (" +valueString+")";

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
 exports.patchPermission = function (id, Permission, callback) {
    var setString = "";
    let PermissionbjectLeng = Object.keys(Permission).length;
    var i = 1;
    for (var key in Permission) {

        console.log(key + "  " + Permission[key]); // here is your column name you are looking for
        if (i != PermissionbjectLeng)
            setString = setString + key + "='" + Permission[key] + "',";
        else
            setString = setString + key + "='" + Permission[key] + "'";
        i++;

    }
    var sql = "UPDATE permissions SET " + setString + "WHERE id = '" + id + "'";
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

exports.deletePermission = function (id, callback) {
    var sql = "DELETE from permissions where id='" + id + "'";
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