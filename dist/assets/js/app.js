//-_-_-_-_- loading animation timer_fadeAnim
$(window).on('load', function(){
	$('body').addClass('show');

});




// $('html,body').animate({ scrollTop: 0 }, '1');





$( document ).ready(function() {






	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	var windowHeightHalf = windowHeight / 2;
	var windowSP = 480;
	var windowTB = 835;





	//-_-_-_-_-  height　デバイスサイズ取得
	var windowHeight = document.documentElement.clientHeight;
	var target = $('.deviseHeight');

	target.height(windowHeight)
	target.outerHeight(windowHeight)

	$(window).resize(function() {
		target.height( document.documentElement.clientHeight );
	});





	//-_-_-_-_-  ブラウザバックで強制リロード
	window.onpageshow = function(event) {
		if (event.persisted) {
			window.location.reload();
		}
	};





	//-_-_-_-_-  target & rel 追加
	var targetBlank = $('.targetBlank');

	targetBlank.attr({
		target: '_blank',
		rel: 'noopener'
	});





	//-_-_-_-_-  page内link
	$(function(){
		$('a[href^="#"]').click(function() {
			var speed = 600;
			var href= $(this).attr("href");
			var target = $(href == "#" || href == "" ? 'html' : href);
			var position = target.offset().top;

			$('body,html').animate({scrollTop:position}, speed, 'swing');

			return false;
		});
	});





	//-_-_-_-_-  menu
	function menu(){
		$('#header').toggleClass('active');
		$('body').toggleClass('active');
		$('#menuArea').toggleClass('active');
	}

	$('.menuBar, #menuArea .Contents').on('click', function() {
		menu();
	});

	// $('#menuArea .Contents').on('click', function() {
	// 	menu();
	// });
	





	//-_-_-_-_-  span
	$("h2").each(function() {
		var content = $(this).html();
		var trimText = $.trim(this.textContent);
		var newText = "";

		trimText.split("").forEach(function(e) {
			if(e == ' '){
				newText += "<span class='Split space'></span>";
			} else {
				newText += "<span class='Split'>" + e + "</span>";
			}
		});
		$(this).html(newText);
	});






	//-_-_-_-_-  resize reload
	if (windowWidth <= windowTB) {
		// TB
	} else {
		// PC

		var timer = 0;
		var currentWidth = window.innerWidth;
		$(window).resize(function(){
			if (currentWidth == window.innerWidth) {
				return;
			}
			if (timer > 0) {
				clearTimeout(timer);
			}

			timer = setTimeout(function () {
				location.reload();
			}, 200);

		});

	}
	










	//-_-_-_-_-  topPage
	if ( window.document.body.id === 'topPage' ) {

		//-_-_-_-_-  Loading
		var urlParam = location.search.substring(1);

		var loading = $('#LoadingContents');
		var wrapper = $('#wrapper')

		var scene01 = $('#LoadingContents .LoadingPage.scene01');
		var row = $('#LoadingContents .LoadingPage.scene01 .LoadingBlock .row');

		var scene02 = $('#LoadingContents .LoadingPage.scene02');

		var CSSloadingOut = {
			opacity: '0',
			transition: '2s',
			filter: 'blur(2rem)'
		};
		var CSSloadingIn = {
			opacity: '1',
			transition: '2s',
			filter: 'blur(0)'
		};


		if (urlParam == 'top') {
			loading.hide();
			loading.addClass('clickNone');
			wrapper.css({
				'display':'block',
				'margin':'0',
			});

			// setTimeout(function(){
			// 	addH1();
			// 	addHeaderW();
			// 	removeHeaderB();			
			// },800);

			// KVslider();

		} else {
	
			setTimeout(function(){
				row.eq(0).addClass('active');
			},500);
			setTimeout(function(){
				row.eq(1).addClass('active');
			},2000);
			setTimeout(function(){
				row.eq(2).addClass('active');
			},3500);
	
			setTimeout(function(){
				scene01.css(CSSloadingOut);
				scene02.css(CSSloadingIn);
			},6000);
	
			setTimeout(function(){
				loading.css(CSSloadingOut);
				loading.addClass('clickNone');
				wrapper.css(CSSloadingIn);
			},9000);
	
			wrapper.css({
				'display':'none',
				'opacity': '0',
				'filter': 'blur(2rem)'
			});
			setTimeout(function(){
				wrapper.css({
					'display':'block',
				});
			},8500);
	

		}






		//-_-_-_-_-  header
		var header = $('header').outerHeight();
		var headerHulf = header / 2;
		var about = $('#About').offset().top;
		var aboutMinus = about - headerHulf;
		var service = $('#Service').offset().top;
		var serviceMinus = service - headerHulf;

		$(window).on("scroll", function() {
			var scrollTop = $(window).scrollTop();
			if (scrollTop > aboutMinus && scrollTop < serviceMinus){
				$('#header').addClass('white');
			} else {
				$('#header').removeClass('white');
			}	
		});
	





		//-_-_-_-_-  move background
		var lFollowX = 0,
		lFollowY = 0,
		x = 0,
		y = 0,
		friction = 1 / 30;

		function moveBackground() {
			x += (lFollowX - x) * friction;
			y += (lFollowY - y) * friction;
			translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';
			$('.bgAnim').css({
				'-webit-transform': translate,
				'-moz-transform': translate,
				'transform': translate
			});
			window.requestAnimationFrame(moveBackground);
			}
			$(window).on('mousemove click', function(e) {
			var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
			var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
			lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
			lFollowY = (10 * lMouseY) / 100;
			});
		moveBackground();










	}










	//-_-_-_-_- Other Animation
	var fadeIn = {
		distance: '0px',
		origin: 'bottom',
		interval: 1000,
		duration: 2000,
		mobile: true,
		viewFactor: 0.1,
		scale: 1
	};

	var slideUp = {
		distance: '100px',
		origin: 'bottom',
		interval: 1000,
		duration: 2000,
		mobile: true,
		scale: 1
	};

	var slideLeft = {
		distance: '100px',
		origin: 'left',
		interval: 1000,
		duration: 2000,
		mobile: true,
		scale: 1
	};

	var slideRight = {
		distance: '100px',
		origin: 'right',
		interval: 1000,
		duration: 2000,
		mobile: true,
		scale: 1
	};


	//-_-_-_-_- DOM animation
	var scroller = new ScrollReveal();

	scroller.reveal('.fadeIn', fadeIn);
	scroller.reveal('.fadeInBlock', fadeIn, 300);

	scroller.reveal('.slideUp', slideUp);
	scroller.reveal('.slideUpBlock', slideUp, 300);


	scroller.reveal('.slideLeft', slideLeft);
	scroller.reveal('.slideLeftBlock', slideLeft);

	scroller.reveal('.slideRight', slideRight);
	scroller.reveal('.slideRightBlock', slideRight, 200);

	scroller.reveal('h2, .fontAnim', { afterReveal: MyAddClass });

	function MyAddClass(el){
		el.classList.add('show');
	}





});