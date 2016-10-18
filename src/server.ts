
import * as express from 'express';

import * as path from 'path';
import {initApi} from "./api/api";
import {apiErrorHandler} from "./api/apiErrorHandler";
var bodyParser = require('body-parser');





const port = 8090;

const app = express();


let root = path.join(path.resolve(__dirname, '.'));


app.use(bodyParser.json());
app.use(express.static(root));

initApi(app);


app.use(apiErrorHandler);







app.listen(port, () => {
    console.log('Listen on port:' + port + ' at ' + new Date());
});






