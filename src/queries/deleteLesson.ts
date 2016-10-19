


import {LessonModel} from "../model";

export function deleteLesson(id:string) {
    return LessonModel.destroy({
        where: {id}
    });
}

