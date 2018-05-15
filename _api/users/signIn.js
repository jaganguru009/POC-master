var express = require('express');
var router = express.Router();
var async = require('async');
var appRoot = require('app-root-path');  
var userService = require(appRoot + '/services/userService'); 
var utils = require(appRoot + '/shared/utils');
// create new object
router.post('/', function (req, res, next) {

    userService.isUserValidated(req.body, function (err, isSuccess) {
        console.log("isSuccess  "+isSuccess);
        if (isSuccess) { 
            res.json(isSuccess  );
            return;
        }
        else {
            res.json({ "errorType": "loginFailed", "errorText": "Invalid credentials" });
            return;
        }
    });

});

module.exports = router;