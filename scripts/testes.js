const baseURL = "https://agc-solutions.github.io/wdd230/";
const linksURL = "https://agc-solutions.github.io/wdd230/data/links.json";

// Asynchronous function to get the links data
async function getLinks(linksURL) {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data.lessons); // Test the JSON result by writing it to the console
    displayLinks(data.lessons); // Call the displayLinks function passing in the lessons data
}

// Call getLinks() to test your work (remove console.log() statement once you're satisfied)
getLinks(linksURL);

// Function to display the activity links
function displayLinks(weeks) {
  const activityLinks = document.getElementById("activity-links");
  activityLinks.innerHTML = ""; // Clear the existing content

  weeks.forEach((week) => {
    const weekElement = document.createElement("div");
    weekElement.classList.add("week");

    const weekTitle = document.createElement("p");
    //weekTitle.textContent = `Week ${week.lesson}:`;
    weekTitle.textContent = `Week ${week.lesson}:`;

    const linksList = document.createElement("ul");

    week.links.forEach((link) => {
      const linkItem = document.createElement("li");
      const linkAnchor = document.createElement("a");
      linkAnchor.href = `${baseURL}${link.url}`;
      linkAnchor.textContent = link.title;
      linkItem.appendChild(linkAnchor);
      linksList.appendChild(linkItem);
    });

    weekElement.appendChild(weekTitle);
    weekElement.appendChild(linksList);
    activityLinks.appendChild(weekElement);
  });
}
