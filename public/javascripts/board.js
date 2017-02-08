$('.left_menu_notice').on('click', function(){
	location.replace("/board/notice"); 
});

$('.left_menu_free').on('click', function(){
	location.replace("/board/free"); 
});

$('.left_menu_anony').on('click', function(){
	location.replace("/board/anony"); 
});

$('.left_menu_faq').on('click', function(){
	location.replace("/board/faq"); 
});

$('.left_menu_qna').on('click', function(){
	location.replace("/board/qna"); 
});

$('.anony_make').on('click', function(){
	location.replace("/board/anony/make"); 
});

$('.free_make').on('click', function(){
	location.replace("/board/free/make"); 
});

$('.qna_make').on('click', function(){
	location.replace("/board/qna/make"); 
});

$('.anony_register').on('click', function(){
	
	var form = document.createElement("form");
	
	var input = document.createElement("input");
	form.setAttribute("method", "post");
	form.setAttribute("action", "/board/anony/register");
	input.type = "hidden";
	input.name = "title";
	input.value = $('.board_make_name').val();
	form.appendChild(input);
	
	var input2 = document.createElement("input");
	input2.type = "hidden";
	input2.name = "content";
	input2.value = $('.board_make_text').val();
	form.appendChild(input2);
	document.body.appendChild(form);
	form.submit();
});

$('.free_register').on('click', function(){
	var form = document.createElement("form");
		var input = document.createElement("input");
		form.setAttribute("method", "post");
		form.setAttribute("action", "/board/free/register");
		input.type = "hidden";
		input.name = "title";
		input.value = $('.board_make_name').val();
		form.appendChild(input);
		
		var input2 = document.createElement("input");
		input2.type = "hidden";
		input2.name = "content";
		input2.value = $('.board_make_text').val();
		form.appendChild(input2);
		document.body.appendChild(form);
		form.submit();
	});

$('.qna_register').on('click', function(){
	
	var form = document.createElement("form");
		
		var input = document.createElement("input");
		form.setAttribute("method", "post");
		form.setAttribute("action", "/board/qna/register");
		input.type = "hidden";
		input.name = "title";
		input.value = $('.board_make_name').val();
		form.appendChild(input);
		
		var input2 = document.createElement("input");
		input2.type = "hidden";
		input2.name = "content";
		input2.value = $('.board_make_text').val();
		form.appendChild(input2);
		document.body.appendChild(form);
		form.submit();
	});

function anonyClick(anid){
	location.replace("/board/anony/click?anid="+anid); 
}

function anonyReply(anid){
		var form = document.createElement("form");
		var input = document.createElement("input");
		form.setAttribute("method", "post");
		form.setAttribute("action", "/board/anony/reply");
		input.type = "hidden";
		input.name = "bid";
		input.value = anid;
		form.appendChild(input);
		
		var input2 = document.createElement("input");
		input2.type = "hidden";
		input2.name = "replyContent";
		input2.value = $('.anony_reply').val();
		form.appendChild(input2);
		
		document.body.appendChild(form);
		form.submit();
	}

function qnaReply(qid){
	var form = document.createElement("form");
	var input = document.createElement("input");
	form.setAttribute("method", "post");
	form.setAttribute("action", "/board/qna/reply");
	input.type = "hidden";
	input.name = "bid";
	input.value = qid;
	form.appendChild(input);
	
	var input2 = document.createElement("input");
	input2.type = "hidden";
	input2.name = "replyContent";
	input2.value = $('.qna_reply').val();
	form.appendChild(input2);
	
	document.body.appendChild(form);
	form.submit();
}

function freeReply(bid){
	var form = document.createElement("form");
	var input = document.createElement("input");
	form.setAttribute("method", "post");
	form.setAttribute("action", "/board/free/reply");
	input.type = "hidden";
	input.name = "bid";
	input.value = bid;
	form.appendChild(input);
	
	var input2 = document.createElement("input");
	input2.type = "hidden";
	input2.name = "replyContent";
	input2.value = $('.free_reply').val();
	form.appendChild(input2);
	
	document.body.appendChild(form);
	form.submit();
}

function anonyPage(pageNum){
	location.replace("/board/anony?pageNum="+pageNum); 
}

function qnaPage(pageNum){
	location.replace("/board/qna?pageNum="+pageNum); 
}

function qnaClick(qid){
	location.replace("/board/qna/click?qid="+qid); 
}

