import Popup from './Popup.js';

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);

    this._form = this._popup.querySelector('.popup__form');
    this._submitCallback = submitCallback;
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();

      this._submitCallback({
        id: this.id,
        element: this.element
      });
    });
  }

  open({id, element}) {
    super.open();
    this.id = id;
    this.element = element;
  }
};
