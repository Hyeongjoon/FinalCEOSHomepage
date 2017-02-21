var EncryptHelper = require('../helper/EncryptHelper.js');
var email = require('nodemailer');
var config = require('../helper/config.js');


var fs = require('fs');

var emailTransport = email.createTransport(config.emailConfig);


var mailOption = {
		from : '"홈페이지에서 보낸것" <ceos.sinchon@gmail.com>',
		to : 'ceos.sinchon@gmail.com',
		subject : '',
		text : '',
		attachments : ''
};

var mailOptionNotFile = {
		from : '"홈페이지에서 보낸것" <ceos.sinchon@gmail.com>',
		to : 'ceos.sinchon@gmail.com',
		subject : '',
		text : ''
};

exports.makeEmail = function(title , email , content ,callback){
	
	
	mailOptionNotFile.subject=title;
	mailOptionNotFile.text= content+'\n 아래 메일로 답장주세요 여러분\n'+email;
	
	emailTransport.sendMail(mailOptionNotFile , function(err , info){
	
		if(err){
			callback('can`t send' , null);
		} else{
			callback(null , true);
		}
	});
}

exports.makeEmailWithFile = function(title , email , content , fileName , filePath , callback) {
	
	mailOption.subject= title
	mailOption.text = content+'\n 아래 메일로 답장주세요 여러분\n'+email;

	mailOption.attachments = [{
            filename: fileName,
            content: fs.createReadStream(filePath),
            contentType : 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        }];
	emailTransport.sendMail(mailOption , function(err , info){
		fs.unlink(filePath , function(deleteErr){
			if(err){
				console.log(deleteErr);
			}
			console.log('file delete successfully');
		});
		if(err){
			callback('can`t send' , null);
		}
		callback(null , true);
	});
}