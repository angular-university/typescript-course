
import {Application} from "express";
import {apiGetAllCourses} from "./apiGetAllCourses";



export function initRestApi(app:Application) {

    app.route('/api/courses').get(apiGetAllCourses);


}