$(document).ready(function () {

	let collectionListHover = () => {
		$(".categories-list__link").mousemove(function (event) {
			let image = $(this).parent().parent().find(".categories-list__media");
			image.css({"left": event.pageX, "top": event.pageY})
		});
	}

	document.addEventListener('shopify:section:load', function () {
		collectionListHover();
	});

	collectionListHover();


});