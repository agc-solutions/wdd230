// Get the current year
var currentYear = new Date().getFullYear();

// Set the copyright year dinamically
document.querySelector("footer p:1").textContent = "&copy" + currentYear + "Your Company";

//Get the last modified date
var lastModifiedDate =  new Date(document.lastModified);

// Set the last modified date dynamically
document.querySelector("footer p: last-child").textContent = "Last Modified: " + lastModifiedDate;

