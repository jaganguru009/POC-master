var express = require('express');
var router = express.Router();
var async = require('async');
var appRoot = require('app-root-path');
var jwt = require('jsonwebtoken');
var religionService = require(appRoot + '/services/religionService'); 

router.get('/', function (req, res, next) {
  religionService.getReligions("Religions", function (err, results) {
    if (err) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.status(500).send(err);
    } else {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.send({ 'Religions': results });
    }

  })

});

// fetch one
router.get('/:id', function (req, res, next) {  
      religionService.getReligionById(req.params.id, function (err, results) {
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
      religionService.postReligion(req.body, function (err, results) {
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
      religionService.deleteReligion(req.params.id, function (err, results) {
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
      religionService.patchReligion(req.params.id, req.body, function (err, results) {
        if (err) {
          res.json(err);
        }
        else {
          res.json(results);
        }

      }) 
});

module.exports = router;