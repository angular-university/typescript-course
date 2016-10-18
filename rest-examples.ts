
import * as express from 'express';
import * as path from 'path';
var bodyParser = require('body-parser');


const port = 8090;

const app = express();


let root = path.join(path.resolve(__dirname, '.'));


app.use(bodyParser.json());
app.use(express.static(root));


function apiGetAllCourses(req: express.Request, res: express.Response) {

    res.status(200).send();


}


app.route('/api/courses').get(apiGetAllCourses);






app.listen(port, () => {
    console.log('Listen on port:' + port + ' at ' + new Date());
});






