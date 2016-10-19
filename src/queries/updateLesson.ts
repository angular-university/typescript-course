



import {LessonModel} from "../model";


export function updateLesson(id:string, updatedProperties: any) {
    return LessonModel.update(updatedProperties, {where: {id}});
}