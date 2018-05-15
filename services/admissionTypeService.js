var appRoot = require('app-root-path');
var con = require(appRoot + '/services/connectionService');

exports.getAdmissionTypes = function (queryString, callback) {
    var sql = "select  * from tbl_admission_type";
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

exports.getAdmissionTypeById = function (id, callback) {
    var sql = "select  * from tbl_admission_type where id='" + id + "'";
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

exports.postAdmissionType = function (admissionType, callback) {
    var setString = "";
    var keyString = "";
    var valueString = "";
    let admissionTypeObjectLeng = Object.keys(admissionType).length;
    var i = 1;
    for (var key in admissionType) {  
        if (i != admissionTypeObjectLeng)
		{
		keyString=keyString+key+',';
		valueString=valueString+"'"+admissionType[key]+"',"; 
		}
		else 
		{
		keyString=keyString+key;
		valueString=valueString+"'"+admissionType[key]+"'"; 
        } 
        i++;

    }

        var sql = "INSERT INTO tbl_admission_type (" + keyString + ") VALUES (" + valueString + ")";

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
exports.patchAdmissionType = function (id, admissionType, callback) {
    var setString = "";
    let admissionTypeObjectLeng = Object.keys(admissionType).length;
    var i = 1;
    for (var key in admissionType) {

        console.log(key + "  " + admissionType[key]); // here is your column name you are looking for
        if (i != admissionTypeObjectLeng)
            setString = setString + key + "='" + admissionType[key] + "',";
        else
            setString = setString + key + "='" + admissionType[key] + "'";
        i++;

    }
    var sql = "UPDATE tbl_admission_type SET " + setString + "WHERE id = '" + id + "'";
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

exports.deleteAdmissionType = function (id, callback) {
    var sql = "DELETE from tbl_admission_type where id='" + id + "'";
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