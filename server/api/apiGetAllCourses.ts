
import {Request, Response} from 'express';


import {findAllCourses} from "../queries/findAllCourses";


export function apiGetAllCourses(req:Request, res:Response) {

    findAllCourses()
        .then(results => {

            res.status(200).json({results});

        });



}