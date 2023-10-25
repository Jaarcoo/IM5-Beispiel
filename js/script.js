const calendar = document.getElementById("calendar");

// Lebenserwartung (zum Beispiel 100 Jahre)
const lifeExpectancy = 100;

// Berechne die Anzahl der Wochen im Lebenskalender
const totalWeeks = lifeExpectancy * 52;

// Erstelle die Wochen im Lebenskalender
for (let week = 1; week <= totalWeeks; week++) {
    const weekElement = document.createElement("div");
    weekElement.className = "week";
    
    // Eventlistener um Wochen hinzuzufügen
    weekElement.addEventListener("click", function() {
        if (weekElement.classList.contains("marked")) {
            weekElement.classList.remove("marked");
        } else {
            weekElement.classList.add("marked");
        }
    });
    
    calendar.appendChild(weekElement);
}