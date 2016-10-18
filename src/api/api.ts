

import {apiGetAllCourses} from "./apiGetAllCourses";
import {Application} from "express";


export function initApi(app: Application) {

    app.route('/api/courses').get(apiGetAllCourses);

}