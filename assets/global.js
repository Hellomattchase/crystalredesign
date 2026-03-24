function getSliderSettings() {
	return {
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		infinite: false,
		adaptiveHeight: false,
		asNavFor: '.product__media-sublist',
		prevArrow:
			'<div class=\'slick-arrow  slick-prev\'> <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">' +
			'<path fill-rule="evenodd" clip-rule="evenodd" d="M1.75247 7.76459L1.04536 8.47169L1.75247 9.1788L7.83781 15.2641L8.54492 14.557L2.45958 8.47169L8.54492 2.38635L7.83782 1.67924L1.75247 7.76459Z" fill="#5C5C5C"/>' +
			'<path d="M1.04536 8.47169L0.69181 8.11814L0.338257 8.47169L0.691809 8.82525L1.04536 8.47169ZM1.75247 7.76459L2.10602 8.11814L2.10602 8.11814L1.75247 7.76459ZM1.75247 9.1788L1.39891 9.53235L1.39892 9.53235L1.75247 9.1788ZM7.83781 15.2641L7.48426 15.6177L7.83781 15.9713L8.19137 15.6177L7.83781 15.2641ZM8.54492 14.557L8.89847 14.9106L9.25203 14.557L8.89847 14.2035L8.54492 14.557ZM2.45958 8.47169L2.10602 8.11814L1.75247 8.47169L2.10602 8.82525L2.45958 8.47169ZM8.54492 2.38635L8.89848 2.7399L9.25203 2.38635L8.89848 2.0328L8.54492 2.38635ZM7.83782 1.67924L8.19137 1.32569L7.83782 0.972136L7.48426 1.32569L7.83782 1.67924ZM1.39892 8.82525L2.10602 8.11814L1.39892 7.41103L0.69181 8.11814L1.39892 8.82525ZM2.10602 8.82525L1.39892 8.11814L0.691809 8.82525L1.39891 9.53235L2.10602 8.82525ZM8.19137 14.9106L2.10602 8.82525L1.39892 9.53235L7.48426 15.6177L8.19137 14.9106ZM8.19137 14.2035L7.48426 14.9106L8.19137 15.6177L8.89847 14.9106L8.19137 14.2035ZM2.10602 8.82525L8.19137 14.9106L8.89847 14.2035L2.81313 8.11814L2.10602 8.82525ZM8.19137 2.0328L2.10602 8.11814L2.81313 8.82525L8.89848 2.7399L8.19137 2.0328ZM7.48426 2.0328L8.19137 2.7399L8.89848 2.0328L8.19137 1.32569L7.48426 2.0328ZM2.10602 8.11814L8.19137 2.0328L7.48426 1.32569L1.39892 7.41103L2.10602 8.11814Z" fill="#5C5C5C"/>' +
			'</svg> </div>',
		nextArrow:
			'<div class=\'slick-arrow  slick-next\'> <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">' +
			'<path fill-rule="evenodd" clip-rule="evenodd" d="M8.24753 8.23541L8.95464 7.5283L8.24753 6.8212L2.16218 0.735851L1.45508 1.44296L7.54042 7.5283L1.45508 13.6136L2.16218 14.3208L8.24753 8.23541Z" fill="#5C5C5C"/>' +
			'<path d="M8.95464 7.5283L9.30819 7.88186L9.66174 7.5283L9.30819 7.17475L8.95464 7.5283ZM8.24753 8.23541L7.89398 7.88186V7.88186L8.24753 8.23541ZM8.24753 6.8212L8.60108 6.46764H8.60108L8.24753 6.8212ZM2.16218 0.735851L2.51574 0.382298L2.16218 0.0287447L1.80863 0.382298L2.16218 0.735851ZM1.45508 1.44296L1.10152 1.0894L0.747971 1.44296L1.10152 1.79651L1.45508 1.44296ZM7.54042 7.5283L7.89398 7.88186L8.24753 7.5283L7.89398 7.17475L7.54042 7.5283ZM1.45508 13.6136L1.10152 13.2601L0.747971 13.6136L1.10152 13.9672L1.45508 13.6136ZM2.16218 14.3208L1.80863 14.6743L2.16218 15.0279L2.51574 14.6743L2.16218 14.3208ZM8.60108 7.17475L7.89398 7.88186L8.60108 8.58896L9.30819 7.88186L8.60108 7.17475ZM7.89398 7.17475L8.60108 7.88186L9.30819 7.17475L8.60108 6.46764L7.89398 7.17475ZM1.80863 1.08941L7.89398 7.17475L8.60108 6.46764L2.51574 0.382298L1.80863 1.08941ZM1.80863 1.79651L2.51574 1.08941L1.80863 0.382298L1.10152 1.0894L1.80863 1.79651ZM7.89398 7.17475L1.80863 1.0894L1.10152 1.79651L7.18687 7.88186L7.89398 7.17475ZM1.80863 13.9672L7.89398 7.88186L7.18687 7.17475L1.10152 13.2601L1.80863 13.9672ZM2.51574 13.9672L1.80863 13.2601L1.10152 13.9672L1.80863 14.6743L2.51574 13.9672ZM7.89398 7.88186L1.80863 13.9672L2.51574 14.6743L8.60108 8.58896L7.89398 7.88186Z" fill="#5C5C5C"/>' +
			'</svg></div>',
		responsive: [
			{
				breakpoint: 990,
				settings: {
					adaptiveHeight: true,
				},
			},
		],
	}
}

