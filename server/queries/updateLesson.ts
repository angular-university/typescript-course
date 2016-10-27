

import {LessonModel} from "../model/model";
const hri = require('human-readable-ids').hri;

export function updateLesson(id:string, props: any) {

    return LessonModel.update(
        props,
        {
            where: {id}
        }
    );


}