import firstCard from '../images/karachaevsk.jpg';
import secondCard from '../images/elbrus.jpg';
import thirdCard from '../images/dombay.jpg';
import fourthCard from '../images/moscow.jpg';
import fifthCard from '../images/kazan.jpg';
import sixthCard from '../images/vladivostok.jpg';

export const initialCards = [
  {
    name: 'Карачаевск',
    link: firstCard
  },
  {
    name: 'Гора Эльбрус',
    link: secondCard
  },
  {
    name: 'Домбай',
    link: thirdCard
  },
  {
    name: 'Москва',
    link: fourthCard
  },
  {
    name: 'Казань',
    link: fifthCard
  },
  {
    name: 'Владивосток',
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
