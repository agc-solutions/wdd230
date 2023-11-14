const baseURL = "https://agc-solutions.github.io/wdd230/";
const linksURL = "https://agc-solutions.github.io/wdd230/data/links.json";


const lactivs = document.querySelector('#lactiv');

async function getLessonsData(linksURL) {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.table(data.lessons);
    displayLessons(data.lessons);
    displayLinks(data.links);
    console.table(data.links)
  }  
  getLessonsData(linksURL);

const displayLessons = (lessons) => {
  lessons.forEach((lesson) => {
    let lactiv = document.createElement('li');
    
    let numWeek = document.createElement('p');
    let aula = document.createElement('a');
    aula.href = `${baseURL}${lesson.url}`;
    aula.textContent = lesson.title;  
       

    numWeek.textContent = `${lesson.lesson}`;
   
    let lessonTitle = document.createElement('span');
    

    
    lactiv.appendChild(numWeek);
    lactiv.appendChild(aula);    
    lactiv.appendChild(lessonTitle);

    lactivs.appendChild(lactiv);
    
  });
}

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

