import firstCard from '../images/karachaevsk.jpg';
import secondCard from '../images/elbrus.jpg';
import thirdCard from '../images/dombay.jpg';
import fourthCard from '../images/moscow.jpg';
import fifthCard from '../images/kazan.jpg';
import sixthCard from '../images/vladivostok.jpg';

export const initialCards = [
  {
    place: 'Карачаевск',
    link: firstCard
  },
  {
    place: 'Гора Эльбрус',
    link: secondCard
  },
  {
    place: 'Домбай',
    link: thirdCard
  },
  {
    place: 'Москва',
    link: fourthCard
  },
  {
    place: 'Казань',
    link: fifthCard
  },
  {
    place: 'Владивосток',
    link: sixthCard
  }
];

export const popupConfig = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

export const apiOptions = {
  url: 'https://nomoreparties.co/v1/cohort-38/',
  headers: {
    authorization: '7846b4cc-9829-41ef-9b1b-ef32e4f41471',
    'Content-Type': 'application/json'
  }
};
