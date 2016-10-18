
import * as express from 'express';
import {Request, Response} from 'express';
import * as path from 'path';
import {findAllCourses} from "./src/queries/findAllCourses";
var bodyParser = require('body-parser');





const port = 8090;

const app = express();


let root = path.join(path.resolve(__dirname, '.'));


app.use(bodyParser.json());
app.use(express.static(root));




function apiGetAllCourses(req:Request, res:Response) {
    findAllCourses()
        .then((data:any) => {
            res.status(200).json(data);

        })
        .catch(() => {
            res.status(500).send();
        });
}




app.route('/api/courses').get(apiGetAllCourses);






app.listen(port, () => {
    console.log('Listen on port:' + port + ' at ' + new Date());
});






