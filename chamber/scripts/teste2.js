// Check if localStorage is supported by the browser
if (typeof(Storage) !== "undefined") {
  // Get the current date
  var currentDate = new Date().getTime();

  // Check if it's the user's first visit
  if (!localStorage.getItem("lastVisitDate")) {
    // Display the welcome message
    document.getElementById("message").textContent = "Welcome! Let us know if you have any questions.";
  } else {
    // Get the last visit date from localStorage
    var lastVisitDate = localStorage.getItem("lastVisitDate");

    // Calculate the time difference between visits in milliseconds
    var timeDifference = currentDate - lastVisitDate;

    // Calculate the number of days between visits
    var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    // Check if the number of days is less than 1
    if (daysDifference < 1) {
      // Display the "Back so soon! Awesome!" message
      document.getElementById("message").textContent = "Back so soon! Awesome!";
    } else {
      // Display the number of days message
      var message = "You last visited " + daysDifference + " day" + (daysDifference === 1 ? "" : "s") + " ago.";
      document.getElementById("message").textContent = message;
    }
  }

  // Save the current visit date in localStorage
  localStorage.setItem("lastVisitDate", currentDate);
} else {
  console.log("localStorage is not supported by this browser.");
}