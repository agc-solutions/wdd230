// set current year in footer
const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();


//Get the last modified date
var lastModifiedDate =  new Date(document.lastModified);

// Set the last modified date dynamically
document.querySelector('#lastModified').textContent = lastModifiedDate;