function getSubSliderProductSettings(slider) {
	return {
		slidesToScroll: 1,
		arrows: false,
		asNavFor: slider ? slider[0] : '.product__media-list',
		focusOnSelect: true,
		verticalSwiping: false,
		autoplay: false,
		infinite: false,
		cssEase: 'linear',
		responsive: [
			{
				breakpoint: 3000,
				settings: {
					slidesToShow: 7,
					vertical: true,
					useTransform: false,
					variableWidth: false,
					useTransform: true,
				},
			},
			{
				breakpoint: 990,
				settings: {
					vertical: false,
					variableWidth: true,
					useTransform: true,
					centerMode: true,
					centerPadding: '0px',
				},
			},
		],
	}
}

function getFocusableElements(container) {
	if (!container) return [];

	return Array.from(
		container.querySelectorAll(
			"summary, a[href], button:enabled, [tabindex]:not([tabindex^='-']), [draggable], area, input:not([type=hidden]):enabled, select:enabled, textarea:enabled, object, iframe"
		)
	);
}


document.querySelectorAll('[id^="Details-"] summary').forEach((summary) => {
	summary.setAttribute('role', 'button')
	summary.setAttribute('aria-expanded', 'false')

	if (summary.nextElementSibling.getAttribute('id')) {
		summary.setAttribute('aria-controls', summary.nextElementSibling.id)
	}

	summary.addEventListener('click', (event) => {
		event.currentTarget.setAttribute(
			'aria-expanded',
			!event.currentTarget.closest('details').hasAttribute('open'),
		)
	})

	if (summary.closest('header-drawer')) return
	summary.parentElement.addEventListener('keyup', onKeyUpEscape)
})

function onKeyUpEscape(event) {
	if (event.code.toUpperCase() !== 'ESCAPE') return

	const openDetailsElement = event.target.closest('details[open]')
	if (!openDetailsElement) return

	const summaryElement = openDetailsElement.querySelector('summary')
	openDetailsElement.removeAttribute('open')
	summaryElement.setAttribute('aria-expanded', false)
	summaryElement.focus()
}

const trapFocusHandlers = {}

function trapFocus(container, elementToFocus = container) {
	var elements = getFocusableElements(container)
	var first = elements[0]
	var last = elements[elements.length - 1]

	removeTrapFocus()

	trapFocusHandlers.focusin = (event) => {
		if (event.target !== container && event.target !== last && event.target !== first) return

		document.addEventListener('keydown', trapFocusHandlers.keydown)
	}

	trapFocusHandlers.focusout = function () {
		document.removeEventListener('keydown', trapFocusHandlers.keydown)
	}

	trapFocusHandlers.keydown = function (event) {
		if (event.code.toUpperCase() !== 'TAB') return // If not TAB key
		// On the last focusable element and tab forward, focus the first element.
		if (event.target === last && !event.shiftKey) {
			event.preventDefault()
			first.focus()
		}

		//  On the first focusable element and tab backward, focus the last element.
		if ((event.target === container || event.target === first) && event.shiftKey) {
			event.preventDefault()
			last.focus()
		}
	}

	document.addEventListener('focusout', trapFocusHandlers.focusout)
	document.addEventListener('focusin', trapFocusHandlers.focusin)

	elementToFocus.focus()
}

function pauseAllMedia() {
	document.querySelectorAll('.js-youtube').forEach((video) => {
		video.contentWindow.postMessage(
			'{"event":"command","func":"' + 'pauseVideo' + '","args":""}',
			'*',
		)
	})
	document.querySelectorAll('.js-vimeo').forEach((video) => {
		video.contentWindow.postMessage('{"method":"pause"}', '*')
	})
	document.querySelectorAll('video').forEach((video) => video.pause())
	document.querySelectorAll('product-model').forEach((model) => {
		if (model.modelViewerUI) model.modelViewerUI.pause()
	})
}

function removeTrapFocus(elementToFocus = null) {
	document.removeEventListener('focusin', trapFocusHandlers.focusin)
	document.removeEventListener('focusout', trapFocusHandlers.focusout)
	document.removeEventListener('keydown', trapFocusHandlers.keydown)

	if (elementToFocus) elementToFocus.focus()
}

class QuantityInput extends HTMLElement {
	constructor() {
		super()
		this.input = this.querySelector('input')
		this.changeEvent = new Event('change', { bubbles: true })

		this.querySelectorAll('button').forEach((button) =>
			button.addEventListener('click', this.onButtonClick.bind(this)),
		)

		var eventList = ['paste', 'input']

		for (event of eventList) {
			this.input.addEventListener(event, function (e) {
				const numberRegex = /^0*?[1-9]\d*$/

				if (numberRegex.test(e.currentTarget.value) || e.currentTarget.value === '') {
					e.currentTarget.value
				} else {
					e.currentTarget.value = 1
				}
			})
		}

		this.input.addEventListener('focusout', function (e) {
			if (e.currentTarget.value === '') {
				e.currentTarget.value = 1
			}
		})
	}

