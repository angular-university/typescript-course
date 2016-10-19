
import Sequelize = require("Sequelize");
import {LoggingOptions} from 'sequelize';
import {initCourseModel} from "./initCourseModel";
import {initLessonModel} from "./initLessonModel";


const loggingConfig: LoggingOptions = {benchmark:true, logging:console.log};

const dbUrl = 'postgres://postgres:postgres@localhost:5432/complete-typescript-course';

const sequelize = new Sequelize(dbUrl, loggingConfig);


export const CourseModel:any = initCourseModel(sequelize);

export const LessonModel:any = initLessonModel(sequelize);


CourseModel.hasMany(LessonModel, {foreignKey: 'courseId'});

LessonModel.belongsTo(CourseModel, {foreignKey: 'courseId'});