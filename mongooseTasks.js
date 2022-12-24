var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/test1')
var Nutrition = require("../models/nutrition").Nutrition


var Nutrition = new Nutrition({
title: "Beta-alanine",
nick: "Бета-аланин"
})


console.log(nutrition)
nutrition.save(function(err, nutrition, affected){
console.log(nutrition.title)
})