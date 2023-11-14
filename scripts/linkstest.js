const baseURL = "https://agc-solutions.github.io/wdd230/";
const linksURL = "https://agc-solutions.github.io/wdd230/data/links.json";


async function getLinks() {
    try {
      const response = await fetch(linksURL);
      const data = await response.json();
      console.log(data); // Test the JSON result by writing it to the console
      displayLinks(data.lessons); // Call the displayLinks function passing in the lessons data
    } catch (error) {
      console.error(error);
    }
  }
  
  // Call getLinks() to test your work (remove console.log() statement once you're satisfied)
  getLinks();
  
  // Function to display the activity links
  function displayLinks(lessons) {
    const activityLinks = document.getElementById("activity-links");
    activityLinks.innerHTML = ""; // Clear the existing content
  
    weeks.forEach((lesson) => {
      const weekElement = document.createElement("div");
      weekElement.classList.add("week");
  
      const weekTitle = document.createElement("h3");
      weekTitle.textContent = `Week ${lesson.lesson}`;
  
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



  // este deu certo 
//   const baseURL = "https://agc-solutions.github.io/wdd230/";
// const linksURL = "https://agc-solutions.github.io/wdd230/data/links.json";


// const lactivs = document.querySelector('#lactiv');

// async function getLessonsData(linksURL) {
//     const response = await fetch(linksURL);
//     const data = await response.json();
//     console.table(data.lessons);
//     displayLessons(data.lessons);
//     displayLinks(data.links);
//     console.table(data.links)
//   }  
//   getLessonsData(linksURL);

// const displayLessons = (lessons) => {
//   lessons.forEach((lesson) => {
//     let lactiv = document.createElement('li');
//     let numWeek = document.createElement('p');
//     let aula = document.createElement('a');
//     aula.href = `${baseURL}${lesson.url}`;
//     aula.textContent = lesson.title;  
       

//     numWeek.textContent = `${lesson.lesson}`;
   
//     let lessonTitle = document.createElement('span');
    

    
//     lactiv.appendChild(numWeek);
//     lactiv.appendChild(aula);    
//     lactiv.appendChild(lessonTitle);

//     lactivs.appendChild(lactiv);
    
//   });
// }

// const displayLinks = (links) => {
//   links.forEach((link) => {
//     let aula = document.createElement('a');
//     let nameAula = document.createElement('span');
//     nameAula.textContent = `${lesson.title}`;
//     aula.setAttribute('href', lesson.url)
//     lactiv.appendChild(aula);
//     lactiv.appendChild(nameAula)
//   })
// }

