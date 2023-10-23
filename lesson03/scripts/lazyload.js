// set current year in footer
const currentDate = new Date();
now = new Date;
document.querySelector('#year').textContent = currentDate.getFullYear();

//Get the last modified date
//var lastUpdatedDate =  new Date(document.lastModified);

// Set the last modified date dynamically
//document.querySelector('#lastUpdated').textContent = lastUpdatedDate;

let text = document.lastModified;
document.getElementById("lastUpdate").innerHTML = text;