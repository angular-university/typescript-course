
import {Lesson} from "./lesson";

export interface Course {

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