$('.notice_make').on('click', function(){
	location.replace("/board/notice/make"); 
});


$('.notice_register').on('click', function(){
	
var form = document.createElement("form");
	
	var input = document.createElement("input");
	form.setAttribute("method", "post");
	form.setAttribute("action", "/board/notice/register");
	input.type = "hidden";
	input.name = "title";
	input.value = $('.board_make_name').val();
	form.appendChild(input);
	
	var input2 = document.createElement("input");
	input2.type = "hidden";
	input2.name = "content";
	input2.value = $('.board_make_text').val();
	form.appendChild(input2);
	document.body.appendChild(form);
	form.submit();
});

function noticePage(pageNum){
	location.replace("/board/notice?pageNum="+pageNum); 
}

function noticeClick(nid){
	location.replace("/board/notice/click?nid="+nid); 
}

function freePage(pageNum){
	location.replace("/board/free?pageNum="+pageNum); 
}

function freeClick(bid){
	location.replace("/board/free/click?bid="+bid); 
}

function freeDeletion(bid){
	var msg = "글을 삭제하시겠습니까?";
	if(!confirm(msg)){
		return;	
	}else{
	var form = document.createElement("form");
	var input = document.createElement("input");
	form.setAttribute("method", "post");
	form.setAttribute("action", "/board/free/delete");
	input.type = "hidden";
	input.name = "bid";
	input.value = bid;
	form.appendChild(input);
	
	document.body.appendChild(form);
	form.submit();
	}
}

function anonyDeletion(anid){
	var msg = "글을 삭제하시겠습니까?";
	if(!confirm(msg)){
		return;	
	}else{
	var form = document.createElement("form");
	var input = document.createElement("input");
	form.setAttribute("method", "post");
	form.setAttribute("action", "/board/anony/delete");
	input.type = "hidden";
	input.name = "bid";
	input.value = anid;
	form.appendChild(input);
	
	document.body.appendChild(form);
	form.submit();
	}
}

function noticeDeletion(nid){
	var msg = "글을 삭제하시겠습니까?";
	if(!confirm(msg)){
		return;	
	}else{
	var form = document.createElement("form");
	var input = document.createElement("input");
	form.setAttribute("method", "post");
	form.setAttribute("action", "/board/notice/delete");
	input.type = "hidden";
	input.name = "bid";
	input.value = nid;
	form.appendChild(input);
	
	document.body.appendChild(form);
	form.submit();
	}
}

function qnaDeletion(qid){
	var msg = "글을 삭제하시겠습니까?";
	if(!confirm(msg)){
		return;	
	}else{
	var form = document.createElement("form");
	var input = document.createElement("input");
	form.setAttribute("method", "post");
	form.setAttribute("action", "/board/qna/delete");
	input.type = "hidden";
	input.name = "bid";
	input.value = qid;
	form.appendChild(input);
	
	document.body.appendChild(form);
	form.submit();
	}
}

function delFreeReply(rid , bid){
	var msg = "댓글을 삭제하시겠습니까?";
	if(!confirm(msg)){
		return;	
	}else{
	var form = document.createElement("form");
	var input = document.createElement("input");
	form.setAttribute("method", "post");
	form.setAttribute("action", "/board/free/deleteReply");
	input.type = "hidden";
	input.name = "rid";
	input.value = rid;
	form.appendChild(input);
	
	var input2 = document.createElement("input");
	input2.type = "hidden";
	input2.name = "bid";
	input2.value = bid;
	form.appendChild(input2);
	document.body.appendChild(form);
	form.submit();
	}
}

function delAnonyReply(rid , anid){
	var msg = "댓글을 삭제하시겠습니까?";
	if(!confirm(msg)){
		return;	
	}else{
	var form = document.createElement("form");
	var input = document.createElement("input");
	form.setAttribute("method", "post");
	form.setAttribute("action", "/board/anony/deleteReply");
	input.type = "hidden";
	input.name = "rid";
	input.value = rid;
	form.appendChild(input);
	
	var input2 = document.createElement("input");
	input2.type = "hidden";
	input2.name = "bid";
	input2.value = anid;
	form.appendChild(input2);
	document.body.appendChild(form);
	form.submit();
	return;
	}
}

