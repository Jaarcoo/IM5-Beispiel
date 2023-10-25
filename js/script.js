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
    
