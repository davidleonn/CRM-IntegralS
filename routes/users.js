var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/signout', (req, res) =>{
  res.clearCookie("userId");
  res.clearCookie("companyId");
  res.redirect('/')
})
module.exports = router;