function delQnaReply(rid , qid){
	var msg = "댓글을 삭제하시겠습니까?";
	if(!confirm(msg)){
		return;	
	}else{
	var form = document.createElement("form");
	var input = document.createElement("input");
	form.setAttribute("method", "post");
	form.setAttribute("action", "/board/qna/deleteReply");
	input.type = "hidden";
	input.name = "rid";
	input.value = rid;
	form.appendChild(input);
	
	var input2 = document.createElement("input");
	input2.type = "hidden";
	input2.name = "bid";
	input2.value = qid;
	form.appendChild(input2);
	document.body.appendChild(form);
	form.submit();
	return;
	}
}

function freeRevise(bid){
	var form = document.createElement("form");
	var input = document.createElement("input");
	form.setAttribute("method", "post");
	form.setAttribute("action", "/board/free/revise");
	input.type = "hidden";
	input.name = "bid";
	input.value = bid;
	form.appendChild(input);
	form.submit();
}

function freeReviseRegister(bid){
	var form = document.createElement("form");
	var input = document.createElement("input");
	form.setAttribute("method", "post");
	form.setAttribute("action", "/board/free/revision");
	input.type = "hidden";
	input.name = "bid";
	input.value = bid;
	
	var input2 = document.createElement("input");
	input2.type = "hidden";
	input2.name = "title";
	input2.value = $('.board_make_name').val();
	form.appendChild(input2);
	
	var input3 = document.createElement("input");
	input3.type = "hidden";
	input3.name = "content";
	input3.value = $('.board_make_text').val();
	form.appendChild(input3);
	
	form.appendChild(input);
	form.submit();
}

function anonyRevise(anid){
	var form = document.createElement("form");
	var input = document.createElement("input");
	form.setAttribute("method", "post");
	form.setAttribute("action", "/board/anony/revise");
	input.type = "hidden";
	input.name = "bid";
	input.value = anid;
	form.appendChild(input);
	form.submit();
}

function anonyReviseRegister(anid){
	var form = document.createElement("form");
	var input = document.createElement("input");
	form.setAttribute("method", "post");
	form.setAttribute("action", "/board/anony/revision");
	input.type = "hidden";
	input.name = "bid";
	input.value = anid;
	
	var input2 = document.createElement("input");
	input2.type = "hidden";
	input2.name = "title";
	input2.value = $('.board_make_name').val();
	form.appendChild(input2);
	
	var input3 = document.createElement("input");
	input3.type = "hidden";
	input3.name = "content";
	input3.value = $('.board_make_text').val();
	form.appendChild(input3);
	
	form.appendChild(input);
	form.submit();
}

function qnaRevise(qnid){
	var form = document.createElement("form");
	var input = document.createElement("input");
	form.setAttribute("method", "post");
	form.setAttribute("action", "/board/qna/revise");
	input.type = "hidden";
	input.name = "bid";
	input.value = qnid;
	form.appendChild(input);
	form.submit();
}

function qnaReviseRegister(qid){
	var form = document.createElement("form");
	var input = document.createElement("input");
	form.setAttribute("method", "post");
	form.setAttribute("action", "/board/qna/revision");
	input.type = "hidden";
	input.name = "bid";
	input.value = qid;
	
	var input2 = document.createElement("input");
	input2.type = "hidden";
	input2.name = "title";
	input2.value = $('.board_make_name').val();
	form.appendChild(input2);
	
	var input3 = document.createElement("input");
	input3.type = "hidden";
	input3.name = "content";
	input3.value = $('.board_make_text').val();
	form.appendChild(input3);
	
	form.appendChild(input);
	form.submit();
}

function noticeRevise(nid){
	var form = document.createElement("form");
	var input = document.createElement("input");
	form.setAttribute("method", "post");
	form.setAttribute("action", "/board/notice/revise");
	input.type = "hidden";
	input.name = "bid";
	input.value = nid;
	form.appendChild(input);
	form.submit();
}

function noticeReviseRegister(nid){
	var form = document.createElement("form");
	var input = document.createElement("input");
	form.setAttribute("method", "post");
	form.setAttribute("action", "/board/notice/revision");
	input.type = "hidden";
	input.name = "bid";
	input.value = nid;
	
	var input2 = document.createElement("input");
	input2.type = "hidden";
	input2.name = "title";
	input2.value = $('.board_make_name').val();
	form.appendChild(input2);
	
	var input3 = document.createElement("input");
	input3.type = "hidden";
	input3.name = "content";
	input3.value = $('.board_make_text').val();
	form.appendChild(input3);
	
	form.appendChild(input);
	form.submit();
}