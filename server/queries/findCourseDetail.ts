

import {CourseModel, LessonModel} from "../model/model";
import * as Bluebird from "bluebird";
import {CourseDetail} from "../../shared/model/course-detail";
import {createCourseDetail} from "../../shared/model/createCourseDetail";


export function findCourseDetail(courseId:number): Bluebird<CourseDetail> {

    return CourseModel.findById(courseId, {
        include: [
            {
                model: LessonModel
            }
        ]
    })
    .then(createCourseDetail);
}