	onButtonClick(event) {
		event.preventDefault()
		const previousValue = this.input.value

		event.target.name === 'plus' ? this.input.stepUp() : this.input.stepDown()
		if (previousValue !== this.input.value) this.input.dispatchEvent(this.changeEvent)
	}
}

customElements.define('quantity-input', QuantityInput)

function debounce(fn, wait) {
	let t
	return (...args) => {
		clearTimeout(t)
		t = setTimeout(() => fn.apply(this, args), wait)
	}
}

const serializeForm = (form) => {
	const obj = {}
	const formData = new FormData(form)
	for (const key of formData.keys()) {
		obj[key] = formData.get(key)
	}
	return JSON.stringify(obj)
}

function fetchConfig(type = 'json') {
	return {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: `application/${type}`,
		},
	}
}

/*
 * Shopify Common JS
 *
 */
if (typeof window.Shopify == 'undefined') {
	window.Shopify = {}
}

Shopify.bind = function (fn, scope) {
	return function () {
		return fn.apply(scope, arguments)
	}
}

Shopify.setSelectorByValue = function (selector, value) {
	for (var i = 0, count = selector.options.length; i < count; i++) {
		var option = selector.options[i]
		if (value == option.value || value == option.innerHTML) {
			selector.selectedIndex = i
			return i
		}
	}
}

Shopify.addListener = function (target, eventName, callback) {
	target.addEventListener
		? target.addEventListener(eventName, callback, false)
		: target.attachEvent('on' + eventName, callback)
}

Shopify.postLink = function (path, options) {
	options = options || {}
	var method = options['method'] || 'post'
	var params = options['parameters'] || {}

	var form = document.createElement('form')
	form.setAttribute('method', method)
	form.setAttribute('action', path)

	for (var key in params) {
		var hiddenField = document.createElement('input')
		hiddenField.setAttribute('type', 'hidden')
		hiddenField.setAttribute('name', key)
		hiddenField.setAttribute('value', params[key])
		form.appendChild(hiddenField)
	}
	document.body.appendChild(form)
	form.submit()
	document.body.removeChild(form)
}

Shopify.CountryProvinceSelector = function (country_domid, province_domid, options) {
	this.countryEl = document.getElementById(country_domid)
	this.provinceEl = document.getElementById(province_domid)
	this.provinceContainer = document.getElementById(options['hideElement'] || province_domid)

	Shopify.addListener(this.countryEl, 'change', Shopify.bind(this.countryHandler, this))

	this.initCountry()
	this.initProvince()
}

Shopify.CountryProvinceSelector.prototype = {
	initCountry: function () {
		var value = this.countryEl.getAttribute('data-default')
		Shopify.setSelectorByValue(this.countryEl, value)
		this.countryHandler()
	},

	initProvince: function () {
		var value = this.provinceEl.getAttribute('data-default')
		if (value && this.provinceEl.options.length > 0) {
			Shopify.setSelectorByValue(this.provinceEl, value)
		}
	},

	countryHandler: function (e) {
		var opt = this.countryEl.options[this.countryEl.selectedIndex]
		var raw = opt.getAttribute('data-provinces')
		var provinces = JSON.parse(raw)

		this.clearOptions(this.provinceEl)
		if (provinces && provinces.length == 0) {
			this.provinceContainer.style.display = 'none'
		} else {
			for (var i = 0; i < provinces.length; i++) {
				var opt = document.createElement('option')
				opt.value = provinces[i][0]
				opt.innerHTML = provinces[i][1]
				this.provinceEl.appendChild(opt)
			}

			this.provinceContainer.style.display = ''
		}
	},

	clearOptions: function (selector) {
		while (selector.firstChild) {
			selector.removeChild(selector.firstChild)
		}
	},

	setOptions: function (selector, values) {
		for (var i = 0, count = values.length; i < values.length; i++) {
			var opt = document.createElement('option')
			opt.value = values[i]
			opt.innerHTML = values[i]
			selector.appendChild(opt)
		}
	},
}

class MenuDrawer extends HTMLElement {
	constructor() {
		super()

		this.mainDetailsToggle = this.querySelector('details')
		const summaryElements = this.querySelectorAll('summary')
		this.addAccessibilityAttributes(summaryElements)

		if (navigator.platform === 'iPhone')
			document.documentElement.style.setProperty('--viewport-height', `${window.innerHeight}px`)

		this.addEventListener('keyup', this.onKeyUp.bind(this))
		this.addEventListener('focusout', this.onFocusOut.bind(this))
		this.bindEvents()
	}

	bindEvents() {
		this.querySelectorAll('summary').forEach((summary) =>
			summary.addEventListener('click', this.onSummaryClick.bind(this)),
		)
		this.querySelectorAll('button').forEach((button) => {
			if (this.querySelector('.header__localization-button') === button) return
			if (this.querySelector('.header__localization-lang-button') === button) return
			button.addEventListener('click', this.onCloseButtonClick.bind(this))
		})
	}

