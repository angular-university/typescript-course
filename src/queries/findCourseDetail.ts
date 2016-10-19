

import {CourseModel, LessonModel} from "../model";


export function findCourseDetail(courseId:number) {

    return CourseModel.findById(courseId, {
        include: [
            {
                model: LessonModel
            }
        ],
        order: [
            [ LessonModel, 'seqNo' , 'ASC']
        ]
    });

}