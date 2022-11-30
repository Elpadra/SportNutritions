var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test1')
var nutrition = require("./models/nutrition").nutrition


var nutrition = new nutrition({
    title: "бета аланин",
    nick: "beta-alanine"
})



console.log(nutrition)
nutrition.save(function(err, nutrition, affected){
    console.log(nutrition.title)
})

