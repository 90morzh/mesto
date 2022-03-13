import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import {initialCards, popupConfig} from '../utils/constants.js'

import './index.css';

const editButton = document.querySelector('.profile__edit-button');
const addCardButton = document.querySelector('.profile__add-button');

const profileEditPopup = document.querySelector('.popup_profile-edit');
const addCardPopup = document.querySelector('.popup_add-card');

const authorInput = profileEditPopup.querySelector('#author-input');
const aboutInput = profileEditPopup.querySelector('#about-input');
const placeInput = addCardPopup.querySelector('#place-input');
const linkInput = addCardPopup.querySelector('#link-input');

// Валидация для формы редактирования профиля
const editForm = new FormValidator(popupConfig, '#editForm');
editForm.enableValidation();

// Валидация для формы добавления новой карточки
const addForm = new FormValidator(popupConfig, '#addForm');
addForm.enableValidation();

const cardsContainer = new Section({
  items: initialCards,
  renderer: (place) => {
    const cardElement = createCard(place);

    cardsContainer.addItem(cardElement, true);
  }
}, '.places');

// Попап изображения
const popupWithImage = new PopupWithImage('.popup_picture');
popupWithImage.setEventListeners();

// Попап редактирования профиля
const popupEditProfile = new PopupWithForm('.popup_profile-edit',  editProfile);
popupEditProfile.setEventListeners();

// Попап добавления карточки
const popupAddCard = new PopupWithForm('.popup_add-card', addNewCard);
popupAddCard.setEventListeners();

const userInfo = new UserInfo({authorSelector: '.profile__title', aboutSelector: '.profile__subtitle'});

// Обработчик редактирования профиля
function editProfile() {
  userInfo.setUserInfo({author: authorInput.value, about: aboutInput.value});

  popupEditProfile.close();
}

// Обработчик добавления новой карточки
function addNewCard() {
  const cardObject = {
    name: placeInput.value,
    link: linkInput.value
  };
  const cardElement = createCard(cardObject);

  cardsContainer.addItem(cardElement, false);
  popupAddCard.close();
  addForm.disableSubmitButton();
}

// Открытие попапа с изображением
function openPicturePopup(name, link) {
  popupWithImage.open({name, link});
}

function createCard(place) {
  const card = new Card(place, '#place', openPicturePopup);
  const cardElement = card.createNewCard();

  return cardElement;
}

editButton.addEventListener('click', () => {
  authorInput.value = userInfo.getUserInfo().author;
  aboutInput.value = userInfo.getUserInfo().about;

  popupEditProfile.open();
});
addCardButton.addEventListener('click', () => {
  popupAddCard.open();
});

cardsContainer.renderItems();
