'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Index' });

   /* res.render('David', { title: 'David via Index' });

    res.render('Vero', { title: 'Vero via Index' }); */
});

module.exports = router;