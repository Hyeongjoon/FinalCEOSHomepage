$(document).ready(function(){
	$(".mail_send_btn").on('click', function(){
		var emailRegExp = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		if($('#mail_title').val().trim().length==0){
			alert('제목을 입력해 주세요');
			$('#mail_title').focus();
		} else if($('#mail_sender').val().trim().length==0){
			alert('보내는 사람의 이름을 입력해 주세요');
			$('#mail_sender').focus();
		} else if($('#mail_content').val().trim().length==0){
			alert('메일 내용을 적어주세요');
			$('#mail_content').focus();
		} else if(!emailRegExp.test($("#mail_sender").val())){
			alert("올바른 이메일주소를 입력 해 주세요"); 
			$("#mail_sender").focus(); 
		}else if($('#contact_file_upload').val().length==0){
			$.ajax({url: 'http://ceos.or.kr/contact/mailsend',
				dataType: 'json',
				type: 'POST',
				data: {
					mail_title : $('#mail_title').val(),
					mail_sender : $('#mail_sender').val(),
					mail_content : $('#mail_content').val()
				},
				success: function(result) {
					if(result.results==true){
						location.href = '/contact'; 
						alert('메일보내기가 성공했습니다');
					} else{
						alert('mail보내기가 실패했습니다. 잠시후에 시도해주세요');
					}
				}
			});
		} else{
			var fd = new FormData();    
			fd.append( 'file' , $( '#contact_file_upload')[0].files[0]);
			fd.append('mail_title' , $('#mail_title').val());
			fd.append('mail_sender' , $('#mail_sender').val());
			fd.append('mail_content' , $('#mail_content').val());
			
			$.ajax({url: 'http://ceos.or.kr/contact/mailsend_file',
				dataType: 'json',
				type: 'POST',
				processData: false,
                contentType: false,
				data: fd,
				success: function(result) {
					if(result.results==true){
						location.href = '/contact'; 
						alert('메일보내기가 성공했습니다');
					} else{
						alert('mail보내기가 실패했습니다. 잠시후에 시도해주세요');
					}
				}
			});
		}
	});
});