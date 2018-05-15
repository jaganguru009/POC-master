var appRoot = require('app-root-path');
var con = require(appRoot + '/services/connectionService');

exports.getCountrys = function (queryString, callback) {
  var sql = "select  * from tbl_country";
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

exports.getCountryById = function (id, callback) {
    var sql = "select  * from tbl_country where id='" + id + "'";
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

exports.postCountry = function (country, callback) {
 var setString = "";
 var keyString="";
 var valueString="";
    let countrybjectLeng = Object.keys(country).length;
    var i = 1;
    for (var key in country) {  
        if (i != countrybjectLeng)
		{
		keyString=keyString+key+',';
		valueString=valueString+"'"+country[key]+"',"; 
		}
		else 
		{
		keyString=keyString+key;
		valueString=valueString+"'"+country[key]+"'"; 
        } 
        i++;

    }

    var sql = "INSERT INTO tbl_country ("+keyString+") VALUES (" +valueString+")";

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
 exports.patchCountry = function (id, country, callback) {
    var setString = "";
    let countrybjectLeng = Object.keys(country).length;
    var i = 1;
    for (var key in country) {

        console.log(key + "  " + country[key]); // here is your column name you are looking for
        if (i != countrybjectLeng)
            setString = setString + key + "='" + country[key] + "',";
        else
            setString = setString + key + "='" + country[key] + "'";
        i++;

    }
    var sql = "UPDATE tbl_country SET " + setString + "WHERE id = '" + id + "'";
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

exports.deleteCountry = function (id, callback) {
    var sql = "DELETE from tbl_country where id='" + id + "'";
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