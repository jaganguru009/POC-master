var appRoot = require('app-root-path');
var con = require(appRoot + '/services/connectionService');

exports.getStates = function (queryString, callback) {
  var sql = "select  * from tbl_state";
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

exports.getStateById = function (id, callback) {
    var sql = "select  * from tbl_state where id='" + id + "'";
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

exports.postState = function (state, callback) {
 var setString = "";
 var keyString="";
 var valueString="";
    let statebjectLeng = Object.keys(state).length;
    var i = 1;
    for (var key in state) {  
        if (i != statebjectLeng)
		{
		keyString=keyString+key+',';
		valueString=valueString+"'"+state[key]+"',"; 
		}
		else 
		{
		keyString=keyString+key;
		valueString=valueString+"'"+state[key]+"'"; 
        } 
        i++; 
    }

    var sql = "INSERT INTO tbl_state ("+keyString+") VALUES (" +valueString+")";

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
 exports.patchState = function (id, state, callback) {
    var setString = "";
    let statebjectLeng = Object.keys(state).length;
    var i = 1;
    for (var key in state) {

        console.log(key + "  " + state[key]); // here is your column name you are looking for
        if (i != statebjectLeng)
            setString = setString + key + "='" + state[key] + "',";
        else
            setString = setString + key + "='" + state[key] + "'";
        i++;

    }
    var sql = "UPDATE tbl_state SET " + setString + "WHERE id = '" + id + "'";
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

exports.deleteState = function (id, callback) {
    var sql = "DELETE from tbl_state where id='" + id + "'";
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