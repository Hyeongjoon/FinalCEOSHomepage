$(document).ready(function(){
		
});

$(".left_menu").on("mouseover", function(){
	$(this).addClass("active");
});

$(".left_menu").on("mouseout", function(){
	$(this).removeClass("active");
});

$('.logo_box').on('click', function(){
	location.href = '/'; 
});

$(".menu_about").on('click', function(){
	location.href = '/about/philo'; 
});
$(".menu_board").on('click', function(){
	location.href = '/board/notice'; 
});
$(".menu_mem").on('click', function(){
	location.href = '/members'; 
});
$(".menu_act").on('click', function(){
	location.href = '/activity';
});
$(".menu_rec").on('click', function(){
	location.href = '/recruit'; 
});

$(".menu_con").on('click', function(){
	location.href = '/contact'; 
});

$('.ceos_login_btn').on('click', function(){
	location.href = '/login';
});

$('.ceos_signup_btn').on('click', function(){
	location.href = '/signUp';
});

$('.ceos_logout_btn').on('click', function(){
	location.replace("/logout");
});

