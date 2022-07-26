var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('../views/static/index');
});

/* GET about us page. */
router.get('/aboutus', function(req, res, next) {
  res.render('../views/static/aboutus');
});

router.get('/pricing', function(req, res, next) {
  res.render('../views/static/pricing');
});

module.exports = router;