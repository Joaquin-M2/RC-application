import changePasswordFieldType from './App/password-eye-button';
import {
  waitUserStopTyping,
  checkUsernameValidity,
  checkEmailValidity,
  checkUserTypeValidity,
  checkPasswordValidity,
} from './App/check-fields-validity';
import checkToActivateFormButton from './App/form-next-button';

const usernameField = document.getElementById('username');
const emailField = document.getElementById('email');
const userTypeField = document.getElementById('user-type');
const passwordField = document.getElementById('password');

const seeEmailButton = document.getElementById('email-button');
const seePasswordButton = document.getElementById('password-button');
const formButton = document.getElementById('button');

usernameField.addEventListener('input', () => {
  waitUserStopTyping(checkUsernameValidity, usernameField);
  checkToActivateFormButton(
    {
      usernameField: usernameField,
      emailField: emailField,
      userTypeField: userTypeField,
      passwordField: passwordField,
    },
    formButton
  );
});

emailField.addEventListener('input', () => {
  waitUserStopTyping(checkEmailValidity, emailField, seeEmailButton);
  checkToActivateFormButton(
    {
      usernameField: usernameField,
      emailField: emailField,
      userTypeField: userTypeField,
      passwordField: passwordField,
    },
    formButton
  );
});

userTypeField.addEventListener('input', () => {
  waitUserStopTyping(checkUserTypeValidity, userTypeField);
  checkToActivateFormButton(
    {
      usernameField: usernameField,
      emailField: emailField,
      userTypeField: userTypeField,
      passwordField: passwordField,
    },
    formButton
  );
});

passwordField.addEventListener('input', () => {
  waitUserStopTyping(checkPasswordValidity, passwordField);
  checkToActivateFormButton(
    {
      usernameField: usernameField,
      emailField: emailField,
      userTypeField: userTypeField,
      passwordField: passwordField,
    },
    formButton
  );
});

// "EYE" ICON IN SOME FORM FIELDS

seeEmailButton.addEventListener('click', event => {
  event.preventDefault();
});

seePasswordButton.addEventListener('click', event => {
  event.preventDefault();
  changePasswordFieldType(passwordField);
});
