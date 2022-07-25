var express = require('express');
var router = express.Router();

const crmDataController = require('../controller/crmDataController')

/* GET dashboard page. */
router.get('/', function(req, res, next) {
  res.render('../views/crm/dashboard', { title: 'Express' });
});

/* sales routes. */
router.get('/show-data/expenses', crmDataController.expenses_report);
router.get('/enter-data/expenses', crmDataController.expenses_form);
router.post('/enter-data/expenses/post', crmDataController.expenses_form_post);

/* Expenses routes. */
router.get('/show-data/sales', crmDataController.sales_report);
router.get('/enter-data/sales', crmDataController.sales_form);
router.post('/enter-data/sales/post', crmDataController.sales_form_post);


router.get('/contact', function(req, res, next) {
  res.render('../views/crm/salesForm');
});

module.exports = router;
