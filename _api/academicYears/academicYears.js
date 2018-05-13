var express = require('express');
var router = express.Router();
var async = require('async');
var appRoot = require('app-root-path');
var jwt = require('jsonwebtoken');
var academicYearsService = require(appRoot + '/services/academicYearService'); 

router.get('/', function (req, res, next) {
  academicYearsService.getAcademicYears("AcademicYears", function (err, results) {
    if (err) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.status(500).send(err);
    } else {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.send({ 'AcademicYears': results });
    }

  })

});

// fetch one
router.get('/:id', function (req, res, next) {  
      academicYearsService.getAcademicYearById(req.params.id, function (err, results) {
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
      academicYearsService.postAcademicYear(req.body, function (err, results) {
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
      academicYearsService.deleteAcademicYear(req.params.id, function (err, results) {
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
      academicYearsService.patchAcademicYear(req.params.id, req.body, function (err, results) {
        if (err) {
          res.json(err);
        }
        else {
          res.json(results);
        }

      }) 
});

module.exports = router;