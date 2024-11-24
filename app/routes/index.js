var express = require('express');
var router = express.Router();
let conn = require("./connect");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('login', { title: 'Express', admin: req.admin }); // Pass admin to template
});

/* Simulate Login Route */
router.post('/login', function (req, res) {
  req.session.admin = true; // Simulate setting admin access after login
  res.redirect('/');
});

/* Simulate Logout Route */
router.get('/logout', function (req, res) {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

module.exports = router;
