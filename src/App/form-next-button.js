import validateEmail from '../Utils/validate-email';

export default function checkToActivateFormButton(
  {
    usernameField: usernameField,
    emailField: emailField,
    userTypeField: userTypeField,
    passwordField: passwordField,
  },
  formButton
) {
  if (
    usernameField.value.trim().length > 2 &&
    emailField.value.trim() !== '' &&
    validateEmail(emailField.value) === true &&
    userTypeField.value.trim().length > 1 &&
    passwordField.value.length > 7
  ) {
    formButton.className += ' button--active';
  } else {
    formButton.className = 'button';
  }
}
