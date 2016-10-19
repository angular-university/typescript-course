

import {CourseModel, LessonModel} from "../model";
import Bluebird = require("bluebird");



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
    .then(({description, url, longDescription, iconUrl, courseListIcon, seqNo, comingSoon, isNew, isOngoing}:any) => {

            const course : Course = {
                description,
                url,
                longDescription,
                iconUrl,
                courseListIcon,
                seqNo,
                comingSoon,
                isNew,
                isOngoing,
                lessons: []
            };

            return Promise.resolve(course);

        }
    );

}


