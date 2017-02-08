var express = require('express');
var router = express.Router();

router.get('/greet', function(req, res){
	res.render('about_greet' , {login_ck : req.session.passport});
});

router.get('/history' , function(req , res){
	res.render('about_history' , {login_ck : req.session.passport});
});

router.get('/manage' , function(req , res){
	res.render('about_manage' , {login_ck : req.session.passport});
});

router.get('/philo' , function(req , res){
	res.render('about_philo' , {login_ck : req.session.passport});
});

router.get('/mentor', function(req , res){
	res.render('about_mentor' , {login_ck : req.session.passport});
});

module.exports = router;