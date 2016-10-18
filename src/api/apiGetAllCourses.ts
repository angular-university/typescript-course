
import {Request, Response} from 'express';
import {findAllCourses} from "../queries/findAllCourses";





export function apiGetAllCourses(req:Request, res:Response) {
    findAllCourses()
        .then((data:any) => {
            res.status(200).json(data);

        });
}
