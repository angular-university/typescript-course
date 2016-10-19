

import {mapLesson, Lesson} from "./lesson";


export type Course = {

    readonly description: string,
    readonly url:  string,
    readonly longDescription: string,
    readonly iconUrl: string,
    readonly courseListIcon: string,
    readonly seqNo: number,
    readonly comingSoon: boolean,
    readonly isNew: boolean,
    readonly isOngoing: boolean,
    readonly lessons: Lesson[];

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