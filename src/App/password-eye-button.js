export default function changePasswordFieldType(passwordField) {
  if (passwordField.type === 'password') {
    passwordField.type = 'type';
  } else {
    passwordField.type = 'password';
  }
}