	addAccessibilityAttributes(summaryElements) {
		summaryElements.forEach((element) => {
			element.setAttribute('role', 'button')
			element.setAttribute('aria-expanded', false)
			element.setAttribute('aria-controls', element.nextElementSibling.id)
		})
	}

	onKeyUp(event) {
		if (event.code.toUpperCase() !== 'ESCAPE') return

		const openDetailsElement = event.target.closest('details[open]')
		if (!openDetailsElement) return

		openDetailsElement === this.mainDetailsToggle
			? this.closeMenuDrawer(this.mainDetailsToggle.querySelector('summary'))
			: this.closeSubmenu(openDetailsElement)
	}

	onSummaryClick(event) {
		const summaryElement = event.currentTarget
		const detailsElement = summaryElement.parentNode
		const isOpen = detailsElement.hasAttribute('open')

		if (detailsElement === this.mainDetailsToggle) {
			if (isOpen) event.preventDefault()
			isOpen ? this.closeMenuDrawer(summaryElement) : this.openMenuDrawer(summaryElement)
		} else {
			trapFocus(summaryElement.nextElementSibling, detailsElement.querySelector('button'))

			setTimeout(() => {
				detailsElement.classList.add('menu-opening')
			})
		}
	}

	openMenuDrawer(summaryElement) {
		setTimeout(() => {
			this.mainDetailsToggle.classList.add('menu-opening')
		})
		summaryElement.setAttribute('aria-expanded', true)
		trapFocus(this.mainDetailsToggle, summaryElement)
		document.body.classList.add(`overflow-hidden-${this.dataset.breakpoint}`)
	}

	closeMenuDrawer(event, elementToFocus = false) {
		if (event !== undefined) {
			this.mainDetailsToggle.classList.remove('menu-opening')
			this.mainDetailsToggle.querySelectorAll('details').forEach((details) => {
				details.removeAttribute('open')
				details.classList.remove('menu-opening')
			})
			this.mainDetailsToggle.querySelector('summary').setAttribute('aria-expanded', false)
			document.body.classList.remove(`overflow-hidden-${this.dataset.breakpoint}`)
			removeTrapFocus(elementToFocus)
			this.closeAnimation(this.mainDetailsToggle)
		}
	}

	onFocusOut(event) {
		setTimeout(() => {
			if (
				this.mainDetailsToggle.hasAttribute('open') &&
				!this.mainDetailsToggle.contains(document.activeElement)
			)
				this.closeMenuDrawer()
		})
	}

	onCloseButtonClick(event) {
		const detailsElement = event.currentTarget.closest('details')
		this.closeSubmenu(detailsElement)
	}

	closeSubmenu(detailsElement) {
		detailsElement.classList.remove('menu-opening')
		removeTrapFocus()
		this.closeAnimation(detailsElement)
	}

	closeAnimation(detailsElement) {
		let animationStart

		const handleAnimation = (time) => {
			if (animationStart === undefined) {
				animationStart = time
			}

			const elapsedTime = time - animationStart

			if (elapsedTime < 400) {
				window.requestAnimationFrame(handleAnimation)
			} else {
				detailsElement.removeAttribute('open')
				if (detailsElement.closest('details[open]')) {
					trapFocus(
						detailsElement.closest('details[open]'),
						detailsElement.querySelector('summary'),
					)
				}
			}
		}

		window.requestAnimationFrame(handleAnimation)
	}
}

customElements.define('menu-drawer', MenuDrawer)

class HeaderDrawer extends MenuDrawer {
	constructor() {
		super()
	}

	openMenuDrawer(summaryElement) {
		this.header = this.header || document.querySelector('.shopify-section-header')
		this.borderOffset =
			this.borderOffset ||
			this.closest('.header-wrapper').classList.contains('header-wrapper--border-bottom')
				? 1
				: 0
		document.documentElement.style.setProperty(
			'--header-bottom-position',
			`${parseInt(this.header.getBoundingClientRect().bottom - this.borderOffset)}px`,
		)

		setTimeout(() => {
			this.mainDetailsToggle.classList.add('menu-opening');
			this.header.classList.remove('shopify-section-header-hidden');
			this.header.classList.remove('animate');
		})

		summaryElement.setAttribute('aria-expanded', true)
		trapFocus(this.mainDetailsToggle, summaryElement)
		document.body.classList.add(`overflow-hidden-${this.dataset.breakpoint}`)
	}
}

customElements.define('header-drawer', HeaderDrawer)

class ModalDialog extends HTMLElement {
	constructor() {
		super()
		this.querySelector('[id^="ModalClose-"]').addEventListener('click', this.hide.bind(this))
		this.addEventListener('click', (event) => {
			if (event.target.nodeName === 'MODAL-DIALOG') this.hide()
		})
		this.addEventListener('keyup', (event) => {
			if (event.code.toUpperCase() === 'ESCAPE') this.hide()
		})
	}

