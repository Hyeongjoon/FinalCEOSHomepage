var express = require('express');
var router = express.Router();

/**/

/* GET home page. */

router.get('/' , function(req , res , next){

	res.render('ceos_main' , {login_ck : req.session.passport});
	
});

module.exports = router;

//main about board 자유 익명  sad qna , faq 다볼수있게  notice 풀고 
