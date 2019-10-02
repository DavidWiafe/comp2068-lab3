'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {

    var name = 'Rita ';

    var about = 'Likes to read books';

    res.render('Rita', { title: 'Rita Page', about: name + about  });

});

module.exports = router;