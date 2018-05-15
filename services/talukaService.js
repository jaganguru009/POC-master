var appRoot = require('app-root-path');
var con = require(appRoot + '/services/connectionService');

exports.getTalukas = function (queryString, callback) {
  var sql = "select  * from tbl_taluka";
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

exports.getTalukaById = function (id, callback) {
    var sql = "select  * from tbl_taluka where id='" + id + "'";
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

exports.postTaluka = function (taluka, callback) {
 var setString = "";
 var keyString="";
 var valueString="";
    let talukabjectLeng = Object.keys(taluka).length;
    var i = 1;
    for (var key in taluka) {  
        if (i != talukabjectLeng)
		{
		keyString=keyString+key+',';
		valueString=valueString+"'"+taluka[key]+"',"; 
		}
		else 
		{
		keyString=keyString+key;
		valueString=valueString+"'"+taluka[key]+"'"; 
        } 
        i++; 
    }

    var sql = "INSERT INTO tbl_taluka ("+keyString+") VALUES (" +valueString+")";

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
 exports.patchTaluka = function (id, taluka, callback) {
    var setString = "";
    let talukabjectLeng = Object.keys(taluka).length;
    var i = 1;
    for (var key in taluka) {

        console.log(key + "  " + taluka[key]); // here is your column name you are looking for
        if (i != talukabjectLeng)
            setString = setString + key + "='" + taluka[key] + "',";
        else
            setString = setString + key + "='" + taluka[key] + "'";
        i++;

    }
    var sql = "UPDATE tbl_taluka SET " + setString + "WHERE id = '" + id + "'";
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

exports.deleteTaluka = function (id, callback) {
    var sql = "DELETE from tbl_taluka where id='" + id + "'";
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