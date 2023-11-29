const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const title = document.getElementById("title");
const phone = document.getElementById("phone");
const orgname = document.getElementById("orgname");

form.addEventListener("submit", (Event) => {
    Event.preventDefault();
    
    checkform();

})

fname.addEventListener("blur", () => {
    checkInputfname();
})

lname.addEventListener("blur", () => {
    checkInputlname();
})

email.addEventListener("blur", () => {
    checkInputEmail();
})

title.addEventListener("blur", () => {
    checkInputtitle();
})

phone.addEventListener("blur", () => {
    checkInputphone();
})

orgname.addEventListener("blur", () => {
    checkInputorgname();
})

function checkInputfname() {
    const fnameValue = fname.value;

    if (fnameValue === "") {
        //show the alert error message
        errorInput(fname, "Type your first name!")
    } else {
        const formItem = fname.parentElement;
        formItem.className = "form-content"
    }

}

function checkInputlname() {
    const lnameValue = lname.value;

    if (lnameValue === "") {
        //show the alert error message
        errorInput(lname, "Type your last name!")
    } else {
        const formItem = lname.parentElement;
        formItem.className = "form-content"
    }

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



function checkInputtitle() {
    const titleValue = title.value;

    if (titleValue === "") {
        //show the alert error message
        errorInput(title, "Type alpha, hyphens, spaces with at least 7 characters ")
    } else if (titleValue.length < 7){
        // alert("Type just alpha characters, hyphens, and spaces with at least 7 characters ")
        errorInput(title, "Type at least 7 characters!")
    } else {
        const formItem = title.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputphone() {
    const phoneValue = phone.value;

    if (phoneValue === "") {
        //show the alert error message
        errorInput(phone, "A phone is mandatory!")
    } else {
        const formItem = phone.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputorgname() {
    const orgnameValue = orgname.value;

    if (orgnameValue === "") {
        //show the alert error message
        errorInput(orgname, "A orgname is mandatory!")
    } else {
        const formItem = orgname.parentElement;
        formItem.className = "form-content"
    }
}


function checkform() {
    checkInputfname();
    checkInputlname();
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

    //console.log(isValid);

} 

function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "form-content error"
}

document.getElementById("timestamp").value= new Date().toISOString();