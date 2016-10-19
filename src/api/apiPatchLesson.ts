
import {Request, Response} from 'express';
import {onSuccess} from "./onSuccess";
import {onError} from "./onError";
import {updateLesson} from "../queries/updateLesson";
import * as _ from 'lodash';






export function apiPatchLesson(req:Request, res:Response) {

    const lessonId = req.params.id;

    updateLesson(lessonId, req.body)
        .then(_.partial(onSuccess, res))
        .catch( _.partial(onError, res, "Could not update lesson") );
}



