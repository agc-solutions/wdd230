//const baseURL = "https://agc-solutions.github.io/wdd230/";
const directoryURL = "https://agc-solutions.github.io/wdd230/chamber/data/members.json";

const business = document.querySelector('#business');

async function getCompanyData (directoryURL) {
    const response = await fetch(directoryURL);
    const data = await response.json();
    console.table(data.companies);
    displayCompanies(data.companies);
}

getCompanyData(directoryURL);

const displayCompanies = (companies) => {
    companies.forEach((company => {
        let partner = document.createElement('section');
        let name = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('url');
        let address = document.createElement('p');
        let portrait = document.createElement('img');
        name.textContent = `${company.name}`;
        phone.textContent = company.phone;
        address.textContent = company.address;
        //portrait.setAttribute('icon', company.icon);
        portrait.setAttribute('src', company.icon);
        portrait.setAttribute('alt', `Icon of: ${company.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '150');
        portrait.setAttribute('height', '150');

        // portrait.setAttribute('name', `Logo of ${company.name}`);
        //console.log(data)

        partner.appendChild(portrait);
        partner.appendChild(name);
        partner.appendChild(phone);
        partner.appendChild(address);
        

        business.appendChild(partner);

        
        
    }));
    
}

    


//const directory = 'data/members.json';
// fetch(directoryURL).then((Response) => {
//     Response.json().then((members) => {
//         members.companies.map((company) => {
//             companies.innerHTML += `<li> ${company.name} - ${company.address}</li>`
//             let portrait = document.createElement('img');             
//             portrait.setAttribute('src', company.icon);
//             portrait.setAttribute('alt', `Icon of ${company.name}`);
            
//         })
        
        
//         // console.log(companies)
//     })
// })