'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {

    var name = 'Charles ';

    var about = 'likes to draw';

    res.render('Charles', { title: 'Charles Page', about: name + about });


});

module.exports = router;