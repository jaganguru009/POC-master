var appRoot = require('app-root-path');
var con = require(appRoot + '/services/connectionService');

exports.getschoolCastes = function (queryString, callback) {
  var sql = "select  * from tbl_school_caste";
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

exports.getschoolCasteById = function (id, callback) {
    var sql = "select  * from tbl_school_caste where id='" + id + "'";
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

exports.postSchoolCaste = function (schoolcaste, callback) {
 var setString = "";
 var keyString="";
 var valueString="";
    let schoolcastebjectLeng = Object.keys(schoolcaste).length;
    var i = 1;
    for (var key in schoolcaste) {  
        if (i != schoolcastebjectLeng)
		{
		keyString=keyString+key+',';
		valueString=valueString+"'"+schoolcaste[key]+"',"; 
		}
		else 
		{
		keyString=keyString+key;
		valueString=valueString+"'"+schoolcaste[key]+"'"; 
        } 
        i++; 
    }

    var sql = "INSERT INTO tbl_school_caste ("+keyString+") VALUES (" +valueString+")";

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
 exports.patchschoolCaste = function (id, schoolcaste, callback) {
    var setString = "";
    let schoolcastebjectLeng = Object.keys(schoolcaste).length;
    var i = 1;
    for (var key in schoolcaste) {

        console.log(key + "  " + schoolcaste[key]); // here is your column name you are looking for
        if (i != schoolcastebjectLeng)
            setString = setString + key + "='" + schoolcaste[key] + "',";
        else
            setString = setString + key + "='" + schoolcaste[key] + "'";
        i++;

    }
    var sql = "UPDATE tbl_school_caste SET " + setString + "WHERE id = '" + id + "'";
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

exports.deleteSchoolCaste = function (id, callback) {
    var sql = "DELETE from tbl_school_caste where id='" + id + "'";
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