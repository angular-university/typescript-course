
import {Application} from "express";
import {apiGetAllCourses} from "./apiGetAllCourses";
import {apiGetCourseDetail} from "./apiGetCourseDetail";
import {apiCreateLesson} from "./apiCreateLesson";



export function initRestApi(app:Application) {

    app.route('/api/courses').get(apiGetAllCourses);
    app.route('/api/courses/:id').get(apiGetCourseDetail);


    app.route('/api/lesson').post(apiCreateLesson);

}