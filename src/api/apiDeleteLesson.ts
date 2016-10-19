
import {Request, Response} from 'express';
import {onError} from "./onError";
import {onSuccess} from "./onSuccess";
import {deleteLesson} from "../queries/deleteLesson";
import * as _ from 'lodash';

export function apiDeleteLesson(req:Request, res:Response) {

    const lessonId = req.params.id;

    deleteLesson(lessonId, req.body)
        .then(_.partial(onSuccess, res))
        .catch( _.partial(onError, res, `Could not delete lesson ${lessonId}`) );

}