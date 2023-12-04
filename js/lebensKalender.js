

document.addEventListener('DOMContentLoaded', function () {
  const calendar = document.getElementById("calendar");

  // Life expectancy (100 years)
  const verticalBlocks = 10;
  const verticalWeekBlock = 10;

  // Calculate the number of weeks in a life calendar
  const totalBlocks = verticalBlocks * 13;
  const totalWeeks = verticalWeekBlock * 4;

  // Create the weeks in the life calendar
  for (let blockNum = 1; blockNum <= totalBlocks; blockNum++) {
    const block = document.createElement("div");
    block.className = "block";

    for (let week = 1; week <= totalWeeks; week++) {
      const weekElement = document.createElement("div");
      weekElement.className = "week";
      let weekId = "week-" + blockNum + "-" + week;
      weekElement.id = weekId;


      block.appendChild(weekElement);
    }

    calendar.appendChild(block);
  }


  // Calculate the ID of the current week
  getCurrentWeekId();

});




function getCurrentWeekId() {
  const userDataString = localStorage.getItem('userData');
  if (!userDataString) return false;

  const userData = JSON.parse(userDataString);
  const birthdate = new Date(userData.date);
  const today = new Date();

  const oneWeek = 1000 * 60 * 60 * 24 * 7;
  const livedWeeks = Math.floor((today - birthdate) / oneWeek);

  let weekElementId = ("week-" + ((Math.floor(livedWeeks / 40)) + 1) + "-" + ((livedWeeks % 40) + 1));

  const weekElement = document.querySelector("#" + weekElementId);


  weekElement.addEventListener("click", function () {
    window.location.href = '/wochenReflexion.html?' + weekElementId;

  });

  weekElement.style.backgroundColor = "red";

  // Get birthdate from localStorage and color past weeks
  colorPastWeeks(livedWeeks);

};


function colorPastWeeks(livedWeeks) {
  const userDataString = localStorage.getItem('userData');
  if (!userDataString) return;

  const userData = JSON.parse(userDataString);
  const weeksLivedAtFirstLogin = userData.weeksLivedAtFirstLogin;

  const weeks = document.querySelectorAll('.week');

  for (let i = 0; i < livedWeeks && i < weeks.length; i++) {
    if (i < weeksLivedAtFirstLogin) {
      weeks[i].style.backgroundColor = "#000";
      weeks[i].style.pointerEvents = "none";
    } else {
      weeks[i].style.backgroundColor = "yellow";
    }

  }

};



