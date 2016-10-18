


import {CourseModel} from "./src/model";








function findAllLessons() {
    return CourseModel.findAll({
        order: ['seqNo']
    });
}


let lessons = findAllLessons();



lessons
    .then((data:any) => {

        console.log(data[0].dataValues);

    })
    .catch(console.error);


