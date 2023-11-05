const pw = document.querySelector("#pwrd");
const errmsg = document.querySelector("#errmsg");
const rule = document.querySelector("pattern")

function chekcPass() {
    if (pw.value !== rule.value) {
        message.textContent = "Passwords Do Not Match!";
        message.style.visibility = "show";
}
}
