

import {Lesson} from "./lesson";

export interface Course {
    description: string,
    readonly url: string,
    longDescription: string,
    iconUrl: string,
    courseListIcon: string,
    seqNo: number,
    comingSoon?: boolean,
    isNew?: boolean,
    isOngoing?: boolean,
    lessons: Lesson[]
}

