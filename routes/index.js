var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index', { title: 'Express' });
});

/* Страница протеина */
router.get('/protein', function(req, res, next) {
    res.render('Nutritions', {
        title: "Протеин",
        picture: "images/protein.jpg",
        desc: "Протеин (белок)– это спортивная добавка, что состоит из концентрата натуральных белков."
    })
});
/* Страница бета-аланина */
router.get('/beta-alanine', function(req, res, next) {
    res.render('Nutritions', {
        title: "Бета-аланин",
        picture: "images/beta-alanine.jpg",
        desc: "Бета-аланин - биологически активная добавка к пище, дополнительный источник витамина D3, фолиевой кислоты, изофлавонов, содержащая бета-аланин."
    })
});
/* Страница аминокислоты */
router.get('/bcaa', function(req, res, next) {
    res.render('Nutritions', {
        title: "Аминокислота",
        picture: "images/bcaa.jpg",
        desc: "BCAA – основной материал для построения новых мышц. Эти аминокислоты составляют 35% всей мышечной массы и принимают важное участие в процессах анаболизма и восстановления, обладают антикатаболическим действием."
    })
});
module.exports = router;