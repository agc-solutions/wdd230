let togglebtn = document.querySelector('.togglebtn');
let bigbox = document.querySelector('#forecast-bigbox');

togglebtn.onclick = function() {
    bigbox.classList.toggle('active');
}