const calendar = document.getElementById("calendar");

// Lebenserwartung (zum Beispiel 100 Jahre)
const verticalBlocks = 10;
const verticalWeekBlock = 10

// Berechne die Anzahl der Wochen im Lebenskalender
const totalBlocks = verticalBlocks * 13;
const totalWeeks = verticalWeekBlock * 4;

// Erstelle die Wochen im Lebenskalender
for (let block = 1; block <= totalBlocks; block++) {
    const block = document.createElement("div");
    block.className = "block"; 

    for (let week = 1; week <= totalWeeks; week++) {
        const weekElement = document.createElement("div");
        weekElement.className = "week"; 

        weekElement.addEventListener("click", function() {
          window.location.href = 'http://127.0.0.1:5500/woche.html';
      });

        block.appendChild(weekElement);
    }
    
    // Eventlistener um Wochen hinzuzufügen
    // weekElement.addEventListener("click", function() {
    //     if (weekElement.classList.contains("marked")) {
    //         weekElement.classList.remove("marked");
    //     } else {
    //         weekElement.classList.add("marked");
    //     }
    calendar.appendChild(block);

    }
    ;

//Wochen in der Vergangenheit mit random Farben zuweisen

    document.addEventListener('DOMContentLoaded', function() {
        // Ersetze 'birthdateInput' mit der ID deines Geburtsdatum-Eingabefelds
        const birthdateInput = document.getElementById('birthdate');
        const submitBtn = document.getElementById('submitBtn');
        
        submitBtn.addEventListener('click', function() {
          const birthdate = new Date(birthdateInput.value);
          colorPastWeeks(birthdate);
        });
      });
      
      function colorPastWeeks(birthdate) {
        const today = new Date();
        const oneWeek = 1000 * 60 * 60 * 24 * 7;
        const weeksLived = Math.floor((today - birthdate) / oneWeek);
        const weeks = document.querySelectorAll('.week');
      
        for (let i = 0; i < weeksLived && i < weeks.length; i++) {
          weeks[i].style.backgroundColor = getRandomColor();
        }
      }
      
      function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
    
