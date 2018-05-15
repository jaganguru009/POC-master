var appRoot = require('app-root-path');
var con = require(appRoot + '/services/connectionService');

exports.getAcademicYears = function (queryString, callback) {
    var sql = "select  * from tbl_academic_year";
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

exports.getAcademicYearById = function (id, callback) {
    var sql = "select  * from tbl_academic_year where id='" + id + "'";
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

exports.postAcademicYear = function (academicYear, callback) {
    var setString = "";
    var keyString = "";
    var valueString = "";
    let academicYearObjectLeng = Object.keys(academicYear).length;
    var i = 1;
    for (var key in academicYear) {  
        if (i != academicYearObjectLeng)
		{
		keyString=keyString+key+',';
		valueString=valueString+"'"+academicYear[key]+"',"; 
		}
		else 
		{
		keyString=keyString+key;
		valueString=valueString+"'"+academicYear[key]+"'"; 
        } 
        i++;

    }

    var sql = "INSERT INTO tbl_academic_year (" + keyString + ") VALUES (" + valueString + ")";

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
exports.patchAcademicYear = function (id, academicYear, callback) {
    var setString = "";
    let academicYearObjectLeng = Object.keys(academicYear).length;
    var i = 1;
    for (var key in academicYear) {

        console.log(key + "  " + academicYear[key]); // here is your column name you are looking for
        if (i != academicYearObjectLeng)
            setString = setString + key + "='" + academicYear[key] + "',";
        else
            setString = setString + key + "='" + academicYear[key] + "'";
        i++;

    }
    var sql = "UPDATE tbl_academic_year SET " + setString + "WHERE id = '" + id + "'";
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

exports.deleteAcademicYear = function (id, callback) {
    var sql = "DELETE from tbl_academic_year where id='" + id + "'";
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