const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const firstInput = popup.querySelector('#author-input');
const secondInput = popup.querySelector('#about-input');
const closeButton = popup.querySelector('.popup__close-button');
const saveButton = popup.querySelector('.popup__button');
const author = document.querySelector('.profile__title');
const about = document.querySelector('.profile__subtitle');
const page = document.querySelector('.page');

function closePopup() {
  popup.classList.remove('popup_active');
  page.classList.add('page__hidden');
}

editButton.addEventListener('click', () => {
  firstInput.value = author.textContent;
  secondInput.value = about.textContent;
  popup.classList.add('popup_active');
  page.classList.add('page__hidden');
});

closeButton.addEventListener('click', () => {
  closePopup();
});

saveButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  closePopup();
  author.textContent = firstInput.value;
  about.textContent = secondInput.value;
});