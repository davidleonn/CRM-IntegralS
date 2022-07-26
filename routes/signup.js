var express = require('express');
var router = express.Router();
const userController = require('../controller/userController');

/* GET signup page. */
router.get('/', function(req, res, next) {
  res.render('signup');
})

/* GET signup page. */
router.post('/register', userController.user_signup_post);




module.exports = router;
