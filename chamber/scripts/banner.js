
// Get the current day of the week
//let currentDate = new Date(); It's taken on getdates.js file
let currentDay = currentDate.getDay(); // Sunday = 0, Monday = 1, ...
//console.log(currentDay);
//Check if the current day is Monday, Tuesday, or Wednesday

if(currentDay >= 1 && currentDay <= 3) {
//     // Create the banner element
    //console.log("OK, it's working!!!")
    const banner = document.createElement('div');
    banner.classList.add('banner');
    // Set the banner content
    banner.innerHTML = `<p>Attend the Chamber of Commerce meet and greet on Wednesday at 7:00 p.m.</p>
    <button class= "close-button">Close</button>`;
    // Append the banner to the page
    document.body.prepend(banner);
    // Add event listener to the close button
    const closeButton = document.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
        banner.remove();
    })
}
