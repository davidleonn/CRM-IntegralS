const bcrypt = require('bcrypt');
const User = require('../model/userModel');

const saltRounds = 10;  // number of times encrypting algo will run

//user_signup_form
// user_signup_post
//user_login_form
//user_login_auth

const user_signup_form = (req, res) => {
    res.render('signup');
}

const user_signup_post = (req, res) => {
    console.log(req.body);
    const encryptedPassword = bcrypt.hashSync(req.body.password, saltRounds)
    const user = new User({
        name: req.body.name,
        companyId: req.body.companyId,
        telephone: req.body.telephone,
        username: req.body.username,
        email: req.body.email,
        password: encryptedPassword
    });

    user.save()
        .then(result => {
            res.redirect('/dashboard')
        })
        .catch(error => {
            console.log(error)
        })
}

const user_login_form = (req, res) => {
    res.render('login');
}

const user_login_auth = async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      console.log(user);
      if (user) {
        const cmp = await bcrypt.compare(req.body.password, user.password);
        if (cmp) {
          //   ..... further code to maintain authentication like jwt or sessions
          res.redirect('/dashboard');
        } else {
          res.render('login');
        }
      } else {
        res.render('login');
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server error Occured");
    }
  }


module.exports = {
    user_signup_form,
    user_signup_post,
    user_login_form,
    user_login_auth
}