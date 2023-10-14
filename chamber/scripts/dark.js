const modeBtn = document.querySelector('#mode');
const main = document.querySelector('main');
const body = document.querySelector('body');
const teste = document.querySelector('.box')

modeBtn.addEventListener('click', () => {
    if (modeBtn.textContent.includes('🕶️')){
        // main.style.background = '#000';
        body.style.background = '#000';
        main.style.color = '#fff';
        //teste.style.background = '#fff';
        modeBtn.textContent = '🔆';        
    } else {
        // main.style.background = '#396e94';
        body.style.background = '#396e94'
        main.style.color = '#000';
        //teste.style.background = '#000'
        //teste.style.background = '#000, opacity 0.5'
        modeBtn.textContent = '🕶️';

    }
});