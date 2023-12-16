const table2 = document.querySelector('#table2');

const tableURL = "https://agc-solutions.github.io/wdd230/final-website-project/data/table.json";
async function getTableRentData(tableURL) {
    const response = await fetch(tableURL);
    const data = await response.json();
    displayTableRent(data.rentalType)
  }
  getTableRentData(tableURL);

//create table
var table = document.createElement("table");
//create table header
var thead = document.createElement("thead");
//create table body
var tbody = document.createElement("tbody");

var tr1 = document.createElement("tr");
var th1 = document.createElement("th");
th1.setAttribute("colspan", "6");
th1.textContent = "Max Rental Pricing";

var tr2 = document.createElement("tr");
var th2_1 = document.createElement("th");
th2_1.setAttribute("colspan", "2");
th2_1.setAttribute("scope", "col");
th2_1.setAttribute("class", "highlight");
tr2.appendChild(th2_1);

var th2_2 = document.createElement("th");
th2_2.setAttribute("colspan", "2");
th2_2.setAttribute("scope", "col");
tr2.appendChild(th2_2);
th2_2.textContent = "Reservation";

var th2_3 = document.createElement("th");
th2_3.setAttribute("colspan", "2");
th2_3.setAttribute("scope", "col");
tr2.appendChild(th2_3);
th2_3.textContent = "Walk-In";

var tr3 = document.createElement("tr");
var th3 = document.createElement("th");
th3.setAttribute("scope", "col");
th3.innerText = "Rental Type";
tr3.appendChild(th3);

var th4 = document.createElement("th");
th4.setAttribute("scope", "col");
th4.innerText = "Max Person";
tr3.appendChild(th4);

var th5 = document.createElement("th");
th5.setAttribute("scope", "col");
th5.innerText = "Half-Day (3hrs)";
tr3.appendChild(th5);

var th6 = document.createElement("th");
th6.setAttribute("scope", "col");
th6.innerText = "Full Day";
tr3.appendChild(th6);

var th7 = document.createElement("th");
th7.setAttribute("scope", "col");
th7.innerText = "Half-Day (3hrs)";
tr3.appendChild(th7);

var th8 = document.createElement("th");
th8.setAttribute("scope", "col");
th8.innerText = "Full Day";
tr3.appendChild(th8);

const displayTableRent = (rentalType) => {
  rentalType.forEach((rental => {

    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerText = rental.vehicle;
    tr.appendChild(td1);
    var td2 = document.createElement("td");
    td2.innerText = rental.maxPersons;
    tr.appendChild(td2);
    
    var td3 = document.createElement("td");
    td3.innerText = rental.reservation[0].halfDay;
    tr.appendChild(td3);
    
    var td4 = document.createElement("td");
    td4.innerText = rental.reservation[0].fullDay;
    tr.appendChild(td4);
    
    var td5 = document.createElement("td");
    td5.innerText = rental.walkIn[0].halfDay;
    tr.appendChild(td5);

    var td6 = document.createElement("td");
    td6.innerText = rental.walkIn[0].fullDay;
    tr.appendChild(td6);

    tbody.appendChild(tr);

    thead.appendChild(tr1);
    thead.appendChild(tr2);
    thead.appendChild(tr3);

    table.appendChild(thead);
    table.appendChild(tbody);
  }))
}
// document.body.appendChild(table);
table2.appendChild(table);
