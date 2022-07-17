var express = require('express');
var router = express.Router();

/* GET dashboard page. */
router.get('/', function(req, res, next) {
  res.render('dashboard', { title: 'Express' });
});

/* GET dashboard page. */
router.get('/enter-data/expenses', function(req, res, next) {
  res.render('expenses');
});

/* GET sales page. */
router.get('/enter-data/sales', function(req, res, next) {
  res.render('sales');
});

router.get('/show-data/sales', function(req, res, next) {
  res.render('showdatasales');
})


router.get('/show-data/expenses', function(req, res, next) {
  res.render('showdataexpenses');
})

router.get('/show-data/summary', function(req, res, next) {
  res.render('showdatasummary');
})
module.exports = router;
