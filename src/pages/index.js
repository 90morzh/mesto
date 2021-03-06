import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

import {popupConfig, apiOptions} from '../utils/constants.js'

import './index.css';

const editButton = document.querySelector('.profile__edit-button');
const addCardButton = document.querySelector('.profile__add-button');

const profileEditPopup = document.querySelector('.popup_profile-edit');

const authorInput = profileEditPopup.querySelector('#author-input');
const aboutInput = profileEditPopup.querySelector('#about-input');

// Взаимодействие с сервером
const api = new Api(apiOptions);

const avatar = document.querySelector('.profile__pencil-container');
avatar.addEventListener('click', () => {
  avatarPopup.open();
  avatarForm.disableSubmitButton();
});

// Валидация для формы редактирования профиля
const editForm = new FormValidator(popupConfig, '#editForm');
editForm.enableValidation();

// Валидация для формы добавления новой карточки
const addForm = new FormValidator(popupConfig, '#addForm');
addForm.enableValidation();

// Валидация для добавления новой аватарки
const avatarForm = new FormValidator(popupConfig, '#avatarForm');
avatarForm.enableValidation();

// Попап изображения
const popupWithImage = new PopupWithImage('.popup_picture');
popupWithImage.setEventListeners();

// Попап редактирования профиля
const popupEditProfile = new PopupWithForm('.popup_profile-edit',  editProfile);
popupEditProfile.setEventListeners();

// Попап добавления карточки
const popupAddCard = new PopupWithForm('.popup_add-card', addNewCard);
popupAddCard.setEventListeners();

// Попап подтверждения удаления карточки
const popupConfirm = new PopupWithConfirm('.popup_confirm', removeCard);
popupConfirm.setEventListeners();

// Попап аватарки
const avatarPopup = new PopupWithForm('.popup_avatar', changeAvatar);
avatarPopup.setEventListeners();

const userInfo = new UserInfo({
  authorSelector: '.profile__title',
  aboutSelector: '.profile__subtitle',
  profileAvatar: '.profile__avatar'
});

const cardsContainer = new Section({
  renderer: (place) => {
    const cardElement = createCard(place, userInfo.id);

    cardsContainer.addItem(cardElement, true);
  }
}, '.places');

// Обработчик редактирования профиля
function editProfile({author, about}) {
  popupEditProfile.changeButtonText('Сохранение...');

  api.setUserData({name: author, about})
    .then((res) => {
      userInfo.setUserInfo({author: res.name, about: res.about});

      popupEditProfile.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupEditProfile.changeButtonText('Сохранить');
    });
}

// Обработчик добавления новой карточки
function addNewCard({place, link}) {
  popupAddCard.changeButtonText('Сохранение...');

  api.addCard({name: place, link})
    .then((res) => {
      const cardObject = {name: res.name, link: res.link, _id: res._id};

      cardsContainer.addItem(createCard(cardObject), false)

      popupAddCard.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupAddCard.changeButtonText('Создать');
    });
}

// Обработчик удаления карточки
function removeCard({id, element}) {
  api.removeCard(id)
    .then(() => {
      element.remove();
      popupConfirm.close();
    })
    .catch((err) => {
      console.log(err);
    });
}

// Обработчик изменения аватарки
function changeAvatar({link}) {
  avatarPopup.changeButtonText('Сохранение...');

  api.setUserAvatar(link)
  .then((res) => {
    userInfo.setUserAvatar({avatar: res.avatar});

    avatarPopup.close();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    avatarPopup.changeButtonText('Сохранить');
  });
}

// Открытие попапа с изображением
function openPicturePopup(place, link) {
  popupWithImage.open({place, link});
}

function createCard(place, userId) {
  const card = new Card(place, '#place', openPicturePopup, popupConfirm, userId, api);
  const cardElement = card.createNewCard();

  return cardElement;
}

editButton.addEventListener('click', () => {
  const userData = userInfo.getUserInfo();

  authorInput.value = userData.author;
  aboutInput.value = userData.about;

  editForm.disableSubmitButton();
  popupEditProfile.open();
});
addCardButton.addEventListener('click', () => {
  addForm.disableSubmitButton();
  popupAddCard.open();
});

Promise.all([
  api.getUserData(),
  api.getCards()
])
  .then(([userData, cardsData]) => {
    userInfo.setUserInfo({
      author: userData.name,
      about: userData.about,
      id: userData._id
    });

    userInfo.setUserAvatar({avatar: userData.avatar});

    cardsContainer.renderItems(cardsData);
  })
  .catch((err) => {
    console.log(err);
  });
