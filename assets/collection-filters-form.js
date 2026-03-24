class CollectionFiltersForm extends HTMLElement {
	constructor() {
		super();
		this.filterData = [];
		this.onActiveFilterClick = this.onActiveFilterClick.bind(this);

		this.debouncedOnSubmit = debounce((event) => {
			this.onSubmitHandler(event);
		}, 500);

		this.querySelector('form').addEventListener('input', this.debouncedOnSubmit.bind(this));
		window.addEventListener('popstate', this.onHistoryChange.bind(this));
	}


	onSubmitHandler(event) {
		event.preventDefault();
		const formData = new FormData(event.target.closest('form'));
		const searchParams = new URLSearchParams(formData).toString();
		this.renderPage(searchParams, event);
	}

	onActiveFilterClick(event) {
		event.preventDefault();
		this.toggleActiveFacets();
		this.renderPage(new URL(event.currentTarget.href).searchParams.toString());
	}

	onHistoryChange(event) {
		const searchParams = event.state?.searchParams || '';
		this.renderPage(searchParams, null, false);
	}

	toggleActiveFacets(disable = true) {
		document.querySelectorAll('.js-facet-remove').forEach((element) => {
			element.classList.toggle('disabled', disable);
		});
	}

	renderPage(searchParams, event, updateURLHash = true) {
		const sections = this.getSections();
		document.getElementById('CollectionProductGrid').querySelector('.collection').classList.add('loading');

		sections.forEach((section) => {
			const url = `${window.location.pathname}?section_id=${section.section}&${searchParams}`;
			const filterDataUrl = element => element.url === url;

			this.filterData.some(filterDataUrl) ?
				this.renderSectionFromCache(filterDataUrl, event) :
				this.renderSectionFromFetch(url, event);
		});

		if (updateURLHash) this.updateURLHash(searchParams);
	}

	renderSectionFromFetch(url, event) {
		fetch(url)
			.then(response => response.text())
			.then((responseText) => {
				const html = responseText;
				this.filterData = [...this.filterData, {html, url}];
				this.renderFilters(html, event);
				this.renderProductGrid(html);
			});
	}

	renderSectionFromCache(filterDataUrl, event) {
		const html = this.filterData.find(filterDataUrl).html;
		this.renderFilters(html, event);
		this.renderProductGrid(html);
	}

	renderProductGrid(html) {
		const innerHTML = new DOMParser()
			.parseFromString(html, 'text/html')
			.getElementById('CollectionProductGrid').innerHTML;

		document.getElementById('CollectionProductGrid').innerHTML = innerHTML;

		quickView();
		if (document.querySelector('.js-load-more') || document.querySelector('.js-infinite-scroll')) 
			loadMore();
		try {
			colorSwatches();
		} 
		catch(err) {}
	}

	renderFilters(html, event) {
		const parsedHTML = new DOMParser().parseFromString(html, 'text/html');

		const facetDetailsElements =
			parsedHTML.querySelectorAll('#CollectionFiltersForm .js-filter, #CollectionFiltersFormMobile .js-filter');
		const matchesIndex = (element) => element.dataset.index === event?.target.closest('.js-filter')?.dataset.index
		const facetsToRender = Array.from(facetDetailsElements).filter(element => !matchesIndex(element));
		const countsToRender = Array.from(facetDetailsElements).find(matchesIndex);

		facetsToRender.forEach((element) => {
			document.querySelector(`.js-filter[data-index="${element.dataset.index}"]`).innerHTML = element.innerHTML;
		});

		this.renderActiveFacets(parsedHTML);
		this.renderAdditionalElements(parsedHTML);

		if (countsToRender) this.renderCounts(countsToRender, event.target.closest('.js-filter'));
	}

	renderActiveFacets(html) {
		const activeFacetElementSelectors = ['.active-facets-mobile', '.active-facets-desktop'];

		activeFacetElementSelectors.forEach((selector) => {
			const activeFacetsElement = html.querySelector(selector);
			if (!activeFacetsElement) return;
			document.querySelector(selector).innerHTML = activeFacetsElement.innerHTML;
		})

		this.toggleActiveFacets(false);
	}

	renderAdditionalElements(html) {
		const mobileElementSelectors = ['.mobile-facets__open', '.mobile-facets__count', '.sorting'];

		mobileElementSelectors.forEach((selector) => {
			if (!html.querySelector(selector)) return;
			document.querySelector(selector).innerHTML = html.querySelector(selector).innerHTML;
		});

		document.getElementById('CollectionFiltersFormMobile').closest('menu-drawer').bindEvents();
	}

	renderCounts(source, target) {
		const countElementSelectors = ['.count-bubble', '.facets__selected'];
		countElementSelectors.forEach((selector) => {
			const targetElement = target.querySelector(selector);
			const sourceElement = source.querySelector(selector);

			if (sourceElement && targetElement) {
				target.querySelector(selector).outerHTML = source.querySelector(selector).outerHTML;
			}
		});
	}

	updateURLHash(searchParams) {
		history.pushState({searchParams}, '', `${window.location.pathname}${searchParams && '?'.concat(searchParams)}`);
	}

	getSections() {
		return [
			{
				id: 'main-collection-product-grid',
				section: document.getElementById('main-collection-product-grid').dataset.id,
			}
		]
	}
}

customElements.define('collection-filters-form', CollectionFiltersForm);

