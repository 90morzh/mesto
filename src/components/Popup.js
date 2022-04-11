export default class Popup {
    constructor(popupSelector) {
      this._popup = document.querySelector(popupSelector);
    }
    
    _handleEscClose(evt) {
      if (evt.code === 'Escape') {
        this.close();
      }
    }

    setEventListeners() {
      this._popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup_active') || evt.target.classList.contains('popup__close-button')) {
          this.close();
        }
      })
    }

    open() {
      this._popup.classList.add('popup_active');
      document.addEventListener('keydown', this._handleEscClose.bind(this));
    }

    close() {
      this._popup.classList.remove('popup_active');
      document.removeEventListener('keydown', this._handleEscClose.bind(this));
    }
};
