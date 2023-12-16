const rentform = document.querySelector('.rentform');
const form = document.createElement("form");

// DIV TO FULL NAME
const fullname = document.createElement("div");
fullname.classList.add("fullname");
//FIRST NAME
const fnameLabel = document.createElement("label");
fnameLabel.textContent = "First Name:";
const fnameInput = document.createElement("input");
fnameInput.type = "text";
fnameInput.name = "fname";
fnameInput.required = true;
fnameInput.placeholder = "Type your first name"
const fnameErr = document.createElement("span");
fnameErr.classList.add("error-message");
// form.appendChild(fnameLabel);
// form.appendChild(fnameInput);
//form.appendChild(fnameErr);
fullname.appendChild(fnameLabel);
fullname.appendChild(fnameInput);
fullname.appendChild(fnameErr);

//MIDLE NAME
const mnameLabel = document.createElement("label");
mnameLabel.textContent = "Midle Name:";
const mnameInput = document.createElement("input");
mnameInput.type = "text";
mnameInput.name = "mname";
mnameInput.placeholder = "Type your midle name"
// form.appendChild(mnameLabel);
// form.appendChild(mnameInput);
fullname.appendChild(mnameLabel);
fullname.appendChild(mnameInput);
//LAST NAME
const lnameLabel = document.createElement("label");
lnameLabel.textContent = "Last Name:";
const lnameInput = document.createElement("input");
lnameInput.type = "text";
lnameInput.name = "lname";
lnameInput.required = true;
lnameInput.placeholder = "Type your last name"
const lnameErr = document.createElement("span");
lnameErr.classList.add("error-message");
//form.appendChild(lnameLabel);
fullname.appendChild(lnameLabel);
//form.appendChild(lnameInput);
fullname.appendChild(lnameInput);
//form.appendChild(lnameErr);
fullname.appendChild(lnameErr);
//form.appendChild(fullname);
form.appendChild(fullname);

const fullinfo = document.createElement("div");
fullinfo.classList.add("fullinfo");
//PHONE NUMBER
const phoneLabel = document.createElement("label");
phoneLabel.textContent = "Phone Number:";
const phoneInput = document.createElement("input");
phoneInput.type = "tel";
phoneInput.name = "phone";
phoneInput.required = true;
phoneInput.placeholder = "123456789"
// form.appendChild(phoneLabel);
// form.appendChild(phoneInput);
fullinfo.appendChild(phoneLabel);
fullinfo.appendChild(phoneInput);
//EMAIL
const emailLabel = document.createElement("label");
emailLabel.textContent = "email:";
const emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.name = "email";
emailInput.required = true;
emailInput.placeholder = "youremail@provider"
// form.appendChild(emailLabel);
// form.appendChild(emailInput);
fullinfo.appendChild(emailLabel);
fullinfo.appendChild(emailInput);
//COUNTRY
const countryLabel = document.createElement("label");
countryLabel.textContent = "Country:";
const countryInput = document.createElement("input");
countryInput.type = "country";
countryInput.name = "country";
countryInput.required = true;
countryInput.placeholder = "Type your Country"
// form.appendChild(countryLabel);
// form.appendChild(countryInput);
fullinfo.appendChild(countryLabel);
fullinfo.appendChild(countryInput);

form.appendChild(fullinfo);



const submitButton = document.createElement("input");
submitButton.type = "submit";
submitButton.value = "send";

form.appendChild(submitButton);


rentform.appendChild(form);
// const mname = document.createElement("mname");
// const lname = document.createElement("lname");
// const email = document.createElement("email");
// const phone = document.createElement("phone");
// const country = document.createElement("country");

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

// title.addEventListener("blur", () => {
//     checkInputtitle();
// })

phone.addEventListener("blur", () => {
    checkInputphone();
})

// orgname.addEventListener("blur", () => {
//     checkInputorgname();
// })

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



// function checkInputtitle() {
//     const titleValue = title.value;

//     if (titleValue === "") {
//         //show the alert error message
//         errorInput(title, "Type alpha, hyphens, spaces with at least 7 characters ")
//     } else if (titleValue.length < 7){
//         // alert("Type just alpha characters, hyphens, and spaces with at least 7 characters ")
//         errorInput(title, "Type at least 7 characters!")
//     } else {
//         const formItem = title.parentElement;
//         formItem.className = "form-content"
//     }
// }

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

// function checkInputorgname() {
//     const orgnameValue = orgname.value;

//     if (orgnameValue === "") {
//         //show the alert error message
//         errorInput(orgname, "A orgname is mandatory!")
//     } else {
//         const formItem = orgname.parentElement;
//         formItem.className = "form-content"
//     }
// }


function checkform() {
    checkInputfname();
    checkInputlname();
    checkInputEmail();
    // checkInputPassword();
    // checkInputconfirmpassword();

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
    const textMessage = formItem.querySelector("span")

    textMessage.innerText = message;

    formItem.className = "form-content error"
}

document.getElementById("timestamp").value= new Date().toISOString();

