'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {

    var name = 'Vero ';

    var about = 'Likes to watch Tv and Movies';

    res.render('Vero', { title: 'Veros Page', about: name + about  });


});

module.exports = router;