
import {Promise} from 'es6-promise';
import {CourseModel, LessonModel} from "../model";


export function findCourseDetail(courseId:number) {

    return CourseModel.findById(courseId, {
        include: [
            {
                model: LessonModel
            }
        ]
    });

}