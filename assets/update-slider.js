(function () {
	document.addEventListener('shopify:section:load', function (e) {
		$('.product-section .product__media-sublist').slick(getSubSliderProductSettings());
		$('.product-section .product__media-list').slick(getSliderSettings());

		$('.product-section .product__media-list').on('afterChange', function(event, slick, currentSlide, nextSlide){
			window.pauseAllMedia();
		});
	});
})();