	show(opener) {
		this.openedBy = opener
		document.body.classList.add('overflow-hidden')
		this.setAttribute('open', '')
		this.querySelector('.template-popup')?.loadContent()
		trapFocus(this, this.querySelector('[role="dialog"]'))
	}

	hide() {
		document.body.classList.remove('overflow-hidden')
		this.removeAttribute('open')
		removeTrapFocus(this.openedBy)
		window.pauseAllMedia()
	}
}

customElements.define('modal-dialog', ModalDialog)

class ModalOpener extends HTMLElement {
	constructor() {
		super()

		const button = this.querySelector('button')
		button?.addEventListener('click', () => {
			document.querySelector(this.getAttribute('data-modal'))?.show(button)
		})
	}
}

customElements.define('modal-opener', ModalOpener)

class DeferredMedia extends HTMLElement {
	constructor() {
		super()
		this.querySelector('[id^="Deferred-Poster-"]')?.addEventListener(
			'click',
			this.loadContent.bind(this),
		)
		if (this.getAttribute('data-autoplay')) {
			this.loadContent()
		}
	}

	loadContent() {
		if (!this.getAttribute('loaded')) {
			const content = document.createElement('div')
			content.appendChild(this.querySelector('template').content.firstElementChild.cloneNode(true))

			this.setAttribute('loaded', true)
			window.pauseAllMedia()
			/*this.appendChild(
				content.querySelector("video, model-viewer, iframe"),
			).focus();*/

			const videoObserver = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						if (this.getAttribute('data-autoplay')) {
							let playPromise = entry.target.play()
							if (playPromise !== undefined) {
								playPromise.then((_) => {}).catch((error) => {})
							}
							//entry.target.play()
						}
					} else {
						entry.target.pause()
					}
				})
			})

			const deferredElement = this.appendChild(content.querySelector('video, model-viewer, iframe'))

			if (deferredElement.nodeName == 'VIDEO' || deferredElement.nodeName == 'IFRAME') {
				// force autoplay for safari

				if (this.classList.contains('video-section__media')) {
					let playPromise = deferredElement.play()
					if (playPromise !== undefined) {
						playPromise.then((_) => {}).catch((error) => {})
					}

					videoObserver.observe(deferredElement)
				} else {
					deferredElement.play()
				}
			}
		}
	}
}

customElements.define('deferred-media', DeferredMedia)

class SliderComponent extends HTMLElement {
	constructor() {
		super()
		this.slider = this.querySelector('.slider')
		this.sliderItems = this.querySelectorAll('.slider__slide')
		this.pageCount = this.querySelector('.slider-counter--current')
		this.pageTotal = this.querySelector('.slider-counter--total')
		this.prevButton = this.querySelector('button[name="previous"]')
		this.nextButton = this.querySelector('button[name="next"]')

		if (!this.slider || !this.nextButton) return

		const resizeObserver = new ResizeObserver((entries) => this.initPages())
		resizeObserver.observe(this.slider)

		this.slider.addEventListener('scroll', this.update.bind(this))
		this.prevButton.addEventListener('click', this.onButtonClick.bind(this))
		this.nextButton.addEventListener('click', this.onButtonClick.bind(this))
	}

	initPages() {
    const { slider, sliderItems } = this;

    if (!sliderItems?.length || !slider) return;

    const firstItem = sliderItems[0];
    if (!firstItem) return;

    this.slidesPerPage = Math.floor(slider.clientWidth / firstItem.clientWidth);
    this.totalPages = sliderItems.length - this.slidesPerPage + 1;
    this.update();
}

	update() {
		if (!this.pageCount || !this.pageTotal) return
		this.currentPage = Math.round(this.slider.scrollLeft / this.sliderItems[0].clientWidth) + 1

		if (this.currentPage === 1) {
			this.prevButton.setAttribute('disabled', true)
		} else {
			this.prevButton.removeAttribute('disabled')
		}

		if (this.currentPage === this.totalPages) {
			this.nextButton.setAttribute('disabled', true)
		} else {
			this.nextButton.removeAttribute('disabled')
		}

		this.pageCount.textContent = this.currentPage
		this.pageTotal.textContent = this.totalPages
	}

	onButtonClick(event) {
		event.preventDefault()
		const slideScrollPosition =
			event.currentTarget.name === 'next'
				? this.slider.scrollLeft + this.sliderItems[0].clientWidth
				: this.slider.scrollLeft - this.sliderItems[0].clientWidth
		this.slider.scrollTo({
			left: slideScrollPosition,
		})
	}
}

customElements.define('slider-component', SliderComponent)

class VariantSelects extends HTMLElement {
	constructor() {
		super()
		this.addEventListener('change', this.onVariantChange)
	}

