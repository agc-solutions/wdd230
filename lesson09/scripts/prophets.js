// 1. - Open this file in your browser to identify and reference the key/value pairs 
 //      found in the JSON data. https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json.

// 2. - Declare a const variable named "url" that contains the URL string of the JSON
//      resource provided.

const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

// 3. - Declare a const variable name "cards" that selects the HTML div element from the document with an id 
//      value of "cards".

const cards = document.querySelector('#cards');

// 4. - Create a async defined function named "getProphetData" to fetch data from 
//      the JSON source url using the await fetch() method.
// 5. - Store the response from the fetch() method in a const variable named "response".
// 6. - Convert the response to a JSON object using the .json method and store the 
//      results in a const variable named "data".
// 7. - Add a console.table() expression method to check the data response at this 
//      point in the console window.
// 8. - Call the function getProphetData() in the main line of your .js code to test 
//      the fetch and response.

async function getProphetData(url) { // #4
    const response = await fetch(url); // #5
    const data = await response.json(); // #6
    console.table(data.prophets); // #7
    displayProphets(data.prophets);
}
getProphetData(url); // #8


//  9. - If it all checks out, note that the data returns a single property, an array 
//       of objects named "prophets".
// 10. - Comment out the console line and call a function named "displayProphets" and
//       include the "data.prophets" argument. Why do we send data.prophets versus 
//       just the data variable? The displayProphets() function expects an array parameter.

// 11. - Define a function expression named "displayProphets" that handles a single 
//       parameter named "prophets" somewhere in your js file. Use an arrow expression
//       to contain statements that will process the parameter value and build a card 
//       for each prophet.
// 12. - Inside the function, use a forEach loop with the array parameter to process each
//       "prophet" record one at a time, creating a new card each time.
// 13. - Inside the HTML card building loop, do the following:
//          A. create a section element and store it in a variable named card using createElement(),
//          B. create an h2 element and store it in a variable named "fullName",
//          C. create an img element and store it in a variable named "portrait",
//          D. populate the heading element with the prophet's full name using a template string to build the full name,
//          E. build the image element by setting the
//              1. src, 
//              2. alt,
//              3. loading,
//              4. with
//              5. height attributes using setAttribute(). 
//          F. Using appendChild() on the section element named "card", add the heading and image elements one at a time. 
//          G. Finally, add the section card to the "cards" div that was selected at the beginning of the script file.

const displayProphets = (prophets) => {  //#11
    prophets.forEach((prophet) => {      // #12
        let card = document.createElement('section'); //13.A
        let fullName = document.createElement('__');  //13.B
        let portrait = document.createElement('img'); //13.C
         fullName.textContent = `${prophet.name} ${prophet.lastname}`;  //13.D

        portrait.setAttribute('src', prophet.imageurl); //13.E.1
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); //13.E.2
        portrait.setAttribute('loading', 'lazy'); //13.E.3
        portrait.setAttribute('width', '340'); //13.E.4
        portrait.setAttribute('height', '440'); //13.E.5
        card.appendChild(fullName); //13.F
        card.appendChild(portrait);

        cards.appendChild(card);  //13.G
    });

}



// const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
// const cards = document.querySelector('#cards');

// async function getProphetData(url) { 
//         const response = await fetch(url);
//         const data = await response.json(); 
//         console.table(data.prophets);
//         displayProphets(data.prophets);
//     }
//     getProphetData(url);
       

// const displayProphets = (prophets) => {
//     prophets.forEach((prophet) => {      
//         let card = document.createElement('section'); 
//         let fullName = document.createElement('__'); 
//         let portrait = document.createElement('img'); 
 
//         fullName.textContent = `${prophet.name} ${prophet.lastname}`;

//         portrait.setAttribute('src', prophet.imageurl); 
//         portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
//         portrait.setAttribute('loading', 'lazy'); 
//         portrait.setAttribute('width', '340'); 
//         portrait.setAttribute('height', '440'); 

//         card.appendChild(fullName); 
//         card.appendChild(portrait);

//         cards.appendChild(card); 
//     });

// }

