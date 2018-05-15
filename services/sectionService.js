var appRoot = require('app-root-path');
var con = require(appRoot + '/services/connectionService');

exports.getSections = function (queryString, callback) {
  var sql = "select  * from tbl_section";
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

exports.getSectionById = function (id, callback) {
    var sql = "select  * from tbl_section where id='" + id + "'";
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

exports.postSection = function (section, callback) {
 var setString = "";
 var keyString="";
 var valueString="";
    let sectionbjectLeng = Object.keys(section).length;
    var i = 1;
    for (var key in section) {  
        if (i != sectionbjectLeng)
		{
		keyString=keyString+key+',';
		valueString=valueString+"'"+section[key]+"',"; 
		}
		else 
		{
		keyString=keyString+key;
		valueString=valueString+"'"+section[key]+"'"; 
        } 
        i++; 
    }

    var sql = "INSERT INTO tbl_section ("+keyString+") VALUES (" +valueString+")";

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
 exports.patchSection = function (id, section, callback) {
    var setString = "";
    let sectionbjectLeng = Object.keys(section).length;
    var i = 1;
    for (var key in section) {

        console.log(key + "  " + section[key]); // here is your column name you are looking for
        if (i != sectionbjectLeng)
            setString = setString + key + "='" + section[key] + "',";
        else
            setString = setString + key + "='" + section[key] + "'";
        i++;

    }
    var sql = "UPDATE tbl_section SET " + setString + "WHERE id = '" + id + "'";
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

exports.deleteSection = function (id, callback) {
    var sql = "DELETE from tbl_section where id='" + id + "'";
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