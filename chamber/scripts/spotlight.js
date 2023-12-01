fetch('members.json')
.then(Response => Response.json())
.then(data => {
    const filteredMembers = data.companies.filter(company =>
        //member.status === 'silver' || member.status === 'gold');
        company.membershipLevel === 'silver' || company.membershipLevel === 'gold');

        const selectedMembers = [];
        for (let i = 0; i < Math.min(2, filteredMembers.length); i++) {
            const randomIndex = Math.floor(Math.random() * filteredMembers.length);
            selectedMembers.push(filteredMembers[randomIndex]);
            filteredMembers.splice(randomIndex, 1);
        }
        const spotlightContainer = document.getElementById('spotlight-container');
        selectedMembers.forEach(company => {
            const memberElement = document.createElement('div');
            memberElement.textContent = company.name;
            spotlightContainer.appendChild(memberElement);
        })
})