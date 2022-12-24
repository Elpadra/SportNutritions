var express = require('express')
var router = express.Router()
var SportNutritions = require("../models/nutrition").SportNutritions


/* GET home page. */
router.get('/', function(req, res, next) {
  SportNutritions.find({}, {_id: 0, title: 1, nick: 1}, function(err, menu) {
    req.session.greeting = "Hi!!!"
    res.render('index', {
        title: "SportNutritions",
        counter: req.session.counter
  });
})
});

/* GET login/registration page. */
router.get('/logreg', function(req, res, next) {
  res.render('logreg',{title: 'Вход'});
  });
  
/* POST login/registration page. */
router.post('/logreg', function(req, res, next) {
    var username = req.body.username
    var password = req.body.password
});

module.exports = router;