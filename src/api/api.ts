

import {apiGetAllCourses} from "./apiGetAllCourses";
import {Application} from "express";
import {apiGetCourseDetail} from "./apiGetCourseDetail";
import {apiPatchLesson} from "./apiPatchLesson";
import {apiDeleteLesson} from "./apiDeleteLesson";
import {apiCreateLesson} from "./apiCreateLesson";


export function initApi(app: Application) {

    app.route('/api/courses').get(apiGetAllCourses);
    app.route('/api/courses/:id').get(apiGetCourseDetail);


    app.route('/api/lesson/:id').patch(apiPatchLesson);
    app.route('/api/lesson/:id').delete(apiDeleteLesson);
    app.route('/api/lesson/:id').post(apiCreateLesson);


}