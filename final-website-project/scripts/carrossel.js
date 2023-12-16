let counter = 11;

setInterval(function() {
    document.getElementById('slide' + counter).checked = true;
    counter ++;

    if(counter > 20) {
        counter = 11;
    }
}, 3000)