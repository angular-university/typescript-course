
import {Request, Response} from 'express';
import {findAllCourses} from "../queries/findAllCourses";





export function apiGetAllCourses(req:Request, res:Response) {

    throw new Error("Error occurred");

    /*

    findAllCourses()
        .then((data:any) => {
            res.status(200).json(data);

        });

    */
}
