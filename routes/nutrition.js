var express = require('express');
var router = express.Router();
var Nutrition = require("../models/nutrition").nutrition
var async = require("async");
const { nutrition } = require('../models/nutrition');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с nutritions')
});

/* Страница котят */
router.get('/:nick', function(req, res, next) {
  async.parallel([
          function(callback){
              Nutrition.findOne({nick:req.params.nick}, callback)
          },
          function(callback){
            Nutrition.find({},{_id:0,title:1,nick:1},callback)
          }
      ],
      function(err,result){
          if(err) return next(err)
          var nutrition = result[0]
          var nutritions = result[1] || []
          if(!nutrition) return next(new Error("Нет такого котенка в мультике Три кота"))
          res.render('nutrition', {
              title: nutrition.title,
              picture: nutrition.avatar,
              desc: nutrition.desc,
              menu: nutrition
          });
      })
})

module.exports = router