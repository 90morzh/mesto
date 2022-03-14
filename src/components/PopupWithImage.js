import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._image = this._popup.querySelector('.popup__img');
    this._subtitle = this._popup.querySelector('.popup__subtitle');
  }

  open({place, link}) {
    this._image.src = link;
    this._image.alt = place;
    this._subtitle.textContent = place;

    super.open();
  }
};
