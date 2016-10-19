
import {mapLesson} from "./lesson-utils";
import {Course} from "./course";

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



