var express = require('express');
var router = express.Router();
var querystring = require('querystring');
var async = require('async');
var userDAO = require('../model/UserDAO');
var qnaDAO = require('../model/QnaDAO');



router.get('/apply', function(req, res){
	res.render('recruit_apply' , {login_ck : req.session.passport});
});

router.get('/' , function(req, res){
	res.render('recruit_det' , {login_ck : req.session.passport});
});

router.get('/faq' , function(req , res){
	res.render('recruit_faq' , {login_ck : req.session.passport});
});

router.get('/qna', function(req, res){
	var pageNum;					//보드 페이지번호 파라미터로 넘겨줘야함 없을시 첫번째 페이지 보이게 무조건 해놓음 파라미터 이름은 pageNum
	var totalNum;
	var countPage = 5;
	var boardInfo;
	if(req.url.length > 4){
		var qObj = querystring.parse(req.url.substring(5));
		if(qObj.pageNum == undefined){
			target=1;
		} else {
			target = qObj.pageNum;
		}
	} else{
		target=1;
	}
	pageNum = target;
	async.waterfall([function(callback){
		qnaDAO.foundTotalNum(callback);
	} , function(args1, callback){
		var countTop;        //맨마지막장일때 보여줄 갯수 제한
		totalNum = args1[0]['count(*)'];
		if(pageNum * countPage > totalNum){
			countTop =  totalNum - (pageNum - 1) * countPage;
		} else{
			countTop = countPage;
		}//맨 마지막장일때와 아닐때 처리
		qnaDAO.foundBoardPage(pageNum , countTop , callback);
	} ,function(args1 , callback){
		if(args1[0] == ''){
			callback('noBoard' , false);
		} else{
			boardInfo = args1,
			userDAO.findWriter(boardInfo , callback);
		}
	} ,function(args1 , callback){
		for(var i = 0 ; i < boardInfo.length ; i++){
			if(boardInfo[i].writer == 0){
				boardInfo[i].writerName = "손님";
			}
			for(var j = 0 ; j <args1.length ; j++){
				if(boardInfo[i].writer == args1[j].uid){
					boardInfo[i].writerName = args1[j].name;
					break;
				}
			}
		}
		qnaDAO.getQnaReplyNum(boardInfo , callback);
	}] , function(err , result){
		if(err){
			res.render('recruit_qna' , {board : undefined , totalNum : 'noBoard'});
		} else{
			for(var i = 0 ; i < boardInfo.length ; i++){
				boardInfo[i].reply_num = 0;
				for(var j = 0; j < result.length ; j++){
					if(boardInfo[i].qid == result[j].qid){
						++boardInfo[i].reply_num;
					}
				}
			}//각 게시물에서 리플갯수 더하는거
			for(var i = 0 ; i < boardInfo.length ; i++){
				var d = new Date(boardInfo[i].written_time);
				var temp;
				if(d.getMonth()<9){
					temp = "0"+(d.getMonth()+1);
				} else {
					temp = "" + (d.getMonth()+1);
				}
				boardInfo[i].written_time = d.getFullYear()+"-"+temp+"-"+d.getDate();
			}
		res.render('recruit_qna' , {board : boardInfo , totalNum : totalNum , pageNum : pageNum , login_ck : req.session.passport});
		}
	});
});

router.get('/qna/click' , function(req , res){ // qna 클릭했을때
	var target;
	if(req.url.length > 10){
		var qObj = querystring.parse(req.url.substring(11));
		console.log(qObj);
		if(qObj.qid == undefined){
			res.redirect('/recruit/qna');
		} else {
			target = qObj.qid;
		}
	} else{
		res.redirect('/recruit/qna');
	}
	var pageNum;					//보드 페이지번호 파라미터로 넘겨줘야함 없을시 첫번째 페이지 보이게 무조건 해놓음 파라미터 이름은 pageNum
	var totalNum;
	var countPage = 5;
	var boardInfo;
	var targetBoardReply;
	var targetBoardInfo;
	var bidNum = target; //req.body.bidNum;
	if(req.body.pageNum==undefined){
		pageNum = 1;
	} else{
		pageNum = req.body.pageNum;
	}
	async.waterfall([function(callback){
		if(bidNum == undefined){
			callback('err' , null);
		}else{
			qnaDAO.findTagetBoardByQid(bidNum , callback);
		}
	} ,function(args1 , callback){
		targetBoardInfo = args1;
		qnaDAO.findQnaReplyByQid(bidNum , callback);
	}, function(args1 ,callback){
		targetBoardReply = args1;
		qnaDAO.addViewNum(bidNum , callback);
	}, function(args1 ,callback){
		if(targetBoardReply.length == 0){
			callback(null , null);
		} else{
			qnaDAO.findReplyWriter(targetBoardReply , callback);
		}
	} ,function(args1 , callback){
		for(var i = 0 ; i <targetBoardReply.length ; i++){
			targetBoardReply[i].writerName = "손님";
			for(var j = 0 ; j <args1.length ; j++){
				if(targetBoardReply[i].writer ==args1[j].uid){
					targetBoardReply[i].writerName = args1[j].name;
				}
			}
		}
		qnaDAO.foundTotalNum(callback);
	}, function(args1, callback){
		var countTop;        //맨마지막장일때 보여줄 갯수 제한
		totalNum = args1[0]['count(*)'];
		if(pageNum * countPage > totalNum){
			countTop =  totalNum - (pageNum - 1) * countPage;
		} else{
			countTop = countPage;
		}//맨 마지막장일때와 아닐때 처리
		qnaDAO.foundBoardPage(pageNum , countTop , callback);
	} ,function(args1 , callback){
		if(args1[0] == ''){
			callback('noBoard' , false);
		} else{
			boardInfo = args1,
			userDAO.findWriter(boardInfo , callback);
		}
	} ,function(args1 , callback){
		for(var i = 0 ; i < boardInfo.length ; i++){
			for(var j = 0 ; j <args1.length ; j++){
				if(boardInfo[i].writer == args1[j].uid){
					boardInfo[i].writerName = args1[j].name;
					break;
				}
			}
		}
		for(var i = 0 ; i <args1.length ; i++){
			if(targetBoardInfo[0].writer == args1[i].uid){
				targetBoardInfo[0].writerName=args1[i].name;
			}
		}
		if(targetBoardInfo[0].writer == 0){
			targetBoardInfo[0].writerName="손님";
		}
		qnaDAO.getQnaReplyNum(boardInfo , callback);
	}] , function(err , result){
		if(err){
			res.render('recruit_qna_det' , {board : undefined , totalNum : 'noBoard' , login_ck : req.session.passport});
		} else{
			for(var i = 0 ; i < boardInfo.length ; i++){
				boardInfo[i].reply_num = 0;
				for(var j = 0; j < result.length ; j++){
					if(boardInfo[i].qid == result[j].qid){
						++boardInfo[i].reply_num;
					}
				}
			}//각 게시물에서 리플갯수 더하는거
			for(var i = 0 ; i < targetBoardReply.length ; i++){
				var d = new Date(targetBoardReply[i].written_time);
				var temp;
				if(d.getMonth()<9){
					temp = "0"+(d.getMonth()+1);
				} else {
					temp = "" + (d.getMonth()+1);
				}
				targetBoardReply[i].written_time = d.getFullYear()+"-"+temp+"-"+d.getDate();
			}
			
			var d = new Date(targetBoardInfo[0].written_time);
			var temp;
			if(d.getMonth()<9){
				temp = "0"+(d.getMonth()+1);
			} else {
				temp = "" + (d.getMonth()+1);
			}
			targetBoardInfo[0].written_time = d.getFullYear()+"-"+temp+"-"+d.getDate();
			res.render('recruit_qna_det' , {targetBoardReply : targetBoardReply , targetBoardInfo : targetBoardInfo[0] , login_ck : req.session.passport}); //여기부터 하고가면될듯
		}
	});
});

