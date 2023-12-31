// initialize display elements
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");
const times = document.querySelector("#times");
const label = document.querySelector(".label");

//get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if is this the first visit or display the number of visits.
if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
    if (numVisits == 1) {
        times.textContent = 'time';
    }    
} else {
    visitsDisplay.textContent = `This is your first visit!`;
    times.textContent = '';
    label.textContent = '';
}
// increment the number of visits
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

//show today's date.
todayDisplay.textContent = Date.now();

