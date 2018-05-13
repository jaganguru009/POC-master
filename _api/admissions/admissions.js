var express = require('express');
var router = express.Router();
var async = require('async');
var appRoot = require('app-root-path');
var jwt = require('jsonwebtoken');
var admissionService = require(appRoot + '/services/admissionService'); 

router.get('/', function (req, res, next) {
  admissionService.getAdmissions("Admissions", function (err, results) {
    if (err) { 
      res.status(500).send(err);
    } else { 
      res.send({ 'Admissions': results });
    }

  });
});
// fetch one
router.get('/:id', function (req, res, next) {  
      admissionService.getAdmissionById(req.params.id, function (err, results) {
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
      admissionService.postAdmission(req.body, function (err, results) {
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
      admissionService.deleteAdmission(req.params.id, function (err, results) {
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
      admissionService.patchAdmission(req.params.id, req.body, function (err, results) {
        if (err) {
          res.json(err);
        }
        else {
          res.json(results);
        }

      }) 
});

module.exports = router;