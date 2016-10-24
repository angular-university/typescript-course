

function buildPersonData({firstName, lastName, address}) {
    return `${firstName} ${lastName} ${address}`;
}


const firstName = 'Kobe',
     lastName = 'Bryant',
     address = 'Staples Center';


const personData = {
    firstName,
    lastName,
    address
};


buildPersonData(personData);

