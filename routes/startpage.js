var express = require('express');
var router = express.Router();

/* GET startpage. */
router.get('/', function(req, res, next) {
  res.render('startpage', { title: 'Express' });
});

module.exports = router;
