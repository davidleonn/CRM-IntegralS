var express = require('express');
const res = require('express/lib/response');
var router = express.Router();

/* GET signup page. */
router.get('/', function(req, res, next) {
  res.render('signup');
})

/* GET signup page. */
router.get('/admin', function(req, res, next) {
  res.render('signup-admin');
});

router.get('/slave', function(req, res, next) {
  res.render('slave-sign-up');
});


module.exports = router;
