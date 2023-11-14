const baseURL = "https://agc-solutions.github.io/wdd230/";
const linksURL = "https://agc-solutions.github.io/wdd230/data/links.json";

const lactivs = document.querySelector('#lactiv');

async function getLessonsData(linksURL) {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.table(data.lessons);
    displayLessons(data.lessons);
  }  
  getLessonsData(linksURL);

const displayLessons = (lessons) => {
  lessons.forEach((lesson) => {
    let lactiv = document.createElement('li');
    let numWeek = document.createElement('p');
    numWeek.textContent = `${lesson.lesson}`;
    // let url = document = `${'a'}`;
    // // url.textContent = `${lesson.url}`
    // let title = document.createElement('title');
    // title.textContent = `${lesson.title}`;

    // url.setAttribute('href', lesson.url);
    
    lactiv.appendChild(numWeek);
    // lactiv.appendChild(url);
    // lactiv.appendChild(title);

    lactivs.appendChild(lactiv);
    
  });
}

