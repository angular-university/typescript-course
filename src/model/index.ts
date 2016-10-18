
import Sequelize = require("Sequelize");
import {LoggingOptions} from 'sequelize';
import {initCourseModel} from "./init-course-model";
import {initLessonModel} from "./init-lesson-model";


const loggingConfig: LoggingOptions = {benchmark:true, logging:console.log};

const dbUrl = 'postgres://postgres:postgres@localhost:5432/complete-typescript-course';

export const sequelize = new Sequelize(dbUrl, loggingConfig);


export const CourseModel = initCourseModel(sequelize);

export const LessonModel = initLessonModel(sequelize);
