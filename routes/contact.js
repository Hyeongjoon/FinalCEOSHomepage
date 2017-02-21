var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var path = require('path');
var fs = require('fs');
var mailHelper = require('../helper/EmailMake');
var async = require('async');


router.get('/', function(req, res){
	res.render('contact' , {login_ck : req.session.passport});
});

router.post('/mailsend' , function(req, res,next){
	 async.parallel([function(callback){
		 mailHelper.makeEmail(req.body.mail_title , req.body.mail_sender , req.body.mail_content , callback)
	 }] , function(err , results){
		 if(err){
 			res.json({results : false});
 		} else{
 			res.json({results : true});
 		}
	 });
});

router.post('/mailsend_file' , function(req, res, next){
	
	 var form = new formidable.IncomingForm();
	 form.multiples = true;
	 form.uploadDir = __dirname;
	 
	 form.parse(req, function(err, fields, files) {
	        if (err) next(err);
	        var targetPath = form.uploadDir+'/'+files.file.name;
	        var fileName = files.file.name;
	        console.log('여기??');
	        fs.rename(files.file.path, form.uploadDir+'/'+files.file.name , function(callback){
	        	async.parallel([function(subCallback){
	        		mailHelper.makeEmailWithFile(fields.mail_title, fields.mail_sender , fields.mail_content , fileName , targetPath , subCallback)
	        	}] , function(err , results){
	        		if(err){
	        			res.json({results : false});
	        		} else{
	        			res.json({results : true});
	        		}
	        	});
	        });
	 });
});


module.exports = router;