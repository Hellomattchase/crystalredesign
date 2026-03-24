//Quick View

$(document).ready(function () {
	$.getScript("//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js").done(function () {
		quickView();
	});
});


function quickView() {
	let currentRequest = null
	const qvCache = {}

	$(document)
		.off('click', '.quick-view')
		.on('click', '.quick-view', function (e) {
			e.preventDefault()

			const $btn = $(this)
			const product_handle = $btn.data('handle')

			if ($('#quick-view').length === 0) {
				$('body').append(`
        <div id="quick-view">
          <div class="qv-content">
            <div class="qv-wrapper"></div>
          </div>
        </div>
      `)
			}

			const $qv = $('#quick-view')
			const $wrapper = $qv.find('.qv-wrapper')

			if (
				$qv.data('handle') === product_handle &&
				$wrapper.children().length > 0
			) {
				openFancybox($qv, $wrapper)
				return
			}

			$qv.removeClass().addClass(product_handle).data('handle', product_handle)
			$wrapper.empty()

			if (currentRequest && typeof currentRequest.abort === 'function') {
				currentRequest.abort()
				currentRequest = null
			}

			if (qvCache[product_handle]) {
				$wrapper.append(qvCache[product_handle].clone(true, true))
				initQuickViewUI($wrapper)
				openFancybox($qv, $wrapper)
				return
			}

			currentRequest = $.ajax({
				url: '/products/' + product_handle,
				dataType: 'html',
				cache: true,
			}).done(function (html) {
				currentRequest = null

				const $tmp = $('<div>').html(html)
				$tmp
					.find(
						'.product__additional, .shopify-payment-button, .share-buttons, .product__pickup-availabilities, .pickup-availability-preview, .customer'
					)
					.remove()
				$tmp.find('script').each(function () {
					const src = $(this).attr('src') || ''
					if (
						src.includes('copy.js') ||
						src.includes('pickup-availability.js')
					) {
						$(this).remove()
					}
				})

				if (theme && theme.quickviewMore?.length > 0) {
					$tmp.find('.product-form__buttons').append(`
          <a class="product-form__buttons-more" href="/products/${product_handle}">${theme.quickviewMore}</a>
        `)
				}

				const $content = $tmp.find('.product-section')
				if ($content.length === 0) return

				qvCache[product_handle] = $content.clone(true, true)
				$wrapper.append($content)
				initQuickViewUI($wrapper)
				openFancybox($qv, $wrapper)
			})
		})

	function initQuickViewUI($wrapper) {
		$wrapper.find('.product__media-list').each(function () {
			const $list = $(this)
			if (!$list.hasClass('slick-initialized')) {
				$list.slick(getSliderSettings())
			}
			$list
				.off('afterChange.quickview')
				.on('afterChange.quickview', function () {
					if (window.pauseAllMedia) window.pauseAllMedia()
				})
		})

		$wrapper.find('.product__media-sublist').each(function () {
			const $sub = $(this)
			if (!$sub.hasClass('slick-initialized')) {
				const main = $sub.parent().find('.product__media-list')
				$sub.slick(getSubSliderProductSettings(main))
			}
		})

		$wrapper.find('variant-selects').addClass('variant-selects--quick-view')
		$wrapper.find('variant-radios').addClass('variant-selects--quick-view')
	}

	function openFancybox($qv, $wrapper) {
		$.fancybox({
			href: '#quick-view',
			maxWidth: 1076,
			maxHeight: 650,
			fitToView: true,
			width: '90%',
			height: '90%',
			autoSize: false,
			closeClick: false,
			openEffect: 'none',
			closeEffect: 'none',
			beforeLoad: function () {
				$('.fancybox-wrap').css('overflow', 'hidden !important')
			},
			afterShow: function () {
				if (theme?.quickviewText?.length > 0) {
					$('.fancybox-outer').append(`
            <div class="qv-announcement color-inverse">
              ${theme.quickviewText}
            </div>
          `)
				}
			},
			afterClose: function () {
				$qv.removeClass().removeData('handle')
				$wrapper.empty()
			},
		})
	}
}

document.addEventListener('shopify:section:load', function () {
	quickView()
})