	onVariantChange() {
		this.updateOptions()
		this.updateMasterId()
		this.toggleAddButton(true, '', false)
		this.updatePickupAvailability()
		this.updateVariantStatuses()

		if (!this.currentVariant) {
			this.toggleAddButton(true, '', true)
			this.setUnavailable()
		} else {
			if (
				this.currentVariant?.featured_media &&
				this.dataset?.variantMediaDisplay === 'show_all'
			) {
				this.updateMedia()
				this.updateMediaSub()

			}
			this.updateURL()
			this.updateVariantInput()
			this.renderProductInfo()
		}

		if (this.currentVariant) {
			document.dispatchEvent(
				new CustomEvent('variant:change', {
					detail: {
						variant: this.currentVariant,
						previousVariant: this.previousVariant || null,
						formElement: document.querySelector(
							`#${this.getAttribute('id')}`
						),
						sectionId: this.dataset.section,
					},
				})
			)

			// Save the previous version
			this.previousVariant = this.currentVariant
		}
	}

	updateOptions() {
		const fieldsets = Array.from(this.querySelectorAll('.js-radio-colors'))

		this.options = Array.from(this.querySelectorAll('select'), (select) => select.value).concat(
			fieldsets.map((fieldset) => {
				return Array.from(fieldset.querySelectorAll('input')).find((radio) => radio.checked).value
			}),
		)
	}

	updateMasterId() {
		if (this.variantData || this.querySelector('[type="application/json"]')) {
			this.currentVariant = this.getVariantData().find((variant) => {
				this.options.sort()
				variant.options.sort()

				return !variant.options
					.map((option, index) => {
						return this.options[index] === option
					})
					.includes(false)
			})
		}
	}

	updateMedia() {
		if (!this.currentVariant || !this.currentVariant?.featured_media) return

		const newMedia = document.querySelector(
			`[data-media-id="${this.dataset.section}-${this.currentVariant.featured_media.id}"]`,
		)

		$('.product__media-list').slick('unslick')

		if (!newMedia) return

		const parent = newMedia.parentElement

		parent.prepend(newMedia)

		window.setTimeout(() => {
			parent.scroll(0, 0)
		})

		$('.product__media-list').slick(getSliderSettings())
		$('.product__media-list').on('afterChange', function (event, slick, currentSlide, nextSlide) {
			window.pauseAllMedia()
		})
	}

	updateMediaSub() {
		if (!this.currentVariant || !this.currentVariant?.featured_media) return

		const newMediaSub = document.querySelector(
			`[data-media-sub-id="${this.dataset.section}-${this.currentVariant.featured_media.id}"]`,
		)

		$('.product__media-sublist').slick('unslick')

		if (!newMediaSub) return

		const parentSub = newMediaSub.parentElement

		parentSub.prepend(newMediaSub)

		window.setTimeout(() => {
			parentSub.scroll(0, 0)
		})

		$('.product__media-sublist').slick(getSubSliderProductSettings())
	}

	updateURL() {
		if (
			!this.classList.contains('variant-selects--quick-view') &&
			!this.classList.contains('featured-product-radios')
		) {
			if (!this.currentVariant) return
			window.history.replaceState({}, '', `${this.dataset.url}?variant=${this.currentVariant.id}`)

			if (document.querySelector('.custom-request-form #ContactForm-ProductUrl')) {
				document.querySelector('.custom-request-form #ContactForm-ProductUrl').value =
					document.location.href
			}
		}
	}

	updateVariantInput() {
		const productForms = document.querySelectorAll(
			`#product-form-${this.dataset.section}, #product-form-installment`,
		)
		productForms.forEach((productForm) => {
			const input = productForm.querySelector('input[name="id"]')
			input.value = this.currentVariant.id
			input.dispatchEvent(new Event('change', { bubbles: true }))
		})
	}

	updateVariantStatuses() {
		const selectedOptionOneVariants = this.variantData.filter(
			(variant) => this.querySelector(':checked').value === variant.option1,
		)
		const inputWrappers = [...this.querySelectorAll('.product-form__input')]
		inputWrappers.forEach((option, index) => {
			if (index === 0) return
			const optionInputs = [...option.querySelectorAll('input[type="radio"], option')]
			const previousOptionSelected = inputWrappers[index - 1].querySelector(':checked').value
			const availableOptionInputsValue = selectedOptionOneVariants
				.filter(
					(variant) => variant.available && variant[`option${index}`] === previousOptionSelected,
				)
				.map((variantOption) => variantOption[`option${index + 1}`])
			this.setInputAvailability(optionInputs, availableOptionInputsValue)
		})
	}

	setInputAvailability(listOfOptions, listOfAvailableOptions) {
		listOfOptions.forEach((input) => {
			if (listOfAvailableOptions.includes(input.getAttribute('value'))) {
				if (input.tagName === 'OPTION') {
					input.innerText = input.getAttribute('value')
				} else if (input.tagName === 'INPUT') {
					input.classList.remove('disabled')
				}
			} else {
				if (input.tagName === 'OPTION') {
					input.innerText = window.variantStrings.unavailable_with_option.replace(
						'[value]',
						input.getAttribute('value'),
					)
				} else if (input.tagName === 'INPUT') {
					input.classList.add('disabled')
				}
			}
		})
	}

