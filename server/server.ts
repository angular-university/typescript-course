
import {findAllCourses} from "./queries/findAllCourses";

import * as express from 'express';
import {Application} from "express";
import {initRestApi} from "./api/api";


const app: Application = express();


initRestApi(app);


app.listen(8090, () => {
    console.log('Server is now running on port 8090 ...');
});








