var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var async = require('async');
var decryptHelper = require('../helper/DecryptHelper.js');
var userDAO = require('../model/UserDAO.js');


passport.use( new localStrategy({
        usernameField: 'id',
        passwordField: 'pass'
      } , function(id, password, done) {
    	  async.series([function(callback){
        	  userDAO.findUserByID(id , callback);
    	  }], function(err , result){
    		  if(result[0]==''){
    			  return done(null, false , { message: '해당 ID는 존재하지 않습니다.' });
    		  } else{
    	        	if(decryptHelper.decryption(result[0][0].password)== password){
    	        		if(result[0][0].verified == true){
    	        		  delete result[0][0].password;
    	    	          return done(null, result[0][0]);
    	        		} else{
    	        			return done(null, false , { message: '인증이 안된 사용자 입니다.' });
    	        		}
    	        	} else{
    	        		return done(null, false, { message: '비밀번호가 틀렸습니다.' });
    	        	}
    		  }
    	  });      
      }
));

passport.serializeUser( function(user, done) {
    console.log('serialize');
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    console.log('deserialize');
    done(null, user);
});

exports.passport = passport;