var express = require('express');
var router = express.Router();
var async = require('async');


router.get('/', function(req, res){
	res.render('activity2016_2',{login_ck : req.session.passport});
});


router.get('/2016_1', function(req, res){
	res.render('activity',{login_ck : req.session.passport});
});



module.exports = router;