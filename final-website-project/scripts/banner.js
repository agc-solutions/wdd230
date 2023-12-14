// let alert = currentDate.getDay();

// if(alert >= 1 && alert <= 6) {
//     const banner = document.createElement('div');
//     banner.classList.add('banner');
//     banner.innerHTML = `<p> Caution, huricane risks</p>
//     <button class= "close-button">Close</button>`;
//     document.body.prepend(banner);
//     const closeButton = document.querySelector('.close-button');
//     closeButton.addEventListener('click', () => {
//         banner.remove();
//     })
// }

const currentDate = new Date();
now = new Date;
document.querySelector('#year').textContent = currentDate.getFullYear();

// Get the current day of the week
//let currentDate = new Date(); It's taken on getdates.js file
//let currentDay = currentDate.getDay(); // Sunday = 0, Monday = 1, ...
//let alert = currentDate.getDay();
let alert = "5";
//console.log(currentDay);
//Check if the current day is Monday, Tuesday, or Wednesday

//if(currentDay >= 1 && currentDay <= 6) {
    if(alert >= 1 && alert <= 6) {
//     // Create the banner element
    //console.log("OK, it's working!!!")
    const banner = document.createElement('div');
    banner.classList.add('banner');
    // Set the banner content
    banner.innerHTML = `<p>...SMALL CRAFT ADVISORY REMAINS IN EFFECT FROM 5 PM THIS\nAFTERNOON TO 3 AM EST FRIDAY...\n* WHAT...North winds 15 to 20 kt with gusts up to 25 kt and seas\n3 to 5 ft expected.\n* WHERE...Coastal waters from Little Egg Inlet to Great Egg\nInlet NJ out 20 nm, Coastal waters from Great Egg Inlet to\nCape May NJ out 20 nm and Coastal waters from Manasquan Inlet\nto Little Egg Inlet NJ out 20 nm.\n* WHEN...From 5 PM this afternoon to 3 AM EST Friday.\n* IMPACTS...Conditions will be hazardous to small craft.</p>
    <button class= "close-button">Close</button>`;
    // Append the banner to the page
    document.body.prepend(banner);
    // Add event listener to the close button
    const closeButton = document.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
        banner.remove();
    })
}