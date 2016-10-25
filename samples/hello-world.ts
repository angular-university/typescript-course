

import {buildPersonData} from "./buildPersonData";


const partialAddress = ["Street Name",
    "Street Number", "Po Box"];

const firstName = 'Kobe',
     lastName = 'Bryant';

const personData = {
    firstName,
    lastName
};

const address = [...partialAddress, 'Staples Center'];

console.log(buildPersonData(personData, address));

