

function dateInputRestriction(event) {
  // Allow only numbers and the dot
  let char = String.fromCharCode(event.which);
  if (!(/[0-9.]/.test(char))) {
    event.preventDefault();
  }
};

function redirectToCalendar() {
  let name = document.getElementById('name').value.trim();
  let birthdate = document.getElementById('birthdate').value;
  let birthdateValidation = document.getElementById('birthdateValidation');
  let nameValidation = document.getElementById('nameValidation');

  // Reset validation messages
  nameValidation.textContent = '';
  birthdateValidation.textContent = '';

  let validName = name !== '';

  // Validate name
  if (!validName) {
    nameValidation.textContent = 'Bitte ausfüllen';
  }

  // Validate birthdate
  if (!birthdate) {
    birthdateValidation.textContent = 'Bitte im Format TT.MM.JJJJ ausfüllen';
  }

  // If both fields are valid, perform the redirect action
  if (validName && birthdate) {
    // Redirect to your calendar HTML page
    writeDateAndName(name, birthdate);
    window.location.href = "/lebensKalender.html";
  }
};

function allowOnlyNumbersAndDots(event) {
  // Allow only digits and the dot (ASCII Code: 46 for dot, 48-57 for numbers 0-9)
  if ((event.which != 46 && event.which < 48) || event.which > 57) {
    event.preventDefault();
  }

  // Allow only one dot between the numbers
  var currentValue = event.target.value;
  if (event.which == 46 && (currentValue.match(/\./g) || []).length >= 2) {
    event.preventDefault();
  }

  // Prevent the insertion of invalid characters
  if (event.which == 0 || event.which == 229) {
    setTimeout(function () {
      if (!/^\d{0,2}(\.\d{0,2}){0,2}$/.test(event.target.value)) {
        event.target.value = event.target.value.replace(/[^\d.]/g, '');
      }
    }, 0);
  }
};

document.addEventListener('DOMContentLoaded', function () {
  if (localStorage.getItem('userData')) {
    window.location.href = 'lebensKalender.html';
  }
  var birthdateInput = document.getElementById('birthdate');
  birthdateInput.addEventListener('keypress', allowOnlyNumbersAndDots);
  document.getElementById('submitBtn').addEventListener('click', redirectToCalendar);
});



function writeDateAndName(name, birthdate) {
  const today = new Date();
  const oneWeek = 1000 * 60 * 60 * 24 * 7;
  let newDate = Date.parse(birthdate);
  console.log(birthdate);
  
  const weeksLivedAtFirstLogin = Math.floor((today - newDate) / oneWeek);
  console.log(weeksLivedAtFirstLogin);

  // Create an object with the name and date
  var dataObject = {
    name: name,
    date: birthdate,
    weeksLivedAtFirstLogin: weeksLivedAtFirstLogin
  };

  // Convert the object to a string
  var dataString = JSON.stringify(dataObject);

  // Store the stringified object in localStorage
  localStorage.setItem('userData', dataString);
};
