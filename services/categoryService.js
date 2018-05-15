var appRoot = require('app-root-path');
var con = require(appRoot + '/services/connectionService');

exports.getCategorys = function (queryString, callback) {
    var sql = "select  * from tbl_category";
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

exports.getCategoryById = function (id, callback) {
    var sql = "select  * from tbl_category where id='" + id + "'";
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

exports.postCategory = function (category, callback) {
    var setString = "";
    var keyString = "";
    var valueString = "";
    let categoryObjectLeng = Object.keys(category).length;
    var i = 1;
    for (var key in category) {  
        if (i != categoryObjectLeng)
		{
		keyString=keyString+key+',';
		valueString=valueString+"'"+category[key]+"',"; 
		}
		else 
		{
		keyString=keyString+key;
		valueString=valueString+"'"+category[key]+"'"; 
        } 
        i++;

    }
        var sql = "INSERT INTO tbl_category (" + keyString + ") VALUES (" + valueString + ")";

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
exports.patchCategory = function (id, category, callback) {
    var setString = "";
    let categoryObjectLeng = Object.keys(category).length;
    var i = 1;
    for (var key in category) {

        console.log(key + "  " + category[key]); // here is your column name you are looking for
        if (i != categoryObjectLeng)
            setString = setString + key + "='" + category[key] + "',";
        else
            setString = setString + key + "='" + category[key] + "'";
        i++;

    }
    var sql = "UPDATE tbl_category SET " + setString + "WHERE id = '" + id + "'";
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

exports.deleteCategory = function (id, callback) {
    var sql = "DELETE from tbl_category where id='" + id + "'";
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