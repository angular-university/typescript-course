

import Sequelize = require("Sequelize");
import {initCourseModel} from "./src/model/init-course-model";
import {LoggingOptions} from 'sequelize';




const loggingConfig: LoggingOptions = {benchmark:true, logging:console.log};

const dbUrl = 'postgres://postgres:postgres@localhost:5432/complete-typescript-course';


export const sequelize = new Sequelize(dbUrl, loggingConfig);


const CourseModel = initCourseModel(sequelize);



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


