let counter = 1;

setInterval(function() {
    document.getElementById('slide' + counter).checked = true;
    counter ++;

    if(counter > 10) {
        counter = 1;
    }
}, 3000)