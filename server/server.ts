
import {findAllCourses} from "./queries/findAllCourses";

import * as express from 'express';
import {Application} from "express";


const app: Application = express();


app.route('/api/courses').get( (req,res) => {

    findAllCourses()
        .then(results => {

            res.status(200).json(results);

        });



});


app.listen(8090, () => {
    console.log('Server is running ...');
});








