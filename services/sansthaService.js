var appRoot = require('app-root-path');
var con = require(appRoot + '/services/connectionService');

exports.getSansthas = function (queryString, callback) {
  var sql = "select  * from tbl_sanstha";
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

exports.getSansthaById = function (id, callback) {
    var sql = "select  * from tbl_sanstha where id='" + id + "'";
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

exports.postSanstha = function (sanstha, callback) {
 var setString = "";
 var keyString="";
 var valueString="";
    let sansthabjectLeng = Object.keys(sanstha).length;
    var i = 1;
    for (var key in sanstha) { 
        console.log("I ===="+i+"  \n sansthabjectLeng===="+sansthabjectLeng);
        if (i != sansthabjectLeng)
		{
		keyString=keyString+key+',';
		valueString=valueString+"'"+sanstha[key]+"',"; 
		}
		else 
		{
		keyString=keyString+key;
		valueString=valueString+"'"+sanstha[key]+"'"; 
        } 
        i++;

    }

    var sql = "INSERT INTO tbl_sanstha ("+keyString+") VALUES (" +valueString+")";
    console.log("SQL ++++++ "+sql)


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
 exports.patchSanstha = function (id, sanstha, callback) {
    var setString = "";
    let sansthabjectLeng = Object.keys(sanstha).length;
    var i = 1;
    for (var key in sanstha) {

        console.log(key + "  " + sanstha[key]); // here is your column name you are looking for
        if (i != sansthabjectLeng)
            setString = setString + key + "='" + sanstha[key] + "',";
        else
            setString = setString + key + "='" + sanstha[key] + "'";
        i++;

    }
    var sql = "UPDATE tbl_sanstha SET " + setString + "WHERE id = '" + id + "'";
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

exports.deleteSanstha = function (id, callback) {
    var sql = "DELETE from tbl_sanstha where id='" + id + "'";
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