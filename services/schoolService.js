var appRoot = require('app-root-path');
var con = require(appRoot + '/services/connectionService');

exports.getSchools = function (queryString, callback) {
  var sql = "select  * from tbl_school";
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

exports.getSchoolById = function (id, callback) {
    var sql = "select  * from tbl_school where id='" + id + "'";
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

exports.postSchool = function (school, callback) {
 var setString = "";
 var keyString="";
 var valueString="";
    let schoolbjectLeng = Object.keys(school).length;
    var i = 1;
    for (var key in school) {  
        if (i != schoolbjectLeng)
		{
		keyString=keyString+key+',';
		valueString=valueString+"'"+school[key]+"',"; 
		}
		else 
		{
		keyString=keyString+key;
		valueString=valueString+"'"+school[key]+"'"; 
        } 
        i++; 
    }

    var sql = "INSERT INTO tbl_school ("+keyString+") VALUES (" +valueString+")";

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
 exports.patchSchool = function (id, school, callback) {
    var setString = "";
    let schoolbjectLeng = Object.keys(school).length;
    var i = 1;
    for (var key in school) {

        console.log(key + "  " + school[key]); // here is your column name you are looking for
        if (i != schoolbjectLeng)
            setString = setString + key + "='" + school[key] + "',";
        else
            setString = setString + key + "='" + school[key] + "'";
        i++;

    }
    var sql = "UPDATE tbl_school SET " + setString + "WHERE id = '" + id + "'";
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

exports.deleteSchool = function (id, callback) {
    var sql = "DELETE from tbl_school where id='" + id + "'";
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