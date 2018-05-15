var appRoot = require('app-root-path');
var con = require(appRoot + '/services/connectionService');

exports.getSchoolCategorys = function (queryString, callback) {
  var sql = "select  * from tbl_school_category";
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

exports.getSchoolCategoryById = function (id, callback) {
    var sql = "select  * from tbl_school_category where id='" + id + "'";
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

exports.postSchoolCategory = function (cchoolCategory, callback) {
 var setString = "";
 var keyString="";
 var valueString="";
    let cchoolCategorybjectLeng = Object.keys(cchoolCategory).length;
    var i = 1;
    for (var key in cchoolCategory) {  
        if (i != cchoolCategorybjectLeng)
		{
		keyString=keyString+key+',';
		valueString=valueString+"'"+cchoolCategory[key]+"',"; 
		}
		else 
		{
		keyString=keyString+key;
		valueString=valueString+"'"+cchoolCategory[key]+"'"; 
        } 
        i++; 
    }

    var sql = "INSERT INTO tbl_school_category ("+keyString+") VALUES (" +valueString+")";

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
 exports.patchSchoolCategory = function (id, cchoolCategory, callback) {
    var setString = "";
    let cchoolCategorybjectLeng = Object.keys(cchoolCategory).length;
    var i = 1;
    for (var key in cchoolCategory) {

        console.log(key + "  " + cchoolCategory[key]); // here is your column name you are looking for
        if (i != cchoolCategorybjectLeng)
            setString = setString + key + "='" + cchoolCategory[key] + "',";
        else
            setString = setString + key + "='" + cchoolCategory[key] + "'";
        i++;

    }
    var sql = "UPDATE tbl_school_category SET " + setString + "WHERE id = '" + id + "'";
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

exports.deleteSchoolCategory = function (id, callback) {
    var sql = "DELETE from tbl_school_category where id='" + id + "'";
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