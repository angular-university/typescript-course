

import {CourseModel} from "../model/model";
import {CourseSummary} from "../../shared/model/course-summary";

export function findAllCourses() : Promise<CourseSummary[]>  {
    return CourseModel.findAll({
        order: ['seqNo']
    })
}