var express = require('express');
var router = express.Router();
var passport = require('../web').passport;

router.post('/', passport.authenticate('local', { failureRedirect: '/login' , failureFlash : true }),
			  function(req, res) {
				delete req.session.flash;
			    res.redirect('/');
	});

router.get('/' , function(req, res, next){
	if(req.session.passport==undefined){
	var message; 
	if(req.session.flash == undefined){
		message = null;
	} else{
		message = req.session.flash.error[0];
		req.session.flash = undefined;
	}
	res.render('ceos_login' , {login : true , login_ck : req.session.passport , message : message});
	} else{
		res.redirect('/');
	}
});

module.exports = router;
