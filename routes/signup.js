var express = require('express');
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
  res.render('signup-slave');
});


module.exports = router;
