$(document).ready(function(){
	$(function() {
		$( "#birth_text" ).datepicker({
			changeMonth: true,
			changeYear: true,
			yearRange:'1950:2016',
			dateFormat: 'yy-mm-dd',
			prevText: '이전 달',
			nextText: '다음 달',
			monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
			monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
			dayNames: ['일','월','화','수','목','금','토'],
			dayNamesShort: ['일','월','화','수','목','금','토'],
			dayNamesMin: ['일','월','화','수','목','금','토'],
			showMonthAfterYear: true
		});
	});
	$("#birth_text").attr("readonly",true).attr("disabled",false);
});

$('#reg_btn').on('click' , function(){
	var idRegExp =  /[a-z]|[0-9]/gi;
	var passRegExp = /^[a-zA-Z0-9!@#$%^&*()?_~]{6,15}$/;
	var nameRegExp = /^[\uac00-\ud7a3]{2,5}$/;
	var enNameRegExp = /[a-z]|[\s]/gi;
	var emailRegExp = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
	var phoneRegExp = /^(?:(010-\d{4})|(01[1|6|7|8|9]-\d{3,4}))-(\d{4})$/;
	var univRegExp = /[a-z]|[0-9]|[\uac00-\ud7a3]{2,30}$/;
	var univIdRegExp = /^[0-9]{2,2}$/;
	
	if(!$("#id_text").val()){
		alert("id를 입력해주세요");
		$("#id_text").focus(); 
		return false;
	} else if ((($("#id_text").val()).replace(idRegExp , ''))!=''){
		alert("id는 영문과 숫자만 입력해주세요");
		$("#id_text").focus();
		return false;
	} else if($("#id_text").val().length<6 ||$("#id_text").val().length>12){
		alert("id는 6~12자리만 사용해야 합니다.");
		$("#id_text").focus();
		return false;
	} else if(!$("#pass_text").val()){
		alert("password를 입력해주세요");
		$("#pass_text").focus(); 
		return false;
	} else if(!($("#pass_text").val()==$("#pass_confirm_text").val())){
		alert("password와 passwordConfirm이 일치하지 않습니다.");
		$("#pass_text").focus();
		return false;
	} else if(!passRegExp.test($("#pass_text").val())){
		alert("password는 숫자, 영문, 특수문자 만 사용할수 있으며 6~15자리를 사용해야 합니다.");
		$("#pass_text").focus();
		return false;
	} else if(!$("#name_text").val()){
		alert("이름을 입력해 주세요");
		$("#name_text").focus();
		return false;
	} else if(!nameRegExp.test($("#name_text").val())){
		alert("올바른 이름을 입력해 주세요(5자리까지만 입력 가능)");
		$("#name_text").focus();
		return false;
	} else if(!$("#en_name_text").val()){
		alert("영문 이름을 입력해 주세요");
		$("#en_name_text").focus();
		return false;
	} else if((($("#en_name_text").val()).replace(enNameRegExp , ''))!=''){
		alert("영문 이름은 공백문자와 영어만 입력이 가능합니다.");
		$("#en_name_text").focus();
		return false;
	} else if(!$("#birth_text").val()){
		alert("생년월일을 입력해주세요");
		$("#birth_text").focus();
		return false;
	} else if(!$("#phone_text").val()){
		alert("핸드폰 번호를 입력해 주세요");
		$("#phone_text").focus();
		return false;
	} else if(!phoneRegExp.test($("#phone_text").val())){
		alert("올바른 형식의 휴대폰 번호를 입력해 주세요 (000-0000-0000)");
		$("#phone_text").focus();
		return false;
	} else if(!$("#email_text").val()){
		alert("이메일주소를 입력 해 주세요"); 
		$("#email_text").focus(); 
		return false;
	} else if(!emailRegExp.test($("#email_text").val())){
		alert("올바른 이메일주소를 입력 해 주세요"); 
		$("#email_text").focus(); 
		return false;
	} else if(!$("#univ_text").val()){
		alert("학교를 입력 해 주세요"); 
		$("#univ_text").focus(); 
		return false;
	} else if(!univRegExp.test($("#univ_text").val())){
		alert("학교를 올바르게 입력 해 주세요"); 
		$("#univ_text").focus(); 
		return false;
	} else if(!$("#major_text").val()){
		alert("학과를 입력해 주세요"); 
		$("#major_text").focus(); 
		return false;
	} else if(!univRegExp.test($("#major_text").val())){
		alert("학과를 올바르게 입력해 주세요"); 
		$("#major_text").focus(); 
		return false;
	} else if(!$("#univ_id_text").val()){
		alert("학번을 입력해주세요"); 
		$("#univ_id_text").focus(); 
		return false;
	} else if(!univIdRegExp.test($("#univ_id_text").val())){
		alert("학번은 입학년도 2자리만 입력해주세요   EX : 09"); 
		$("#univ_id_text").focus(); 
		return false;
	} else{
		$('#register_form').submit();	
	}
});