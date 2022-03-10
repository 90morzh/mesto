import {Card} from '../scripts/Card.js';
import {FormValidator} from '../scripts/FormValidator.js';

const editButton = document.querySelector('.profile__edit-button');
const addCardButton = document.querySelector('.profile__add-button');

const profileEditPopup = document.querySelector('.popup_profile-edit');
const addCardPopup = document.querySelector('.popup_add-card');
const picturePopup = document.querySelector('.popup_picture');
const popups = document.querySelectorAll('.popup');

const authorInput = profileEditPopup.querySelector('#author-input');
const aboutInput = profileEditPopup.querySelector('#about-input');
const placeInput = addCardPopup.querySelector('#place-input');
const linkInput = addCardPopup.querySelector('#link-input');
const popupImg = picturePopup.querySelector('.popup__img');
const popupSubtitle = picturePopup.querySelector('.popup__subtitle');

const author = document.querySelector('.profile__title');
const about = document.querySelector('.profile__subtitle');

const cardContainer = document.querySelector('.places');
const initialCards = [
  {
    name: 'Карачаевск',
    link: '../images/karachaevsk.jpg'
  },
  {
    name: 'Гора Эльбрус',
    link: '../images/elbrus.jpg'
  },
  {
    name: 'Домбай',
    link: '../images/dombay.jpg'
  },
  {
    name: 'Москва',
    link: '../images/moscow.jpg'
  },
  {
    name: 'Казань',
    link: '../images/kazan.jpg'
  },
  {
    name: 'Владивосток',
    link: '../images/vladivostok.jpg'
  }
];

const popupConfig = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};
const editForm = new FormValidator(popupConfig, '#editForm');
const addForm = new FormValidator(popupConfig, '#addForm');
editForm.enableValidation();
addForm.enableValidation();

initialCards.forEach(place => {
  const cardElement =  createCard(place);

  cardContainer.append(cardElement);
});

popups.forEach (popup => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup_active') || evt.target.classList.contains('popup__close-button')) {
      closePopup(popup);
    }
  })
})

function closePopupByEsc (evt) {
  if (evt.code === 'Escape') {
    closePopup(document.querySelector('.popup_active'));
  }
}

function openCardPopup() {
  document.querySelector('#addForm').reset();

  openPopup(addCardPopup);
}

// Закрытие попапа
function closePopup(popup) {
  popup.classList.remove('popup_active');
  document.removeEventListener('keydown', closePopupByEsc);
}

// Открытие попапа
function openPopup(popup) {
  popup.classList.add('popup_active');
  document.addEventListener('keydown', closePopupByEsc);
}

// Обработчик редактирования профиля
function editProfile(evt) {
  evt.preventDefault();

  author.textContent = authorInput.value;
  about.textContent = aboutInput.value;

  closePopup(profileEditPopup);
}

// Обработчик добавления новой карточки
function addNewCard(evt) {
  evt.preventDefault();

  const cardObject = {
    name: placeInput.value,
    link: linkInput.value
  };
  const cardElement = createCard(cardObject);

  cardContainer.prepend(cardElement);
  closePopup(addCardPopup);
  addForm.disableSubmitButton();
}

// Открытие попапа с изображением
function openPicturePopup(name, link) {
  popupImg.setAttribute('src', link);
  popupImg.setAttribute('alt', name);
  popupSubtitle.textContent = name;

  openPopup(picturePopup);
}

function createCard(place) {
  const card = new Card(place, '#place', openPicturePopup);
  const cardElement = card.createNewCard();

  return cardElement;
}

// Обработчик лайка
export function handleLike(evt) {
  evt.target.classList.toggle('place__heart_active');
}

editButton.addEventListener('click', () => {
  authorInput.value = author.textContent;
  aboutInput.value = about.textContent;

  openPopup(profileEditPopup)
});
addCardButton.addEventListener('click', () => openCardPopup());

profileEditPopup.addEventListener('submit', editProfile);
addCardPopup.addEventListener('submit', addNewCard);
