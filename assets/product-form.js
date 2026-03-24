if (!customElements.get('product-form')) {
  customElements.define('product-form', class ProductForm extends HTMLElement {
    constructor() {
      super();

      this.form = this.querySelector('form');
      this.form.querySelector('[name=id]').disabled = false;
      this.form.addEventListener('submit', this.onSubmitHandler.bind(this));
      this.cartNotification = document.querySelector('cart-drawer');

      this.hideErrors = this.dataset.hideErrors === 'true';
    }

    onSubmitHandler(evt) {
      evt.preventDefault();
      const submitButton = this.querySelector('[type="submit"]');
      if (submitButton.classList.contains('loading')) return;

      this.handleErrorMessage();
      if (this.cartNotification)
        this.cartNotification.setActiveElement(document.activeElement);

      submitButton.setAttribute('aria-disabled', true);
      submitButton.classList.add('loading');

      const config = fetchConfig('javascript');
      config.headers['X-Requested-With'] = 'XMLHttpRequest';
      delete config.headers['Content-Type'];

      const formData = new FormData(this.form);
      if (this.cartNotification)
        formData.append('sections', this.cartNotification.getSectionsToRender().map((section) => section.id));
      formData.append('sections_url', window.location.pathname);
      config.body = formData;

      fetch(`${routes.cart_add_url}`, config)
        .then((response) => response.json())
        .then((response) => {
					$(document).trigger('product-form-responsed', [response])

					if (response.status) {
						publish(PUB_SUB_EVENTS.cartError, {
							source: 'product-form',
							productVariantId: formData.get('id'),
							errors: response.description,
							message: response.message,
						})
						this.handleErrorMessage(response.description)

						// --- dispatch variant:error ---
						document.dispatchEvent(
							new CustomEvent('cart:error', {
								detail: {
									sectionId: this.dataset.source,
									productVariantId: formData.get("id"),
									errors: response.description,
									message: response.message,
								},
							})
						)
						// --- dispatch variant:error ---

						return
					}

					// --- dispatch variant:add ---
					document.dispatchEvent(
						new CustomEvent('variant:add', {
							detail: {
								variant: {
									id: formData.get("id"),
								},
								quantity: Number(formData.get("quantity") || 1),
								formElement: this.form,
								sectionId: this.dataset.source,
							},
						})
					)
					// --- dispatch variant:add ---

          fetch(`${routes.cart_url}.js`)
						.then((response) => {
							return response.text()
						})
						.then((state) => {
							const parsedState = JSON.parse(state)

							// dispatch cart:change for the entire basket
							document.dispatchEvent(
								new CustomEvent('cart:change', {
									detail: {
										cart: parsedState,
										sectionId: this.dataset.source,
									},
								})
							)
							// dispatch cart:change for the entire basket

						})
						.catch((error) => {
							console.error('Error fetching cart state:', error);
						})

					if (!this.error) {
						publish(PUB_SUB_EVENTS.cartUpdate, {
							source: 'product-form',
							productVariantId: formData.get('id'),
						})
					}

					if (this.cartNotification)
						this.cartNotification.renderContents(response)
				})
        .catch((e) => {
          console.error(e);
        })
        .finally(() => {
          submitButton.classList.remove('loading');
          submitButton.removeAttribute('aria-disabled');
        });
    }

    handleErrorMessage(errorMessage = false) {
      if (this.hideErrors) return;

      this.errorMessageWrapper = this.errorMessageWrapper || this.querySelector('.product-form__error-message-wrapper');
      this.errorMessage = this.errorMessage || this.errorMessageWrapper.querySelector('.product-form__error-message');

      this.errorMessageWrapper.toggleAttribute('hidden', !errorMessage);

      if (errorMessage) {
        this.errorMessage.textContent = errorMessage;
      }
    }
  });
}
