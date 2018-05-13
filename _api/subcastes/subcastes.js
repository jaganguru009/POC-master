var express = require('express');
var router = express.Router();
var async = require('async');
var appRoot = require('app-root-path');
var jwt = require('jsonwebtoken');
var subcasteService = require(appRoot + '/services/subcasteService'); 

router.get('/', function (req, res, next) {
  subcasteService.getSubcastes("Subcastes", function (err, results) {
    if (err) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.status(500).send(err);
    } else {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.send({ 'Subcastes': results });
    }

  })

});

// fetch one
router.get('/:id', function (req, res, next) {  
      subcasteService.getSubcasteById(req.params.id, function (err, results) {
        if (err) {
          res.json(err);
        }
        else {
          res.json(results);
        }

      })  
});


// create new object
router.post('/', function (req, res, next) {  
      subcasteService.postSubcaste(req.body, function (err, results) {
        if (err) {
          res.json(err);
        }
        else {
          res.json(results);
        }

      }) 
});

// delete (needs to be replaced with archival so as not to lose context for other data)
router.delete('/:id', function (req, res, next) { 
      subcasteService.deleteSubcaste(req.params.id, function (err, results) {
        if (err) {
          res.json(err);
        }
        else {
          res.json(results);
        }

      }); 
});

// partial update
router.patch('/:id', function (req, res, next) { 
      subcasteService.patchSubcaste(req.params.id, req.body, function (err, results) {
        if (err) {
          res.json(err);
        }
        else {
          res.json(results);
        }

      }) 
});

module.exports = router;