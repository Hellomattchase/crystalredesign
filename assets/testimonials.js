(function () {
	let testimonialsSlide = () => {
		var $slickElement = $('.testimonials__slider').not('.slick-initialized');
		//const getDirection = $($slickElement).attr('data-dir');
		//const direction = getDirection === 'rtl' ? true : false;

		$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
			var i = (currentSlide ? currentSlide : 0) + 1;
			$(this).parent().find('.testimonials__counts').text(i + '/' + slick.slideCount);
		});

		$slickElement.slick({
			slidesToShow: 2,
			arrows: false,
			dots: false,
			adaptiveHeight: true,
			//rtl: direction,
			responsive: [
				{
					breakpoint: 1000,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		});

		$('.testimonials__button--next').click(function () {
			$(this).parents('.testimonials').find('.testimonials__slider').slick('slickNext');
		});
		$('.testimonials__button--prev').click(function () {
			$(this).parents('.testimonials').find('.testimonials__slider').slick('slickPrev');
		});
	}

	document.addEventListener('shopify:section:load', function () {
		testimonialsSlide();
	});

	testimonialsSlide();


})();