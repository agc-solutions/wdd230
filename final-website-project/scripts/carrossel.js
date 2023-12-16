let counter = 1;

setInterval(function() {
    document.getElementById('slide2' + counter).checked = true;
    counter ++;

    if(counter > 20) {
        counter = 11;
    }
}, 3000)