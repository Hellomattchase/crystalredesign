(function () {
	const slideshowSlide = () => {
		const $slideshowElement = $(".slideshow__slide--initialized").not(
			".slick-initialized",
		);

		$slideshowElement.slick({
			slidesToShow: 1,
			arrows: false,
			dots: true,
			autoplay: $slideshowElement[0].dataset.autoplay === "true" ? true : false,
			autoplaySpeed: +$slideshowElement[0].dataset.sliderAutoplay,
			pauseOnHover: true,
			pauseOnFocus: true,
			adaptiveHeight: false,
			customPaging: function (slick, index) {
				const targetImage = slick.$slides.eq(index).find("img").attr("src");
				if (targetImage) {
					return (
						'<span><svg width="62" height="62" viewBox="0 0 62 62"><circle class="svg__circle" style="animation-duration:' +
						+$slideshowElement[0].dataset.sliderAutoplay / 1000 +
						's;" cx="31" cy="31" r="30" fill="none" stroke-width="2"></circle></svg></span><img src=" ' +
						targetImage +
						' "/>'
					);
				} else if (
					$slideshowElement[0].dataset.autoplay === "false" &&
					targetImage
				) {
					return '<img src=" ' + targetImage + ' "/>';
				} else {
					return (
						'<span><svg width="62" height="62" viewBox="0 0 62 62"><circle class="svg__circle" style="animation-duration:' +
						+$slideshowElement[0].dataset.sliderAutoplay / 1000 +
						's;" cx="31" cy="31" r="30" fill="none" stroke-width="2"></circle></svg></span>'
					);
				}
			},
		});

		$(".slideshow__button--next").click(function () {
			$(this)
				.parents(".slideshow")
				.find(".slideshow__slide--initialized")
				.slick("slickNext");
		});
		$(".slideshow__button--prev").click(function () {
			$(this)
				.parents(".slideshow")
				.find(".slideshow__slide--initialized")
				.slick("slickPrev");
		});
	};

	slideshowSlide();

	document.addEventListener("shopify:section:load", function () {
		slideshowSlide();
	});
})();
