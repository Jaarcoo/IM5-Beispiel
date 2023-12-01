document.addEventListener('DOMContentLoaded', function() {
  const calendar = document.getElementById("calendar");

  // Lebenserwartung (zum Beispiel 100 Jahre)
  const verticalBlocks = 10;
  const verticalWeekBlock = 10;

  // Berechne die Anzahl der Wochen im Lebenskalender
  const totalBlocks = verticalBlocks * 13;
  const totalWeeks = verticalWeekBlock * 4;

  // Erstelle die Wochen im Lebenskalender
  for (let blockNum = 1; blockNum <= totalBlocks; blockNum++) {
    const block = document.createElement("div");
    block.className = "block";
  
    for (let week = 1; week <= totalWeeks; week++) {
      const weekElement = document.createElement("div");
      weekElement.className = "week";
      let weekId = "week-" + blockNum + "-" + week;
      weekElement.id = weekId;
  
      // Use the new function to add click listener
      addClickListenerIfCurrentWeek(weekElement, week);
  
      block.appendChild(weekElement);
    }
  
    calendar.appendChild(block);
  }




  // Get birthdate from localStorage and color past weeks
  colorPastWeeks();
  //colorCurrentWeek();
});

//  if (isCurrentWeek(week)) {
//     weekElement.addEventListener("click", function() {
//     window.location.href = '/wochenReflexion.html?' + weekId;

//     });
//   }

function addClickListenerIfCurrentWeek(weekElement, weekNumber) {
  if (isCurrentWeek(weekNumber)) {
    weekElement.addEventListener("click", function() {
      window.location.href = '/wochenReflexion.html?' + weekElement.id;
    });
  }
}

function isCurrentWeek(weekNumber) {
  const userDataString = localStorage.getItem('userData');
  if (!userDataString) return false;

  const userData = JSON.parse(userDataString);
  const birthdate = new Date(userData.date);

  const today = new Date();
  const oneWeek = 1000 * 60 * 60 * 24 * 7;
  const currentWeek = Math.floor((today - birthdate) / oneWeek);
  const differenz = currentWeek - userData.weeksLived;
  console.log(differenz);
}


function colorPastWeeks() {
  const userDataString = localStorage.getItem('userData');
  if (!userDataString) return;

  const userData = JSON.parse(userDataString);
  const weeksLived = userData.weeksLived;

  const weeks = document.querySelectorAll('.week');

  for (let i = 0; i < weeksLived && i < weeks.length; i++) {
      weeks[i].style.backgroundColor = "#000";
      weeks[i].style.pointerEvents = "none";
  }
}


// function getRandomColor() {
//   const letters = '0123456789ABCDEF';
//   let color = '#';
//   for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }



