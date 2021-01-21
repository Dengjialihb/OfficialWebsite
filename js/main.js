/**
 * Created by UICUT.com on 2016/12/31.
 * Contact QQ: 215611388
 */


jQuery(".js_banner").slide({mainCell:".bd ul",autoPlay:true});
jQuery(".js_bannerLeft").slide({mainCell:".bd ul",autoPlay:true,effect:"leftLoop"});
jQuery(".js_slideTxtBox").slide();
jQuery(".js_picScrollLeft").slide({mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,vis:3,trigger:"click"});
jQuery(".section33_js_bannerLeft").slide({mainCell:".bd ul",autoPlay:true,effect:"left",active:"true"});



var winH=$(window).height();



$(function(){
	if(winH>600){
		$(".fullpage-header-footer").css({minHeight: winH-$("header").height()-$("footer").height()});
	}
	$(document).on('click', '.alert .btn-close,.alert .js_btn-cancle', function(event) {
		event.preventDefault();
		$(this).parents(".alert").fadeOut('300', function() {
			$(this).removeClass('show');
		});
	});



});



$(window).resize(function(){

	// 窗口变换刷新页面
	if($("body").hasClass('resizeFresh')){
		location.reload();
	}

});

