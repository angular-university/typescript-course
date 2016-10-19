
import {Request, Response} from 'express';
import {createLesson} from "../queries/createLesson";
import {onSuccess} from "./onSuccess";
import {onError} from "./onError";


export function apiCreateLesson(req:Request, res:Response) {

    const lessonId = req.params.id;

    createLesson(lessonId, req.body)
        .then(_.partial(onSuccess, res))
        .catch( _.partial(onError, res, `Could not create lesson ${lessonId}`) );

}