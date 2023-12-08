var dados = {
    "rentalType": [
      {
        "vehicle": "Honda Metro Scooter",
        "maxPersons": "1",
        "reservation": [
          {
            "halfDay": "$2000",
            "fullDay": "$30"
          }
        ],
        "walkIn": [
          {
            "halfDay": "$25",
            "fullDay": "$35"
          }
        ]
      },
      {
        "vehicle": "Honda Dio Scooter",
        "maxPersons": "2",
        "reservation": [
          {
            "halfDay": "$30",
            "fullDay": "$40"
          }
        ],
        "walkIn": [
          {
            "halfDay": "$35",
            "fullDay": "$45"
        }
      ]
      },
        {
          "vehicle": "Honda PCX150 Scooter",
          "maxPersons": "2",
          "reservation": [
              {
                  "halfDay": "$40",
                  "fullDay": "$50"
              }
          ],
          "walkIn": [
              {
                  "halfDay": "$45",
                  "fullDay": "$55"
              }
          ]
        },
        {
          "vehicle": "Honda Pioneer ATV",
          "maxPersons": "4",
          "reservation": [
              {
                  "halfDay": "$50",
                  "fullDay": "$70"
              }
          ],
          "walkIn": [
              {
                  "halfDay": "$60",
                  "fullDay": "$80"
              }
          ]
        },
        {
          "vehicle": "Jeep Wrangler - 4 door with a/c",
          "maxPersons": "5",
          "reservation": [
              {
                  "halfDay": "$70",
                  "fullDay": "$100"
              }
          ],
          "walkIn": [
              {
                  "halfDay": "$85",
                  "fullDay": "$125"
              }
          ]
        },
        {
          "vehicle": "Jeep Wrangler - 2 door",
          "maxPersons": "4",
          "reservation": [
              {
                  "halfDay": "$60",
                  "fullDay": "$85"
              }
          ],
          "walkIn": [
              {
                  "halfDay": "$70",
                  "fullDay": "$90"
              }
        ]
      }
    ]
  };

  //var dados1 = "https://agc-solutions.github.io/wdd230/final-website-project/data/table.json";
  const dadosURL = "https://agc-solutions.github.io/wdd230/final-website-project/data/table.json";
  async function getTablerentData(dadosURL) {
    const response = await fetch(dadosURL);
    const data = await response.json();
    console.table(data.rentalType)
    displayTablerent(data.rentalType)
  }
  getTablerentData(dadosURL);

  //console.log(dados);





// //criar um elemento de tabela
// var table = document.createElement('table');
// // Cria o cabeçalho da tabela
// var thead = document.createElement('thead');
// var trHead = document.createElement('tr');
// var thHead = document.createElement('th');
// thHead.setAttribute('colspan', '6');
// trHead.appendChild(thHead);
// thead.appendChild(trHead);

// // Cria as colunas do cabeçalho
// var trColumns = document.createElement('tr');

// var thCol1 = document.createElement('th');
// thCol1.setAttribute('colspan', '2');
// thCol1.setAttribute('scope', 'col');
// thCol1.setAttribute('class', 'highlight');
// trColumns.appendChild(thCol1);

// var thCol2 = document.createElement('th');
// thCol2.setAttribute('colspan', '2');
// thCol2.setAttribute('scope', 'col');
// trColumns.appendChild(thCol2);

// var thCol3 = document.createElement('th');
// thCol3.setAttribute('colspan', '2');
// thCol3.setAttribute('scope', 'col');
// trColumns.appendChild(thCol3);

// thead.appendChild(trColumns);
// table.appendChild(thead);

// //adicione um texto ao cabeçalho
// thHead.textContent = "Max Rental Pricing"
// //adicione um texto à segunda linha e segunda coluna do cabeçalho
// thCol2.textContent = "Reservation"
// //adicione um texto à segunda linha e teceira coluna do cabeçalho
// thCol3.textContent = "Walk-In"

// // Cria o corpo da tabela
// var tbody = document.createElement('tbody');

// // Cria as linhas e células do corpo da tabela
// var trBody = document.createElement('tr');

// var tdCell1 = document.createElement('td');
// tdCell1.textContent = 'Rental Type';
// trBody.appendChild(tdCell1);

// var tdCell2 = document.createElement('td');
// tdCell2.textContent = 'Max Persons';
// trBody.appendChild(tdCell2);

