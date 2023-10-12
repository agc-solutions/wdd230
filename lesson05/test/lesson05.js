const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');
const message = document.querySelector('#message')

button.addEventListener('click', () => {
    const myItem = input.value;
    input.value = '';

    if (myItem != '') {
        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('button');

        listItem.appendChild(listText);
        listText.textContent = (myItem);
        listItem.appendChild(listBtn);
        listBtn.textContent = 'Delete';
        list.appendChild(listItem);

        listBtn.addEventListener('click', () => {
            list.removeChild(listItem);
        });
        input.focus();
        //message.innerHTML = `Thank you. Your favorite chapter is ${myItem}.`;
    } else {
        message.innerHTML = `Please enter a chapter.`;
    }    
})

