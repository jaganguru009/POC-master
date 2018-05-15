var appRoot = require('app-root-path');
var con = require(appRoot + '/services/connectionService');

exports.getRoles = function (queryString, callback) {
  var sql = "select  * from tbl_role_type";
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

exports.getRoleById = function (id, callback) {
    var sql = "select  * from tbl_role_type where id='" + id + "'";
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

exports.postRole = function (role, callback) {
    var sql = "INSERT INTO tbl_role_type (type_name) VALUES (" +
        "'" + role.type_name + "')";

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
 exports.patchRole = function (id, role, callback) {
    var setString = "";
    let roleObjectLeng = Object.keys(role).length;
    var i = 1;
    for (var key in role) {

        console.log(key + "  " + role[key]); // here is your column name you are looking for
        if (i != roleObjectLeng)
            setString = setString + key + "='" + role[key] + "',";
        else
            setString = setString + key + "='" + role[key] + "'";
        i++;

    }
    var sql = "UPDATE tbl_role_type SET " + setString + "WHERE id = '" + id + "'";
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

exports.deleteRole = function (id, callback) {
    var sql = "DELETE from tbl_role_type where id='" + id + "'";
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