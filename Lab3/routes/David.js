'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {

    var name = 'David ';

    var aboutMe = 'likes to program';

    res.render('David', { title: 'David Page', about: name + aboutMe });

   


});

module.exports = router;