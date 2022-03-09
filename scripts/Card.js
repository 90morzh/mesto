import {openPicturePopup, removeCard, handleLike} from '../pages/index.js';

export class Card {
    constructor(data, templateSelector) {
      this._templateSelector = templateSelector;
      this._name = data.name;
      this._link = data.link;
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
      this._photo.addEventListener('click', (evt) => {
        openPicturePopup(evt);
      });
      this._deleteButton.addEventListener('click', (evt) => {
        removeCard(evt);
      });
      this._likeButton.addEventListener('click', (evt) => {
        handleLike(evt);
      });
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
