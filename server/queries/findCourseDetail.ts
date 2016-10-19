

import {CourseModel, LessonModel} from "../model";
import Bluebird = require("bluebird");
import * as _ from 'lodash';
import {Course, mapCourseAndLessons} from "../../shared/model/course";




export function findCourseDetail(courseId:number): Bluebird<Course | null> {
    return CourseModel.findById(courseId, {
        include: [
            {
                model: LessonModel
            }
        ],
        order: [
            [ LessonModel, 'seqNo' , 'ASC']
        ]
    })
    .then(result => {
            return Promise.resolve(mapCourseAndLessons(result));
        }
    );

}






