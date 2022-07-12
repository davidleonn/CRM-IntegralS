var express = require('express');
var router = express.Router();

/* GET dashboard page. */
router.get('/', function(req, res, next) {
  res.render('dashboard', { title: 'Express' });
});

/* GET dashboard page. */
router.get('/expenses', function(req, res, next) {
  res.render('expenses');
});

module.exports = router;
