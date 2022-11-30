var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с nutrition');
});

/* Страница героев */
router.get('/:nick', function(req, res, next) {
  Cat.findOne({nick:req.params.nick}, function(err,cat){
      if(err) return next(err)
      if(!cat) return next(new Error("Нет такого котенка в этом мультике"))
      res.render('cat', {
          title: cat.title,
          picture: cat.avatar,
          desc: cat.desc
      })
  })
})


module.exports = router;