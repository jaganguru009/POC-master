var appRoot = require('app-root-path');
var con = require(appRoot + '/services/connectionService');

exports.getSchoolSections = function (queryString, callback) {
  var sql = "select  * from tbl_add_school_section";
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

exports.getSchoolSectionById = function (id, callback) {
    var sql = "select  * from tbl_add_school_section where id='" + id + "'";
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

exports.postSchoolSection = function (schoolSection, callback) {
 var setString = "";
 var keyString="";
 var valueString="";
    let schoolSectionObjectLeng = Object.keys(schoolSection).length;
    var i = 1;
    for (var key in schoolSection) {  
        if (i != schoolSectionObjectLeng)
		{
		keyString=keyString+key+',';
		valueString=valueString+"'"+schoolSection[key]+"',"; 
		}
		else 
		{
		keyString=keyString+key;
		valueString=valueString+"'"+schoolSection[key]+"'"; 
        } 
        i++; 
    }

    var sql = "INSERT INTO tbl_add_school_section ("+keyString+") VALUES (" +valueString+")";

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
 exports.patchSchoolSection = function (id, schoolSection, callback) {
    var setString = "";
    let schoolSectionObjectLeng = Object.keys(schoolSection).length;
    var i = 1;
    for (var key in schoolSection) {

        console.log(key + "  " + schoolSection[key]); // here is your column name you are looking for
        if (i != schoolSectionObjectLeng)
            setString = setString + key + "='" + schoolSection[key] + "',";
        else
            setString = setString + key + "='" + schoolSection[key] + "'";
        i++;

    }
    var sql = "UPDATE tbl_add_school_section SET " + setString + "WHERE id = '" + id + "'";
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

exports.deleteSchoolSection = function (id, callback) {
    var sql = "DELETE from tbl_add_school_section where id='" + id + "'";
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