var appRoot = require('app-root-path');
var con = require(appRoot + '/services/connectionService');

exports.getAdmissions = function (queryString, callback) {
  var sql = "select  * from tbl_stud_admission";
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

exports.getAdmissionById = function (id, callback) {
    var sql = "select  * from tbl_stud_admission where id='" + id + "'";
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

exports.postAdmission = function (admission, callback) {
 var setString = "";
 var keyString="";
 var valueString="";
    let admissionbjectLeng = Object.keys(admission).length;
    var i = 1;
    for (var key in admission) {  
        if (i != admissionbjectLeng)
		{
		keyString=keyString+key+',';
		valueString=valueString+"'"+admission[key]+"',"; 
		}
		else 
		{
		keyString=keyString+key;
		valueString=valueString+"'"+admission[key]+"'"; 
        } 
        i++;

    }

    var sql = "INSERT INTO tbl_stud_admission ("+keyString+") VALUES (" +valueString+")";

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
 exports.patchAdmission = function (id, admission, callback) {
    var setString = "";
    let admissionbjectLeng = Object.keys(admission).length;
    var i = 1;
    for (var key in admission) {

        console.log(key + "  " + admission[key]); // here is your column name you are looking for
        if (i != admissionbjectLeng)
            setString = setString + key + "='" + admission[key] + "',";
        else
            setString = setString + key + "='" + admission[key] + "'";
        i++;

    }
    var sql = "UPDATE tbl_stud_admission SET " + setString + "WHERE id = '" + id + "'";
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

exports.deleteAdmission = function (id, callback) {
    var sql = "DELETE from tbl_stud_admission where id='" + id + "'";
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