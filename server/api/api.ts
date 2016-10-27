
import {Application} from "express";
import {apiGetAllCourses} from "./apiGetAllCourses";
import {apiGetCourseDetail} from "./apiGetCourseDetail";
import {apiCreateLesson} from "./apiCreateLesson";
import {apiPatchLesson} from "./apiPatchLesson";
import {apiDeleteLesson} from "./apiDeleteLesson";



export function initRestApi(app:Application) {

    app.route('/api/courses').get(apiGetAllCourses);
    app.route('/api/courses/:id').get(apiGetCourseDetail);


    app.route('/api/lesson').post(apiCreateLesson);
    app.route('/api/lesson/:id').patch(apiPatchLesson);
    app.route('/api/lesson/:id').delete(apiDeleteLesson);

}