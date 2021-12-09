const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const form = popup.querySelector('.popup__form');
const firstInput = popup.querySelector('#author-input');
const secondInput = popup.querySelector('#about-input');
const closeButton = popup.querySelector('.popup__close-button');
const author = document.querySelector('.profile__title');
const about = document.querySelector('.profile__subtitle');

function closePopup() {
  popup.classList.remove('popup_active');
}

function openPopup() {
  firstInput.value = author.textContent;
  secondInput.value = about.textContent;
  popup.classList.add('popup_active');
}

function submitHandler(evt) {
  evt.preventDefault();
  closePopup();
  author.textContent = firstInput.value;
  about.textContent = secondInput.value;
}

editButton.addEventListener('click', openPopup);

closeButton.addEventListener('click', closePopup);

form.addEventListener('submit', submitHandler);
