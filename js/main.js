// $(document).ready(function() {
// 	// 获取浏览器可视区域高度（窗口高度）
// 	var winHeight = $(window).height();
// 	// 获取文档内部被内容撑起来的高度
// 	var docHeight = $('html,body').height();
// 	// 如果可视区域比内容高，则将底部tab固定在下面，否则就按照正常的需求来做。
// 	if (winHeight>=docHeight) {
// 		$('.footer').css({
// 			'position': 'fixed',
// 			'bottom': '0'
// 		});
// 	} else {}
// 	console.log('窗口高度为：'+winHeight);
// 	console.log('文档高度为：'+docHeight);
// });
//
//
$(document).ready(function() {
	$('.header').find('.menu').click(function() {
		if ($('body').hasClass('body_move')) {
			$('body').removeClass('body_move');
			$('.close').css('transform', 'rotate(0deg)');
		} else {
			$('body').addClass('body_move');
			$('.close').css('transform', 'rotate(135deg)');
		};
	});
	$('.close').click(function() {
		$('body').removeClass('body_move');
		$('.close').css('transform', 'rotate(0deg)');
	});
});

$(document).scroll(function() {
	var scrollDistance = -($('body').offset().top-$(window).scrollTop());
	if (scrollDistance>=200) {
		if ($('body').hasClass('body_move')) {
			$('.close').click()
		} else {}
	} else {}
});