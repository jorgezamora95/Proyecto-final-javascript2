const icons = new URL('../../img/icons.svg', import.meta.url).href;
class View {

    _data;

    render(data) {
        if (!data || (Array.isArray(data) && data.length === 0))
            return this.renderError();

        this._data = data;
        const markup = this._generateMarkup();
        this._clean();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);

    }

    renderSpinner() {
        const markup = `
      <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>
    `;
        this._parentElement.innerHTML = '';
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    _clean() {
        this._parentElement.innerHTML = '';

    }
    renderError(message = this._errorMessage) {
        const _errorMessage = 'We could not find that recipe. Please try another one!';
        const markup = `
        <div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>
        `
        this._clean();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    renderMessage(message = this._message) {
        const _message = 'Find your recipe!';
        const markup = `
        <div class="message">
            <div>
              <svg>
                <use href="${icons}#icon-smile"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>
        `
        this._clean();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

}

export default View;