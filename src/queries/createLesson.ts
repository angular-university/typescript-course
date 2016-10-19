




import {LessonModel} from "../model";

export function createLesson(id:string, props: any) {
    return LessonModel.findOrCreate({
        where: {id},
        defaults: props
    });
}