class PriceRange extends HTMLElement {
	constructor() {
		super();
		this.querySelectorAll('input')
			.forEach(element => element.addEventListener('change', this.onRangeChange.bind(this)));

		this.setMinAndMaxValues();
		this.controlSlider();
    this.controlInput();
	}

	onRangeChange(event) {
		this.adjustToValidValues(event.currentTarget);
		this.setMinAndMaxValues();
	}

	setMinAndMaxValues() {
		const inputs = this.querySelectorAll('input');
		const minInput = inputs[0];
		const maxInput = inputs[1];
		if (maxInput.value) minInput.setAttribute('max', maxInput.value);
		if (minInput.value) maxInput.setAttribute('min', minInput.value);
		if (minInput.value === '') maxInput.setAttribute('min', 0);
		if (maxInput.value === '') minInput.setAttribute('max', maxInput.getAttribute('max'));
	}

	adjustToValidValues(input) {
		const value = Number(input.value);
		const min = Number(input.getAttribute('min'));
		const max = Number(input.getAttribute('max'));

		if (value < min) input.value = min;
		if (value > max) input.value = max;
	}

	fillSlider () {
    const inputRangeWrappers = document.querySelectorAll('.facets__price .facets__range');
    inputRangeWrappers.forEach(inputWrapper => {
      const inputsRange = inputWrapper.querySelectorAll('.field__range');
      const inputRangeFrom = inputsRange[0];
      const inputRangeTo = inputsRange[1];

      const range = inputRangeTo.max - inputRangeTo.min;
      const fromCurrent = inputRangeFrom.value - inputRangeTo.min;
      const toCurrent = inputRangeTo.value - inputRangeTo.min;
      const minRange = fromCurrent / range * 100;
      const maxRange = toCurrent / range * 100;

      inputWrapper.setAttribute(
        'style',
        `--range-min: ${minRange}%; --range-max: ${maxRange}%`
      );
    })
  }

	controlSlider () {
    const inputRangeWrappers = document.querySelectorAll('.facets__price .facets__range');
    const inputNumberWrappers = document.querySelectorAll('.facets__price .facets__price-wrapper');

    inputRangeWrappers.forEach((inputWrapper, index) => {
      const inputsRange = inputWrapper.querySelectorAll('.field__range');
      const inputRangeFrom = inputsRange[0];
      const inputRangeTo = inputsRange[1];
      const inputNumberFrom = inputNumberWrappers[index].querySelectorAll('.field__input')[0];
      const inputNumberTo = inputNumberWrappers[index].querySelectorAll('.field__input')[1];

      inputRangeFrom.oninput = () => {
        const from = parseInt(inputRangeFrom.value, 10);
        const to = parseInt(inputRangeTo.value, 10);
        if (from > to) {
          inputRangeFrom.value = to;
          inputNumberFrom.value = to;
        }
        else {
          inputNumberFrom.value = from;
        }

        this.fillSlider();
      }

      if (Number(inputRangeTo.value) <= 0 ) {
        inputRangeTo.style.zIndex = 2;
      } else {
        inputRangeTo.style.zIndex = 0;
      }

      inputRangeTo.oninput = () => {
        const from = parseInt(inputRangeFrom.value, 10);
        const to = parseInt(inputRangeTo.value, 10);
        if (from <= to) {
          inputRangeTo.value = to;
          inputNumberTo.value = to;
        }
        else {
          inputNumberTo.value = from;
          inputRangeTo.value = from;
        }

        if (Number(inputRangeTo.value) <= 0 ) {
          inputRangeTo.style.zIndex = 2;
        } else {
          inputRangeTo.style.zIndex = 0;
        }

        this.fillSlider();
      }
    })
  }

	controlInput() {
    const inputRangeWrappers = document.querySelectorAll('.facets__price .facets__range');
    const inputNumberWrappers = document.querySelectorAll('.facets__price .facets__price-wrapper');

    inputNumberWrappers.forEach((inputWrapper, index) => {
      const inputsNumber = inputWrapper.querySelectorAll('.field__input');
      const inputNumberFrom = inputsNumber[0];
      const inputNumberTo = inputsNumber[1];
      const inputRangeFrom = inputRangeWrappers[index].querySelectorAll('.field__range')[0];
      const inputRangeTo = inputRangeWrappers[index].querySelectorAll('.field__range')[1];

      inputNumberFrom.oninput = () => {
        const from = parseInt(inputNumberFrom.value, 10);
        const to = parseInt(inputNumberTo.value, 10);
        if (from > to) {
          inputRangeFrom.value = to;
          inputNumberFrom.value = to;
        } 
        else {
          inputRangeFrom.value = from;
        }

        this.fillSlider();
      }

      inputNumberTo.oninput = () => {
        const from = parseInt(inputNumberFrom.value, 10);
        const to = parseInt(inputNumberTo.value, 10);
        if (from <= to) {
          inputRangeTo.value = to;
          inputNumberTo.value = to;
        }
        else {
          inputNumberTo.value = from;
        }

        this.fillSlider();
      }

    })
  }
}

customElements.define('price-range', PriceRange);

class FacetRemove extends HTMLElement {
	constructor() {
		super();
		this.querySelector('a').addEventListener('click', (event) => {
			event.preventDefault();
			const form = this.closest('collection-filters-form') || document.querySelector('collection-filters-form');
			form.onActiveFilterClick(event);
		});
	}
}

customElements.define('facet-remove', FacetRemove);

