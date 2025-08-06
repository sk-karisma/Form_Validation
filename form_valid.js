const form = document.getElementById('registrationForm');

const validators = {
  name: value => /^[a-zA-Z ]+$/.test(value) && value.trim() !== '',
  email: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
  phone: value => /^\d{10}$/.test(value),
  age: value => {
    const n = Number(value);
    return Number.isInteger(n) && n >= 18;
  },
  interests: () => {
    const checked = document.querySelectorAll('input[name="interests"]:checked');
    return checked.length > 0;
  }
};

const errorMessages = {
  name: 'Please enter your name (letters and spaces only).',
  email: 'Please enter a valid email address.',
  phone: 'Enter a valid 10-digit phone number.',
  age: 'You must be 18 or older.',
  interests: 'Select at least one interest.'
};

function showError(field, message) {
  document.getElementById(field + 'Error').textContent = message;
  if (field !== 'interests') {
    document.getElementById(field).classList.add('error-input');
  } else {
    document.getElementById('interestsGroup').classList.add('error-input');
  }
}

function clearError(field) {
  document.getElementById(field + 'Error').textContent = '';
  if (field !== 'interests') {
    document.getElementById(field).classList.remove('error-input');
  } else {
    document.getElementById('interestsGroup').classList.remove('error-input');
  }
}

function validateField(field) {
  let value = '';
  if (field === 'interests') {
    if (!validators[field]()) {
      showError(field, errorMessages[field]);
      return false;
    } else {
      clearError(field);
      return true;
    }
  } else {
    value = document.getElementById(field).value;
    if (!validators[field](value)) {
      showError(field, errorMessages[field]);
      return false;
    } else {
      clearError(field);
      return true;
    }
  }
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  let valid = true;
  ['name', 'email', 'phone', 'age', 'interests'].forEach(field => {
    if (!validateField(field)) valid = false;
  });
  if (valid) {
    alert('Registration successful!');
    form.reset();
    ['name', 'email', 'phone', 'age', 'interests'].forEach(clearError); // Clear all errors
  }
});

// Real-time validation for inputs
['name', 'email', 'phone', 'age'].forEach(field => {
  document.getElementById(field).addEventListener('input', function () {
    validateField(field);
  });
});

// Real-time validation for interests (checkboxes)
document.querySelectorAll('input[name="interests"]').forEach(box => {
  box.addEventListener('change', () => { validateField('interests'); });
});