router.get('/qna/make', function(req , res){
	res.render('recruit_qna_make' , {login_ck : req.session.passport});
});

router.post('/qna/register' , function(req , res){
	async.waterfall([function(callback){
		var temp = 0;
		if(req.session.passport !== undefined){
			temp = req.session.passport.user.uid;
		}
		var inform = {
				title : req.body.title,//req.body.title;
				content : req.body.content, //req.body.content;
				writer : temp
		}
		qnaDAO.register(inform , callback);
	}] , function(err , result){
		if(err){
			res.send('qna 작성완료 안됨 내부오류');
		}else{
			res.redirect('/recruit/qna');
		}
	});
});


router.post('/qna/reply' , function(req , res){
	async.waterfall([function(callback){
		var temp = 0;
		if(req.session.passport !== undefined){
			temp = req.session.passport.user.uid;
		}
		var inform = {
				qid : req.body.bid, //req.body.bid
				writer : temp, //req.body.replyWriter
				content : req.body.replyContent //req.body.replyContent
		}
		qnaDAO.addReply(inform  , callback);
	}] , function(err ,result){
		if(err){
			res.send('qna 댓글 내부오류');
		} else{
			res.redirect('/recruit/qna/click?qid='+req.body.bid);
		}
	});
});

router.post('/qna/delete' , function(req , res){
	var targetQid = req.body.bid; // req.body.bid;
	async.waterfall([function(callback){
		qnaDAO.deletion(targetQid , callback);
	}] , function(err ,result){
		if(err){
			res.send('qna 삭제 안됨 내부오류');
		} else{
			res.redirect('/recruit/qna');
		}
	});
});

router.post('/qna/reply' , function(req , res){
	async.waterfall([function(callback){
		var temp = 0;
		if(req.session.passport !== undefined){
			temp = req.session.passport.user.uid;
		}
		var inform = {
				qid : req.body.bid, //req.body.bid
				writer : temp, //req.body.replyWriter
				content : req.body.replyContent //req.body.replyContent
		}
		qnaDAO.addReply(inform  , callback);
	}] , function(err ,result){
		if(err){
			res.send('qna 댓글 내부오류');
		} else{
			res.redirect('/recruit/qna/click?qid='+req.body.bid);
		}
	});
});

router.post('/qna/deleteReply' , function(req , res){
	var qrid =  req.body.rid;//req.body.rid
	async.waterfall([function(callback){
		qnaDAO.deleteReply(qrid , callback);
	}] , function(err ,result){
		if(err){
			res.send('qna 댓글 삭제 내부오류');
		} else{
			res.redirect('/recruit/qna/click?qid='+req.body.bid);
		}
	});
});

router.post('/qna/revise' , function(req , res){
	async.waterfall([function(callback){
		qnaDAO.findTagetBoardByQid(req.body.bid , callback);
	}] , function(err , result){
		if(err){
			res.send('내부서버오류');
		}else{
		res.render('recruit_qna_revise' , {login_ck : req.session.passport , targetBoardInfo : result[0]});
		}
	});
});

router.post('/qna/revision' , function(req , res){
	var inform = {
			title : req.body.title,//req.body.title;
			content : req.body.content, //req.body.content;
			qid : req.body.bid //req.body.bid
	}
	async.waterfall([function(callback){
		qnaDAO.reviseBoard(inform , callback);
	}] , function(err , result){
		if(err){
			res.send('board 수정 안됨 내부오류');
		} else{
			res.redirect('/recruit/qna/click?qid='+req.body.bid);
		}
	});
});

module.exports = router;