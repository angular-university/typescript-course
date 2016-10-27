
import {Request, Response} from 'express';
import * as _ from 'lodash';
import {findAllCourses} from "../queries/findAllCourses";
import {onError} from "./onError";
import {onSuccess} from "./onSuccess";



export function apiGetAllCourses(req:Request, res:Response) {

    findAllCourses()
        .then(_.partial(onSuccess,res))
        .catch(_.partial(onError, res, "Find All Courses Failed"));
}

