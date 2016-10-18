
import * as express from 'express';
import * as path from 'path';

const port = 8090;

const app = express();


let root = path.join(path.resolve(__dirname, '.'));


app.use(express.static(root));




app.listen(port, () => {
    console.log('Listen on port:' + port + ' at ' + new Date());
});






