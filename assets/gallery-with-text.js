(function () {
	let galleryTextSlide = () => {
		$(".gallery-with-text__card").hover(function () {
			let $this = $(this);
			$this.addClass("active");
			$this.siblings(".gallery-with-text__card").removeClass("active");
			setTimeout(function () {
				$this
					.children(".gallery-with-text__info")
					.children(".link--overlay")
					.addClass("active");
				$this
					.siblings(".gallery-with-text__card")
					.children(".gallery-with-text__info")
					.children(".link--overlay")
					.removeClass("active");
			}, 100);
		});
	};

	document.addEventListener("shopify:section:load", function () {
		galleryTextSlide();
	});

	galleryTextSlide();
})();
