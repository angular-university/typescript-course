
import {CourseModel} from "../model";

export function findAllCourses() {
    return CourseModel.findAll({
        order: ['seqNo']
    });
}