// var tdCell3 = document.createElement('td');
// tdCell3.textContent = 'Half Day (3hs)';
// trBody.appendChild(tdCell3);

// var tdCell4 = document.createElement('td');
// tdCell4.textContent = 'Full Day';
// trBody.appendChild(tdCell4);

// var tdCell5 = document.createElement('td');
// tdCell5.textContent = 'Half Day (3hs)';
// trBody.appendChild(tdCell5);

// var tdCell6 = document.createElement('td');
// tdCell6.textContent = 'Full Day';
// trBody.appendChild(tdCell6);

// // var corpoTabela = tbody.createTBody();
// dados.rentalType.forEach(function(rental) {
//     //var linha = corpoTabela.insertRow();
//     var linha = trBody;
  
//     var coluna1 = linha.insertCell();
//     coluna1.textContent = rental.vehicle;
  
//     var coluna2 = linha.insertCell();
//     coluna2.textContent = rental.maxPersons;
  
//     var coluna3 = linha.insertCell();
//     coluna3.textContent = rental.reservation[0].halfDay;
  
//     var coluna4 = linha.insertCell();
//     coluna4.textContent = rental.reservation[0].fullDay;
//   });

// tbody.appendChild(trBody);
// table.appendChild(tbody);

// // Adiciona a tabela ao documento
// document.body.appendChild(table);
// document.body.appendChild(tabela);


var tabela = document.createElement("table");
var thead = document.createElement("thead");
var tbody = document.createElement("tbody");

var tr1 = document.createElement("tr");
var th1 = document.createElement("th");
th1.setAttribute("colspan", "6");
tr1.appendChild(th1);
th1.textContent = "Max Rental Pricing"

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


//dados.rentalType.forEach(function(rental) {
const displayTablerent = (rentalType) => {
    rentalType.forEach((rental => {

   

    var tr = document.createElement("tr");
    var td1 = document.createElement("td")
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





// var tr4 = document.createElement("tr");
// var td1 = document.createElement("td");
// // td1.innerText = "scooter";
// td1.innerText = dados.vehicle;
// tr4.appendChild(td1);
// var td2 = document.createElement("td");
// td2.innerText = `${1}`;
// tr4.appendChild(td2);
// var td3 = document.createElement("td");
// td3.innerText = `$${10}`;
// tr4.appendChild(td3);
// var td4 = document.createElement("td");
// td4.innerText = `$${20}`;
// tr4.appendChild(td4);
// var td5 = document.createElement("td");
// td5.innerText = `$${30}`;
// tr4.appendChild(td5);
// var td6 = document.createElement("td");
// td6.innerText = `$${40}`;
// tr4.appendChild(td6);

// var tr5 = document.createElement("tr");
// var td7 = document.createElement("td");
// td7.innerText = "moto";
// tr5.appendChild(td7);
// var td8 = document.createElement("td");
// td8.innerText = "1";
// tr5.appendChild(td8);
// var td9 = document.createElement("td");
// td9.innerText = "15";
// tr5.appendChild(td9);
// var td10 = document.createElement("td");
// td10.innerText = "25";
// tr5.appendChild(td10);
// var td11 = document.createElement("td");
// td11.innerText = "35";
// tr5.appendChild(td11);
// var td12= document.createElement("td");
// td12.innerText = "45";
// tr5.appendChild(td12);

// var tr6= document.createElement("tr");
// var td13= document.createElement("td");
// td13.innerText = "jetsky";
// tr6.appendChild(td13);
// var td14= document.createElement("td");
// td14.innerText = "2";
// tr6.appendChild(td14);
// var td15= document.createElement("td");
// td15.innerText = "50";
// tr6.appendChild(td15);
// var td16= document.createElement("td");
// td16.innerText = "60";
// tr6.appendChild(td16);
// var td17= document.createElement("td");
// td17.innerText = "70";
// tr6.appendChild(td17);
// var td18= document.createElement("td");
// td18.innerText = "80";
// tr6.appendChild(td18);

tbody.appendChild(tr);
// tbody.appendChild(tr5);
// tbody.appendChild(tr6);

thead.appendChild(tr1);
thead.appendChild(tr2);
thead.appendChild(tr3);

tabela.appendChild(thead);
tabela.appendChild(tbody);
}))
}
//});
document.body.appendChild(tabela);
