var express = require('express');
var router = express.Router();

/* GET dashboard page. */
router.get('/', function(req, res, next) {
  res.render('../views/crm/dashboard', { title: 'Express' });
});

/* GET dashboard page. */
router.get('/enter-data/expenses', function(req, res, next) {
  res.render('../views/crm/expensesForm');
});

/* GET sales page. */
router.get('/enter-data/sales', function(req, res, next) {
  res.render('../views/crm/salesForm');
});

router.get('/show-data/sales', function(req, res, next) {
  res.render('../views/crm/salesReport');
})


router.get('/show-data/expenses', function(req, res, next) {
  res.render('../views/crm/expensesReport');
})


router.get('/contact', function(req, res, next) {
  res.render('../views/crm/salesForm');
});

module.exports = router;
