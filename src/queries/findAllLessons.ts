
import {CourseModel} from "../model";

export function findAllLessons() {
    return CourseModel.findAll({
        order: ['seqNo']
    });
}
