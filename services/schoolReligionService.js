var appRoot = require('app-root-path');
var con = require(appRoot + '/services/connectionService');

exports.getschoolReligions = function (queryString, callback) {
  var sql = "select  * from tbl_school_religion";
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

exports.getschoolReligionById = function (id, callback) {
    var sql = "select  * from tbl_school_religion where id='" + id + "'";
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

exports.postschoolReligion = function (schoolReligion, callback) {
 var setString = "";
 var keyString="";
 var valueString="";
    let schoolReligionbjectLeng = Object.keys(schoolReligion).length;
    var i = 1;
    for (var key in schoolReligion) {  
        if (i != cchoolCategorybjectLeng)
		{
		keyString=keyString+key+',';
		valueString=valueString+"'"+schoolReligion[key]+"',"; 
		}
		else 
		{
		keyString=keyString+key;
		valueString=valueString+"'"+schoolReligion[key]+"'"; 
        } 
        i++; 
    }

    var sql = "INSERT INTO tbl_school_religion ("+keyString+") VALUES (" +valueString+")";

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
 exports.patchschoolReligion = function (id, schoolReligion, callback) {
    var setString = "";
    let schoolReligionbjectLeng = Object.keys(schoolReligion).length;
    var i = 1;
    for (var key in schoolReligion) {

        console.log(key + "  " + schoolReligion[key]); // here is your column name you are looking for
        if (i != schoolReligionbjectLeng)
            setString = setString + key + "='" + schoolReligion[key] + "',";
        else
            setString = setString + key + "='" + schoolReligion[key] + "'";
        i++;

    }
    var sql = "UPDATE tbl_school_religion SET " + setString + "WHERE id = '" + id + "'";
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

exports.deleteschoolReligion = function (id, callback) {
    var sql = "DELETE from tbl_school_religion where id='" + id + "'";
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