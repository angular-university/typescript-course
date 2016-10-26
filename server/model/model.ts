
import * as ORM from "Sequelize";
import {Sequelize, LoggingOptions} from 'Sequelize';
import {initCourseModel} from "./initCourseModel";



const dbUrl = 'postgres://postgres:postgres@localhost:5432/complete-typescript-course';

const options: LoggingOptions = {benchmark: true, logging:console.log};

const sequelize:Sequelize = new ORM(dbUrl, options);



export const CourseModel =  initCourseModel(sequelize);
