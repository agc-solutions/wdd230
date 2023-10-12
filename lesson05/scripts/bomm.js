// STEP 2: JavaScript
// 1. In your js file, declare three const variables that hold references 
//    to the input, button, and .list elements.

const list = document.querySelector('#list');
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
//const button = document.querySelector('submit');


// 2. Create a click event listener for the Add Chapter button using 
// addEventListener and an anonymous function or arrow function.

button.addEventListener('click', () =>{
    const myChap = input.value;
    input.value = '';


    // 3. In the click event function block {...}, do the following:
        //check to make sure the input is not blank before doing the 
        //following remaining tasks in this list using an if block, 
        //otherwise provide a message or at least do nothing and return 
        //the .focus() to the input field.

    if (myChap != '') {

        // create a li element        
        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        // create a delete button
        const delBtn = document.createElement('button');

        listItem.appendChild(listText);
        //populate the li elements textContent or innerHTML with the input value
        listText.textContent = myChap;
        //append the li element with the delete button
        listItem.appendChild(delBtn);
        //populate the button textContent with a ❌
        delBtn.textContent = '❌';
        list.appendChild(listItem);

        //  add an event listener to the delete button that removes the li element 
        //  when clicked
        delBtn.addEventListener('click', () => {
            list.removeChild(listItem);
            input.focus();
        });
        input.focus();
    }
        
         
})