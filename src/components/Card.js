export default class Card {
    constructor({place, link}, templateSelector, openPicturePopup) {
      this._templateSelector = templateSelector;
      this._name = place;
      this._link = link;
      this._openPicturePopup = openPicturePopup;
    };

    _getTemplate() {
      const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.place')
      .cloneNode(true);

      return cardElement;
    }

    _setEventListeners() {
      this._photo.addEventListener('click', () => {
        this._openPicturePopup(this._name, this._link);
      });
      this._deleteButton.addEventListener('click', () => {
        this._removeCard();
      });
      this._likeButton.addEventListener('click', () => {
        this._handleLike();
      });
    }

    _removeCard() {
      this._element.remove();
    }

    _handleLike() {
      this._element
      .querySelector('.place__heart')
      .classList
      .toggle('place__heart_active');
    }

    createNewCard() {
      this._element = this._getTemplate();
      this._photo = this._element.querySelector('.place__img');
      this._title = this._element.querySelector('.place__title');
      this._deleteButton = this._element.querySelector('.place__delete');
      this._likeButton = this._element.querySelector('.place__heart');

      this._photo.setAttribute('src', this._link);
      this._photo.setAttribute('alt', this._name);
      this._title.textContent = this._name;

      this._setEventListeners();

      return this._element;
    }
};
