const passport = require('passport');
var express = require('express');
var router = express.Router();
const userController = require('../controller/userController');

/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/auth', userController.user_login_auth);

/* Linkedin Log In*/
router.get('/', function (req, res) {
  res.render('pages/index.ejs'); // carga el archivo index.ejs
});

router.get('/profile', isLoggedIn, function (req, res) {
  res.render('pages/profile.ejs', {
    useqr: req.user // obtiene el usuario de la sesion y pasa a la siguiente
  });
});

router.get('/auth/linkedin', passport.authenticate('linkedin', {
  scope: ['r_emailaddress', 'r_liteprofile'],
}));

router.get('/login/auth/linkedin/callback',
  passport.authenticate('linkedin', {
    successRedirect: '/profile',
    failureRedirect: '/login'
  }));

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/');
}




module.exports = router;