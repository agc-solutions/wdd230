const directory = 'data/members.json';

const companies = document.querySelector("#companies")

fetch(directory).then((Response) => {
    Response.json().then((members) => {
        members.companies.map((company) => {
            companies.innerHTML += `<li> ${company.name} - ${company.address}</li>`
            let portrait = document.createElement('img');             
            portrait.setAttribute('src', company.icon);
            portrait.setAttribute('alt', `Icon of ${company.name}`);
            
        })
        
        
        // console.log(companies)
    })
})



// async function getCompaniesData (directory) {
//     const response = await fetch(directory);
//     const data = await response.json();
//     console.table(companies);
//     displayCompanies(companies);
// }

// getCompaniesData(directory);

// const displayCompanies = (companies) => {
//     companies.forEach((company => {
//         let company = document.createElement('section');
//         let name = document.createElement('__');
//         let portrait = document.createElement('img');

//         name.textContent = `${company.name}`;

//         portrait.setAtribute('icon', company.icon);
//         portrait.setAtribute('name', `Logo of ${company.name}`);

//         company.appendChild(name);
//         company.appendChild(portrait);

//         companies.appendChild(company);
        
//     }));
// }