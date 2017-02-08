var express = require('express');
var router = express.Router();
var config = require('../helper/config.js');

/* GET home page. */
router.get('/',  function(req, res, next) {
	  req.logout();  // 세션 삭제
	  req.session.passport = undefined;
	  res.redirect('/');
});

module.exports = router;
