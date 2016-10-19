
import {Promise} from 'es6-promise';
import {CourseModel} from "../model";


export function findCourseDetail(courseId:number) {

    return CourseModel.findById(courseId);

}