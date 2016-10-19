

import {mapLesson} from "./lesson";
import {Lesson} from "../../../angular-academy.io/src/app/screens/lesson/lesson";

export type Course = {

    description: string,
    url:  string,
    longDescription: string,
    iconUrl: string,
    courseListIcon: string,
    seqNo: number,
    comingSoon: boolean,
    isNew: boolean,
    isOngoing: boolean,
    lessons: Lesson[];

}

export function mapCourseAndLessons({description, url, longDescription, iconUrl, courseListIcon, seqNo, comingSoon, isNew, isOngoing, Lessons}:any): Course {
    return {
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
}