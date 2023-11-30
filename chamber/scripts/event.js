let togglebtn = document.querySelector('.togglebtn');
let digitalEvent = document.querySelector('.digital-container');



togglebtn.onclick = function(){
    digitalEvent.classList.toggle('active');    
}

let togglebtn1 = document.querySelector('.togglebtn1');
let joinEvent = document.querySelector('.join-event-container');

togglebtn1.onclick = function(){
    joinEvent.classList.toggle('active');    
}