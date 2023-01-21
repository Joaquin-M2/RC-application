import validateEmail from '../Utils/validate-email';
import {
  showError,
  reddenPasswordRequirement,
  hideError,
  resetPasswordRequirementStyles,
} from './errors';

export function waitUserStopTyping(
  checkValidityFunc,
  formFieldToCheck,
  fieldButton
) {
  let timeout = null;
  clearTimeout(timeout);

  timeout = setTimeout(() => {
    checkValidityFunc(formFieldToCheck, fieldButton);
  }, 200);
}

export function checkUsernameValidity(usernameField) {
  if (usernameField.value.trim().length < 3) {
    showError(usernameField);
  } else {
    hideError(usernameField);
  }
}

export function checkEmailValidity(emailField, seeEmailButton) {
  if (
    emailField.value.trim() === '' ||
    validateEmail(emailField.value) === false
  ) {
    showError(emailField);
    seeEmailButton.className = 'form__field-button';
  } else {
    hideError(emailField);
    seeEmailButton.className = 'form__field-button--hide';
  }
}

export function checkUserTypeValidity(userTypeField) {
  if (userTypeField.value.trim().length < 2) {
    showError(userTypeField);
  } else {
    hideError(userTypeField);
  }
}

export function checkPasswordValidity(passwordField) {
  if (passwordField.value.length < 8) {
    showError(passwordField);
    reddenPasswordRequirement(passwordField);
  } else {
    hideError(passwordField);
    resetPasswordRequirementStyles(passwordField);
  }
}
