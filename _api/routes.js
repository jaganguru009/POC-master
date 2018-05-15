var express = require('express');
var router = express.Router();

// root resource only returns info
router.get('/', function (req, res, next) {
  res.json('{ "name": "sportsmgmt.net API", "version": "0.01 Alpha" }');
}); 
router.use('/signIn', require('./users/signIn'));  
router.use('/users', require('./users/users'));  
router.use('/academicYears', require('./academicYears/academicYears'));
router.use('/admissions', require('./admissions/admissions')); 
router.use('/admissionTypes', require('./admissionTypes/admissionTypes'));  

router.use('/castes', require('./castes/castes'));
router.use('/categories', require('./categories/categories'));
router.use('/class', require('./class/class')); 
router.use('/country', require('./country/country'));

router.use('/districts', require('./districts/districts'));
router.use('/divisions', require('./divisions/divisions'));
router.use('/institudes', require('./institudes/institudes'));
router.use('/occupations', require('./occupations/occupations'));

router.use('/religions', require('./religions/religions'));
router.use('/roles', require('./roles/roles'));
router.use('/sanstha', require('./sanstha/sanstha'));
router.use('/schoolCastes', require('./schoolCastes/schoolCastes'));

router.use('/schoolCategories', require('./schoolCategories/schoolCategories'));
router.use('/schoolReligions', require('./schoolReligions/schoolReligions'));
router.use('/schools', require('./schools/schools'));
router.use('/schoolSections', require('./schoolSections/schoolSections'));

router.use('/schoolSubcastes', require('./schoolSubcastes/schoolSubcastes'));
router.use('/sections', require('./sections/sections'));
router.use('/states', require('./states/states'));
router.use('/subcastes', require('./subcastes/subcastes'));
router.use('/talukas', require('./talukas/talukas'));
router.use('/permissions', require('./permissions/permissions'));


module.exports = router; 