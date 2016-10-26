

import {buildPersonData} from "./buildPersonData";
import * as _ from 'lodash';

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

