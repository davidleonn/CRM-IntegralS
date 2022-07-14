var express = require('express');
var router = express.Router();


router.get('/dashboard/show-data/sales', function(req, res, next) {
  res.render('../views/showdatasales');
})


router.get('/dashboard/show-data/expenses', function(req, res, next) {
  res.render('../views/showdataexpenses');
})

router.get('/dashboard/show-data/summary', function(req, res, next) {
  res.render('../views/showdatasummary');
})

module.exports = router;
