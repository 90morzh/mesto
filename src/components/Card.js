export default class Card {
    constructor({name, link, likes, owner, _id}, templateSelector, openPicturePopup, popupConfirm, userId, api) {
      this._templateSelector = templateSelector;
      this._name = name;
      this._link = link;
      this._api = api;
      this._likes = likes;
      this._userId = userId;
      this._cardId = _id;
      this._ownerId = owner ? owner._id : undefined;
      this._popupConfirm = popupConfirm;
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
        this._popupConfirm.open({
          id: this._cardId,
          element: this._element
        });
      });
      this._likeButton.addEventListener('click', () => {
        this._handleLike();
      });
    }

    _handleLike() {
      if (this._likeButton.classList.contains('place__heart_active')) {
        this._api.removeLike(this._cardId)
        .then((res) => {
          this._likesCounter.textContent = res.likes.length;
        })
        .catch((err) => {
          console.log(err);
        });

        this._likeButton.classList.remove('place__heart_active');
      } else {
        this._api.putLike(this._cardId)
        .then((res) => {
          this._likesCounter.textContent = res.likes.length;
        })
        .catch((err) => {
          console.log(err);
        });

        this._likeButton.classList.add('place__heart_active');
      }
      
    }

    _hideDeleteButton() {
      if (this._userId !== this._ownerId) {
        this._deleteButton.classList.add('place__button_hidden');
      }
    }

    _showLike() {
      if (this._likes && this._likes.length) {
        const isLike = this._likes.some((user) => user._id === this._userId);

        if (isLike) {
          this._likeButton.classList.add('place__heart_active');
        }
      }
    }

    createNewCard() {
      this._element = this._getTemplate();
      this._photo = this._element.querySelector('.place__img');
      this._title = this._element.querySelector('.place__title');
      this._deleteButton = this._element.querySelector('.place__delete');
      this._likeButton = this._element.querySelector('.place__heart');
      this._likesCounter = this._element.querySelector('.place__like-counter');

      this._photo.setAttribute('src', this._link);
      this._photo.setAttribute('alt', this._name);
      this._title.textContent = this._name;
      this._likesCounter.textContent = this._likes ? this._likes.length : 0;

      this._setEventListeners();
      this._hideDeleteButton();
      this._showLike();

      return this._element;
    }

    showCard(selector, element) {
      const container = document.querySelector(selector);
      container.prepend(element);
    }
};
