// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
const msToDays = 86400000;
// Get the current date
var currentDate2 = new Date().getTime();

  // Check if it's the user's first visit
  if (!localStorage.getItem("lastVisitDate")) {
    // Display the welcome message
    document.getElementById("visitas").textContent = "Welcome! Let us know if you have any questions.";
  } else {
    // Get the last visit date from localStorage
    var lastVisitDate = localStorage.getItem("lastVisitDate");

    // Calculate the time difference between visits in milliseconds
    var timeDifference = currentDate2 - lastVisitDate;

    // Calculate the number of days between visits
    //var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var daysDifference = Math.floor(timeDifference / msToDays);

    // Check if the number of days is less than 1
    if (daysDifference < 1) {
      // Display the "Back so soon! Awesome!" message
      document.getElementById("visitas").textContent = "Back so soon! Awesome!";
    } else {
      // Display the number of days message
      var message = "You last visited " + daysDifference + " day" + (daysDifference === 1 ? "" : "s") + " ago.";
      document.getElementById("visitas").textContent = message;
    }
  }

  // Save the current visit date in localStorage
 localStorage.setItem("lastVisitDate", currentDate2);
//} //else {
    //console.log("localStorage is not supported by this browser.");
//}