	updatePickupAvailability() {
		const pickUpAvailability = document.querySelector('pickup-availability')
		if (!pickUpAvailability) return

		if (this.currentVariant?.available) {
			pickUpAvailability.fetchAvailability(this.currentVariant.id)
		} else {
			pickUpAvailability.removeAttribute('available')
			pickUpAvailability.innerHTML = ''
		}
	}

	renderProductInfo() {
		fetch(
			`${this.dataset.url}?variant=${this.currentVariant.id}&section_id=${this.dataset.section}`,
		)
			.then((response) => response.text())
			.then((responseText) => {
				const id = `price-${this.dataset.section}`
				const html = new DOMParser().parseFromString(responseText, 'text/html')
				const destination = document.getElementById(id)
				const source = html.getElementById(id)

				if (source && destination) destination.innerHTML = source.innerHTML

				document
					.getElementById(`price-${this.dataset.section}`)
					?.classList.remove('visibility-hidden')

				const skuSource = html.getElementById(
					`Sku-${
						this.dataset.originalSection
							? this.dataset.originalSection
							: this.dataset.section
					}`
				)
				const skuDestination = document.getElementById(
					`Sku-${this.dataset.section}`
				)

				const inventorySource = html.getElementById(
					`Inventory-${
						this.dataset.originalSection
							? this.dataset.originalSection
							: this.dataset.section
					}`
				)
				const inventoryDestination = document.getElementById(
					`Inventory-${this.dataset.section}`
				)

				if (source && destination) destination.innerHTML = source.innerHTML
				if (inventorySource && inventoryDestination)
					inventoryDestination.innerHTML = inventorySource.innerHTML

				if (skuSource && skuDestination) {
					skuDestination.innerHTML = skuSource.innerHTML
					skuDestination.classList.toggle(
						'visibility-hidden',
						skuSource.classList.contains('visibility-hidden')
					)
				}

				if (document.querySelector('.custom-request-form')) {
					if (
						document.querySelector(
							'.custom-request-form #ContactForm-ProductSKU'
						) &&
						skuSource
					) {
						document.querySelector(
							'.custom-request-form #ContactForm-ProductSKU'
						).value = skuSource.innerText.trim()
					} else if (
						document.querySelector(
							'.custom-request-form #ContactForm-ProductSKU'
						)
					) {
						document.querySelector(
							'.custom-request-form #ContactForm-ProductSKU'
						).value = ''
					}
					if (
						document.querySelector(
							'.custom-request-form #ContactForm-ProductInventory'
						) &&
						inventorySource
					) {
						document.querySelector(
							'.custom-request-form #ContactForm-ProductInventory'
						).value = inventorySource.innerText.trim()
					} else if (
						document.querySelector(
							'.custom-request-form #ContactForm-ProductInventory'
						)
					) {
						document.querySelector(
							'.custom-request-form #ContactForm-ProductInventory'
						).value = ''
					}
				}

				const price = document.getElementById(`price-${this.dataset.section}`)

				if (price) price.classList.remove('visibility-hidden')

				if (inventoryDestination)
					inventoryDestination.classList.toggle(
						'visibility-hidden',
						inventorySource.innerText === ''
					)

				this.toggleAddButton(
					!this.currentVariant.available,
					window.variantStrings.soldOut
				)

				// product media
				if (this.dataset?.variantMediaDisplay !== 'show_all') {
					const sourceSectionId = this.dataset.originalSection
						? this.dataset.originalSection
						: this.dataset.section
					const currentSectionId = this.dataset.section

					const mediaSource = html.querySelector(
						`[data-section="product-media-${sourceSectionId}"]`
					)
					const mediaDestination = document.querySelector(
						`[data-section="product-media-${currentSectionId}"]`
					)

					if (mediaSource && mediaDestination) {
						mediaDestination.innerHTML = mediaSource.innerHTML

						const parentQuickView = this.closest('#quick-view')
						if (parentQuickView) {
							if (typeof parentQuickView.quickView === 'function') {
								parentQuickView.quickView()
							}
						} else {
							const section = document.getElementById(
								`shopify-section-${currentSectionId}`
							)

							if (section && typeof initProductPage === 'function') {
								initProductPage(section)
							}
						}

						$('.product__media-list').slick('unslick');

						if (document.querySelector('.product__media-list')) {
							$('.product__media-list').slick(getSliderSettings())
						}
					}
				}
			})
	}

	toggleAddButton(disable = true, text, modifyClass = true) {
		const addButton = document
			.getElementById(`product-form-${this.dataset.section}`)
			?.querySelector('[name="add"]')

		if (!addButton) return

		if (disable) {
			addButton.setAttribute('disabled', true)
			if (text) addButton.textContent = text
		} else {
			addButton.removeAttribute('disabled')
			addButton.textContent = window.variantStrings.addToCart
		}

		if (!modifyClass) return
	}

	setUnavailable() {
		const addButton = document
			.getElementById(`product-form-${this.dataset.section}`)
			?.querySelector('[name="add"]')
		if (!addButton) return
		addButton.textContent = window.variantStrings.unavailable
		document.getElementById(`price-${this.dataset.section}`)?.classList.add('visibility-hidden')
		const inventory = document.getElementById(`Inventory-${this.dataset.section}`)
		if (inventory) inventory.classList.add('visibility-hidden')
	}

