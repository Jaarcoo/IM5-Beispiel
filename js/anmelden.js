      function dateInputRestriction(event) {
        // Erlaube nur Nummern und den Punkt
        let char = String.fromCharCode(event.which);
        if (!(/[0-9.]/.test(char))) {
          event.preventDefault();
        }
      }
      
      document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('submitBtn').addEventListener('click', redirectToCalendar);
      });
      
      function redirectToCalendar() {
        let name = document.getElementById('name').value.trim();
        let birthdate = document.getElementById('birthdate').value.trim();
        let birthdateValidation = document.getElementById('birthdateValidation');
        let nameValidation = document.getElementById('nameValidation');
      
        // Reset validation messages
        nameValidation.textContent = '';
        birthdateValidation.textContent = '';
      
        let validName = name !== '';
        let validDate = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[012])\.(19|20)\d\d$/.test(birthdate);
      
        // Validate name
        if (!validName) {
          nameValidation.textContent = 'Bitte ausfüllen';
        }
      
        // Validate birthdate
        if (!validDate) {
          birthdateValidation.textContent = 'Bitte im Format TT.MM.JJJJ ausfüllen';
        }
      
        // If both fields are valid, perform the redirect action
        if (validName && validDate) {
          // Redirect to your calendar HTML page
          window.location.href = "/lebensKalender.html";
        }
      }

      function allowOnlyNumbersAndDots(event) {
        // Erlaube nur Ziffern und den Punkt (ASCII Code: 46 für Punkt, 48-57 für Zahlen 0-9)
        if ((event.which != 46 && event.which < 48) || event.which > 57) {
          event.preventDefault();
        }
      
        // Erlaube nur einen Punkt zwischen den Zahlen
        var currentValue = event.target.value;
        if (event.which == 46 && (currentValue.match(/\./g) || []).length >= 2) {
          event.preventDefault();
        }
      
        // Verhindere das Einfügen von nicht gültigen Zeichen
        if (event.which == 0 || event.which == 229) {
          setTimeout(function() {
            if (!/^\d{0,2}(\.\d{0,2}){0,2}$/.test(event.target.value)) {
              event.target.value = event.target.value.replace(/[^\d.]/g, '');
            }
          }, 0);
        }
      }
      
      document.addEventListener('DOMContentLoaded', function() {
        var birthdateInput = document.getElementById('birthdate');
        birthdateInput.addEventListener('keypress', allowOnlyNumbersAndDots);
        document.getElementById('submitBtn').addEventListener('click', redirectToCalendar);
      });