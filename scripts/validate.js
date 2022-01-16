const popupConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const enableValidation = (settingsObj) => {
  const formList = Array.from(document.querySelectorAll(settingsObj.formSelector));

  formList.forEach((formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(settingsObj.inputSelector));
    const submitButton = formElement.querySelector(settingsObj.submitButtonSelector);

    toggleSubmitButtonState(inputList, submitButton, settingsObj.inactiveButtonClass);

    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        checkInputValidation(inputElement, settingsObj.inputErrorClass, settingsObj.errorClass);
        toggleSubmitButtonState(inputList, submitButton, settingsObj.inactiveButtonClass);
      })
    });
  })
};

const disableSubmitButton = (submitButton, inactiveButtonClass) => {
  submitButton.classList.add(inactiveButtonClass);
  submitButton.setAttribute('disabled', true);
};

const activateSubmitButton = (submitButton, inactiveButtonClass) => {
    submitButton.classList.remove(inactiveButtonClass);
    submitButton.removeAttribute('disabled');
};

const toggleSubmitButtonState = (inputList, submitButton, inactiveButtonClass) => {
  if (hasInvalidInput(inputList)) {
    disableSubmitButton(submitButton, inactiveButtonClass);
  } else {
    activateSubmitButton(submitButton, inactiveButtonClass);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

const checkInputValidation = (inputElement, inputErrorClass, errorClass) => {
  if (!inputElement.validity.valid) {
    showInputError(inputElement, inputErrorClass, errorClass);
  } else {
    hideInputError(inputElement, inputErrorClass, errorClass);
  }
};

const showInputError = (inputElement, inputErrorClass, errorClass) => {
  const errorElement = document.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(errorClass);
};

const hideInputError = (inputElement, inputErrorClass, errorClass) => {
  const errorElement = document.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove(inputErrorClass);
  errorElement.textContent = '';
  errorElement.classList.remove(errorClass);
};

enableValidation(popupConfig);