var appRoot = require('app-root-path');
var con = require(appRoot + '/services/connectionService');

exports.getUsers = function (queryString, callback) {
    var sql = "select  * from tbl_admin_login";
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

exports.getUserById = function (login_user_name, callback) {
    var sql = "select  * from tbl_admin_login where login_user_name='" + login_user_name + "'";
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

exports.postUser = function (user, callback) {
    var sql = "INSERT INTO tbl_admin_login (login_user_name, login_password,login_role_id,login_user_id,login_sanstha_id,login_school_id,login_section_id,school_user_category) VALUES (" +
        "'" + user.login_user_name + "','" + user.login_password + "','" + user.login_role_id + "','" + user.login_user_id + "','" + user.login_sanstha_id + "','" + user.login_school_id + "','" +
        +user.login_section_id + "','" + user.school_user_category + "')";

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
exports.isUserValidated = function (user, callback) {
    var sql="SELECT p.name as Permission,RT.type_name FROM tbl_admin_login al,permissions p,tbl_role_type RT WHERE al.login_user_name = '" + user.login_user_name + "'" + " and al.login_password='" + user.login_password + "'"+" and al.login_role_id=p.roleId and RT.id=al.login_role_id";
    console.log("SQL = "+sql)
    con.query(sql, function (err, result) {
        if (err) {
            callback(null, err);
            return;
        }
        if (result.length > 0) {
            callback(null, result);
            return;
        }
        else {
            callback(null, false);
            return;
        }

    });

}
exports.patchUser = function (login_user_name, user, callback) {
    var setString = "";
    let userObjectLeng = Object.keys(user).length;
    var i = 1;
    for (var key in user) { 
        if (i != userObjectLeng)
            setString = setString + key + "='" + user[key] + "',";
        else
            setString = setString + key + "='" + user[key] + "'";
        i++;

    }
    var sql = "UPDATE tbl_admin_login SET " + setString + "WHERE login_user_name = '" + login_user_name + "'";
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

exports.deleteUser = function (login_user_name, callback) {
    var sql = "DELETE from tbl_admin_login where login_user_name='" + login_user_name + "'";
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