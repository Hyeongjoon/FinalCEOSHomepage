$('.left_menu_recruit').on('click', function(){
	location.href = '/recruit';    
});

$('.left_menu_apply').on('click', function(){
	location.href = '/recruit/apply';    
});


$('.left_menu_faq').on('click', function(){
	location.href = '/recruit/faq';    
});

$('.left_menu_qna').on('click', function(){
	location.href = '/recruit/qna';    
});

$('.qna_make').on('click', function(){
	location.href = '/recruit/qna/make'; 
});

$('.qna_register').on('click', function(){
	
	var form = document.createElement("form");
		
		var input = document.createElement("input");
		form.setAttribute("method", "post");
		form.setAttribute("action", "/recruit/qna/register");
		input.type = "hidden";
		input.name = "title";
		input.value = $('.board_make_name').val();
		form.appendChild(input);
		
		var input2 = document.createElement("input");
		input2.type = "hidden";
		input2.name = "content";
		var tmp = $('.board_make_text').val(); 
		tmp = tmp.replace(/\n/g, '<br/>');
		tmp = tmp.replace(/\s/g, '&nbsp;');
		input2.value = tmp;
		form.appendChild(input2);
		document.body.appendChild(form);
		form.submit();
	});

function qnaClick(qid){
	location.replace("/recruit/qna/click?qid="+qid); 
}

function qnaReply(qid){
	var form = document.createElement("form");
	var input = document.createElement("input");
	form.setAttribute("method", "post");
	form.setAttribute("action", "/recruit/qna/reply");
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

function qnaDeletion(qid){
	var msg = "글을 삭제하시겠습니까?";
	if(!confirm(msg)){
		return;	
	}else{
	var form = document.createElement("form");
	var input = document.createElement("input");
	form.setAttribute("method", "post");
	form.setAttribute("action", "/recruit/qna/delete");
	input.type = "hidden";
	input.name = "bid";
	input.value = qid;
	form.appendChild(input);
	
	document.body.appendChild(form);
	form.submit();
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
	form.setAttribute("action", "/recruit/qna/deleteReply");
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
	}
}

function qnaRevise(qid){
	var form = document.createElement("form");
	var input = document.createElement("input");
	form.setAttribute("method", "post");
	form.setAttribute("action", "/recruit/qna/revise");
	input.type = "hidden";
	input.name = "bid";
	input.value = qid;
	form.appendChild(input);
	form.submit();
}

function qnaReviseRegister(qid){
	var form = document.createElement("form");
	var input = document.createElement("input");
	form.setAttribute("method", "post");
	form.setAttribute("action", "/recruit/qna/revision");
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
	var tmp = $('.board_make_text').val(); 
	tmp = tmp.replace(/\n/g, '<br/>');
	tmp = tmp.replace(/\s/g, '&nbsp;');
	input3.value = tmp;
	form.appendChild(input3);
	
	form.appendChild(input);
	form.submit();
}
