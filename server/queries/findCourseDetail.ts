

import {CourseModel, LessonModel} from "../model/model";

export function findCourseDetail(courseId:number) {

    return CourseModel.findById(courseId, {
        include: [
            {
                model: LessonModel
            }
        ]
    });
}