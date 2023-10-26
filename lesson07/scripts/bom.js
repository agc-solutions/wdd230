// STEP 2: JavaScript
// 1. In your js file, declare three const variables that hold references 
//    to the input, button, and .list elements.

const list = document.querySelector('#list');
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
//const button = document.querySelector('submit');


// 2. Create a click event listener for the Add Chapter button using 
// addEventListener and an anonymous function or arrow function.

// In lesson 07 we will:
// Change the button click event listener to only do the following tasks 
// (the other tasks in that original function will be used in a separate 
// function named displayList):

// button.addEventListener('click', () =>{
//     const myChap = input.value;
//     input.value = '';


//     // 3. In the click event function block {...}, do the following:
//         //check to make sure the input is not blank before doing the 
//         //following remaining tasks in this list using an if block, 
//         //otherwise provide a message or at least do nothing and return 
//         //the .focus() to the input field.

//     if (myChap != '') {

//         // create a li element        
//         const listItem = document.createElement('li');
//         const listText = document.createElement('span');
//         // create a delete button
//         const delBtn = document.createElement('button');
//         // keeps the "message" box empty while typing a scripture
//         message.innerHTML = ``

//         listItem.appendChild(listText);
//         //populate the li elements textContent or innerHTML with the input value
//         listText.textContent = myChap;
//         //append the li element with the delete button
//         listItem.appendChild(delBtn);
//         //populate the button textContent with a ❌
//         delBtn.textContent = '❌';
//         list.appendChild(listItem);

//         //  add an event listener to the delete button that removes the li element 
//         //  when clicked
//         delBtn.addEventListener('click', () => {
//             list.removeChild(listItem);
//             input.focus();
//         });
//         input.focus();
//     } else {
//         message.innerHTML = `Please enter a chapter.`;
//     }  

    
// })

// Lesson 07
// Declare an array named chaptersArray and assign it to the results of a defined 
// function named getChapterList (This function does not exist, yet).

let chaptersArray = getChapterList() || [];

// In that same array variable declaration and assignment, add a compound 
// OR condition to assign it an empty array in case this is the user's first 
// visit or if the localStorage item is missing.


// Now let's populate the displayed list of chapters. Use a forEach on the 
// chaptersArray to process each entry named chapter. Use an arrow function 
//within the loop to call a new defined function named displayList and pass it 
//the argument of chapter. That way each entry will be processed, i.e., appended 
//to the list.

chaptersArray.forEach(chapter => {
    displayList(chapter);
})

// Change the button click event listener to only do the following tasks 
// (the other tasks in that original function will be used in a separate 
// function named displayList):
// A - check if the input is empty, if not, then
// B - call displayList with the input.value argument,
// C - push the input.value into the chaptersArray,
// D - update the localStorage with the new array by calling a function named setChapterList,
// E - set the input.value to nothing, and
// F - set the focus back to the input.

button.addEventListener('click', () => {
    if (input.value != '') {                      //A
        displayList (input.value);                //B
        chaptersArray.push (input.value);         //C
        setChapterList();                         //D
        input.value = '';                         //E
        input.focus();                            //F
    }
});

function displayList(item) {
    let li = document.createElement('li');
    let delBtn = document.createElement('button');
    li.textContent = item;
    delBtn.textContent =  '❌';
    delBtn.classList.add('delete');
    li.append(delBtn);
    list.append(li);
    delBtn.addEventListener('click', function (){
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
    console.log('I like to copy instead of type it out and trying to understand it');
}

// Define the setChapterList function to set the localStorage item that you have 
// already named. Use JSON.stringify() to stringify the array.

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// Define the getChapterList function to get the localStorage item. No parameter 
// is needed. Since this function returns to an awaiting array, we will need to 
// use JSON.parse on the string.

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// Finally, define the deleteChapter function with a parameter named chapter that 
// does three things.

// 1 - reformat the chapter parameter to get rid of the ❌ that is passed on the 
// end of the chapter string when we called the deleteChapter function.
// Use string.slice() method to extract the last character.
chapter = chapter.slice(0, chapter.length - 1); 
// 2 - redefine the chaptersArray array using the array.filter method to return 
// everything except the chapter to be removed.
chaptersArray = chaptersArray.filter((item) => item !== chapter);
// 3 - Call the setChapterList function to update the localStorage item.
function deleteChapter (chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}

