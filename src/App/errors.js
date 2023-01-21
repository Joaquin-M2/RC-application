export function showError(formField) {
  const labelTag = formField
    .closest('.form__field')
    .querySelector('.form__label');

  if (formField.value.length !== 0) {
    labelTag.className = 'form__label form__label--active form__label--error';
    formField.className = 'form__input form__input--error';
  } else {
    labelTag.className = 'form__label';
  }

  if (!formField.closest('.form__field').querySelector('.form__error')) return;

  const smallTag = formField
    .closest('.form__field')
    .querySelector('.form__error');

  smallTag.className = 'form__error form__error--active';
}

export function hideError(formField) {
  const labelTag = formField
    .closest('.form__field')
    .querySelector('.form__label');

  formField.className = 'form__input';

  if (formField.value.length !== 0) {
    labelTag.className = 'form__label form__label--active';
  }

  if (!formField.closest('.form__field').querySelector('.form__error')) return;

  const smallTag = formField
    .closest('.form__field')
    .querySelector('.form__error');
  smallTag.className = 'form__error';
}

// EXCLUSIVE FOR THE PASSWORD FORM FIELD

export function reddenPasswordRequirement(passwordField) {
  const smallTag = passwordField
    .closest('.form__field')
    .querySelector('.form__password-requirement');

  smallTag.className =
    'form__password-requirement form__password-requirement--error';
}

export function resetPasswordRequirementStyles(passwordField) {
  const smallTag = passwordField
    .closest('.form__field')
    .querySelector('.form__password-requirement');

  smallTag.className = 'form__password-requirement';
}
