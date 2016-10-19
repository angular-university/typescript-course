
import {Request, Response} from 'express';
import {findCourseDetail} from "../queries/findCourseDetail";
import {onSuccess} from "./onSuccess";
import {onError} from "./onError";
import * as _ from 'lodash';


export function apiGetCourseDetail(req:Request, res:Response) {

    const courseId = parseInt(req.params.id);

    findCourseDetail(courseId)
        .then(sortLessonsPerSeqNo)
        .then(_.partial(onSuccess, res))
        .catch( _.partial(onError, res, `Could not find course detail for id ${courseId}`) );

}



function sortLessonsPerSeqNo(result: any) {

    const course = result.dataValues;

    const courseWithSortedLessons = _.clone(course);

    courseWithSortedLessons.lessons = _.sortBy( course.Lessons, ['seqNo']);

    return Promise.resolve(courseWithSortedLessons);
}

