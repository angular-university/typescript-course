

import {CourseModel, LessonModel} from "../model";
import Bluebird = require("bluebird");
import * as _ from 'lodash';
import {mapLesson} from "../../shared/model/lesson";


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
    .then(({description, url, longDescription, iconUrl, courseListIcon, seqNo, comingSoon, isNew, isOngoing, Lessons}:any) => {

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
                lessons: Lessons.map((lesson:any) => mapLesson(lesson) )
            };

            return Promise.resolve(course);

        }
    );

}




