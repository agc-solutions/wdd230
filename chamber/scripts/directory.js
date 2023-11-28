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
        let name = document.createElement('h3');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let address = document.createElement('p');
        let portrait = document.createElement('img');
        let memberLevel = document.createElement('p');
        memberLevel.setAttribute("id", "level");
        let memberInfo = document.createElement('p');
        memberInfo.setAttribute("id", "info");
        let memberID = document.createElement('p');

        name.textContent = `${company.name}`;
        phone.textContent = `+${company.phone}`;
        address.textContent = company.address;
        website.textContent = company.website;
        website.setAttribute('href', `https://${company.website}`);
        website.setAttribute('target', '_blank');
        website.setAttribute('loading', 'lazy')
        //portrait.setAttribute('icon', company.icon);
        portrait.setAttribute('src', company.icon);
        portrait.setAttribute('alt', `Icon of: ${company.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '150');
        portrait.setAttribute('height', '150');

        memberLevel.textContent = `Membership Level: ${company.membershipLevel}`;
        memberInfo.textContent = company.info;

        // portrait.setAttribute('name', `Logo of ${company.name}`);
        //console.log(data)

        partner.appendChild(portrait);
        partner.appendChild(name);
        partner.appendChild(phone);
        partner.appendChild(address);
        partner.appendChild(memberLevel);
        partner.appendChild(memberInfo);
        partner.appendChild(website);

        

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