const pwd1 = document.querySelector("#pwrd");
const pwd2 = document.querySelector("#pwrd2");
const message = document.querySelector("#formmessage");

pwd2.addEventListener("focusout", checkSame);

function checkSame() {
    if (pwd1.value !== pwd2.value) {
        message.textContent = "Passwords Do Not Match!";
        message.style.visibility = "show";
        // pwd2.style.backgroundColor = "#fff0f3";
        // pwd2.value = "";
        // pwd2.focus();
        // pwd1.value = "";
        // pwd1.focus();
        

    } else {
        message.style.display = "none";
        pwd2.style.backgroundColor = "#fff";
        pwd2.style.color = "#000";        
    }
}