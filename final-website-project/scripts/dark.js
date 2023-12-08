const modeBtn = document.querySelector('#mode');
const main = document.querySelector('main');
const body = document.querySelector('body');
const teste = document.querySelector('.box');

modeBtn.addEventListener('click', () => {
    if (modeBtn.textContent.includes('🕶️')){
        body.style.background = '#000';
        main.style.color = '#fff';
        modeBtn.textContent = '🔆';        
    } else {
        body.style.background = '#fff'
        main.style.color = '#000';
        modeBtn.textContent = '🕶️';
    }
});