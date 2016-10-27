
import {Application} from "express";
import {apiGetAllCourses} from "./apiGetAllCourses";
import {apiGetCourseDetail} from "./apiGetCourseDetail";



export function initRestApi(app:Application) {

    app.route('/api/courses').get(apiGetAllCourses);

    app.route('/api/courses/:id').get(apiGetCourseDetail);


}