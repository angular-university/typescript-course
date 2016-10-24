

function buildPersonData(personData) {
    return personData.firstName + ' ' +
        personData.lastName + ' ' +
        personData.address;
}



const personData = {
  firstName: 'Kobe',
  lastName: 'Bryant',
  address: 'Staples Center'
};


buildPersonData(personData);

