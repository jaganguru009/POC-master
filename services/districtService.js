var appRoot = require('app-root-path');
var con = require(appRoot + '/services/connectionService');

exports.getDistricts = function (queryString, callback) {
  var sql = "select  * from tbl_district";
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

exports.getDistrictById = function (id, callback) {
    var sql = "select  * from tbl_district where id='" + id + "'";
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

exports.postDistrict = function (district, callback) {
 var setString = "";
 var keyString="";
 var valueString="";
    let districtbjectLeng = Object.keys(district).length;
    var i = 1;
    for (var key in district) {  
        if (i != districtbjectLeng)
		{
		keyString=keyString+key+',';
		valueString=valueString+"'"+district[key]+"',"; 
		}
		else 
		{
		keyString=keyString+key;
		valueString=valueString+"'"+district[key]+"'"; 
        } 
        i++;

    }

    var sql = "INSERT INTO tbl_district ("+keyString+") VALUES (" +valueString+")";

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
 exports.patchDistrict = function (id, district, callback) {
    var setString = "";
    let districtbjectLeng = Object.keys(district).length;
    var i = 1;
    for (var key in district) {

        console.log(key + "  " + district[key]); // here is your column name you are looking for
        if (i != districtbjectLeng)
            setString = setString + key + "='" + district[key] + "',";
        else
            setString = setString + key + "='" + district[key] + "'";
        i++;

    }
    var sql = "UPDATE tbl_district SET " + setString + "WHERE id = '" + id + "'";
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

exports.deleteDistrict = function (id, callback) {
    var sql = "DELETE from tbl_district where id='" + id + "'";
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