	getVariantData() {
		this.variantData =
			this.variantData || JSON.parse(this.querySelector('[type="application/json"]').textContent)
		return this.variantData
	}
}

customElements.define('variant-selects', VariantSelects)

class VariantRadios extends VariantSelects {
	constructor() {
		super()
	}

	setInputAvailability(listOfOptions, listOfAvailableOptions) {
		listOfOptions.forEach((input) => {
			if (listOfAvailableOptions.includes(input.getAttribute('value'))) {
				input.classList.remove('disabled')
			} else {
				input.classList.add('disabled')
			}
		})
	}

	updateOptions() {
		const fieldsets = Array.from(this.querySelectorAll('fieldset'))
		this.options = fieldsets.map((fieldset) => {
			return Array.from(fieldset.querySelectorAll('input')).find((radio) => radio.checked).value
		})
	}
}

customElements.define('variant-radios', VariantRadios)
;(function () {
	const header = () => {
		const submenuDetails = document.querySelectorAll('.header__submenu li details')
		const mainHeader = document.querySelector('.shopify-section-header')

		submenuDetails.forEach((targetDetail) => {
			targetDetail.addEventListener('click', () => {
				submenuDetails.forEach((detail) => {
					if (detail !== targetDetail) {
						detail.removeAttribute('open')
					}
				})
			})
		})

		initMegaSubmenu(mainHeader);
	}

	const initMegaSubmenu = (header) => {
		const megaSubmenuLinks = header.querySelectorAll('.list-menu--megasubmenu')
		if (!megaSubmenuLinks || !megaSubmenuLinks.length) return
		megaSubmenuLinks.forEach((link) => {
			const tabs = link.querySelectorAll('.mega-submenu__tab')
			const submenus = link.querySelectorAll('.mega-submenu__submenu')
			const onToggle = (event) => {
				const tab = event.target
				if (!tab || !tab.classList.contains('mega-submenu__tab')) return
				const tabId = tab.dataset.tabId
				tabs.forEach((tab) => {
					tab.classList.remove('active')
				})
				tab.classList.add('active')
				submenus.forEach((submenu) => {
					submenu.classList.remove('active')
					if (submenu.dataset.tabId === tabId) {
						submenu.classList.add('active')
					}
				})
			}
			tabs.forEach((tab) => {
				tab.addEventListener('click', onToggle)
				tab.addEventListener('mouseenter', onToggle)
			})
		})
	}

	document.addEventListener('shopify:section:load', header)

	header()
})()

class ProductRecommendations extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback() {
		const handleIntersection = (entries, observer) => {
			if (!entries[0].isIntersecting) return
			observer.unobserve(this)

			fetch(this.dataset.url)
				.then((response) => response.text())
				.then((text) => {
					const html = document.createElement('div')
					html.innerHTML = text
					const recommendations = html.querySelector('product-recommendations')

					if (recommendations && recommendations.innerHTML.trim().length) {
						this.innerHTML = recommendations.innerHTML
					}

					if (
						!this.querySelector('slideshow-component') &&
						this.classList.contains('complementary-products')
					) {
						this.remove()
					}

					if (html.querySelector('.grid__item')) {
						this.classList.add('product-recommendations--loaded')
					}
				})
				.catch((e) => {
					console.error(e)
				})
		}

		new IntersectionObserver(handleIntersection.bind(this), {
			rootMargin: '0px 0px 400px 0px',
		}).observe(this)
	}
}

customElements.define('product-recommendations', ProductRecommendations)

window.onload = function () {
	const coolimageScript = document.querySelectorAll('script[src*="cool-image-magnifier"]')
	let coolimageGallery = document.querySelector('.product__media-wrapper')

	if (coolimageScript.length > 0 && coolimageGallery) {
		coolimageGallery.classList.add('cool-image-custom')
	}
}

// CART REFRESH EVENT
// -----------------------------------------------------------------------------

document.documentElement.addEventListener('cart:refresh', () => {
	const sectionsToUpdate = [
		{id: 'cart-icon-bubble', selector: '#cart-icon-bubble'},
		{id: 'CartDrawer', selector: '#CartDrawer'},
		{id: 'main-cart-items', selector: '#main-cart-items .js-contents'},
		{id: 'main-cart-footer', selector: '#main-cart-footer .js-contents'},
		{id: 'cart-live-region-text', selector: '#cart-live-region-text'},
	]

	sectionsToUpdate.forEach((section) => {
		fetch(`${routes.cart_url}?section_id=${section.id}`)
			.then((response) => response.text())
			.then((html) => {
				const parsed = new DOMParser().parseFromString(html, 'text/html')
				const sourceEl = parsed.querySelector(section.selector)
				const destEl = document.querySelector(section.selector)
				if (sourceEl && destEl) {
					destEl.innerHTML = sourceEl.innerHTML
				}
			})
			.catch((err) => console.error('cart:refresh error for', section.id, err))
	})
})


// CART REFRESH EVENT END
// -----------------------------------------------------------------------------