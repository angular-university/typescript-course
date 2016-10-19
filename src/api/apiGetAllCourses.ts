
import {Request, Response} from 'express';
import {findAllCourses} from "../queries/findAllCourses";
import * as _ from 'lodash';
import {onSuccess} from "./onSuccess";
import {onError} from "./onError";






export function apiGetAllCourses(req:Request, res:Response) {
        findAllCourses()
            .then(_.partial(onSuccess, res))
            .catch( _.partial(onError, res, "Could not find all courses") );
}
