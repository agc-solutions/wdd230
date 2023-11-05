const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmpassword = document.getElementById("confirmpassword");

form.addEventListener("submit", (Event) => {
    Event.preventDefault();
    
    checkform();

    //alert("Success!!")
})

username.addEventListener("blur", () => {
    checkInputUsername();
})

email.addEventListener("blur", () => {
    checkInputEmail();
})

email.addEventListener("blur", () => {
    checkInputPassword();
})

function checkInputUsername() {
    const usernameValue = username.value;

    if (usernameValue === "") {
        //show the alert error message
        errorInput(username, "Type a username!")
    } else {
        const formItem = username.parentElement;
        formItem.className = "form-content"
    }

    // console.log(usernameValue)
}


function checkInputEmail() {
    const emailValue = email.value;

    if (emailValue === "") {
        //show the alert error message
        errorInput(email, "Type your email!")
    } else {
        const formItem = email.parentElement;
        formItem.className = "form-content"
    }
}


function checkInputPassword() {
    const passwordValue = password.value;

    if (passwordValue === "") {
        //show the alert error message
        errorInput(password, "A password is mandatory!")
    } else if (passwordValue.length < 8){
        errorInput(password, "The at least 8 characters!")
    } else {
        const formItem = password.parentElement;
        formItem.className = "form-content"
    }
}


function checkInputconfirmpassword() {
    const passwordValue = password.value;
    const confirmpasswordValue = confirmpassword.value;

    if (confirmpasswordValue === "") {
        //show the alert error message
        errorInput(confirmpassword, "Password confirmation is mandatory!")
    } else if (confirmpasswordValue !== passwordValue) {
        errorInput(confirmpassword, "The passwords are not equals!")
    } else {
        const formItem = confirmpassword.parentElement;
        formItem.className = "form-content"
    }
}

function checkform() {
    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
    checkInputconfirmpassword();

    const formItens = form.querySelectorAll(".form-content")

    const isValid = [...formItens].every((item) => {
        return item.className === "form-content"
    });

    if(isValid) {
        alert ("Cadastro realizado com sucesso!")
    }

    console.log(isValid);

} 

function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "form-content error"
}