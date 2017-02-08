var express = require('express');
var mysql = require('mysql');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('signUp' , {});
});

router.post('/' , function(req , res , next){
	console.log(req.body.univ);
	
});

module.exports = router;
