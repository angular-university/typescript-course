
import * as ORM from "Sequelize";
import {Sequelize} from 'Sequelize';

const dbUrl = 'postgres://postgres:postgres@localhost:5432/complete-typescript-course';

const sequelize:Sequelize = new ORM(dbUrl);

const CourseModel =  sequelize.define('Course', {
   description: ORM.STRING,
    url:  ORM.STRING,
    longDescription: ORM.TEXT,
    iconUrl: ORM.STRING,
    courseListIcon: ORM.STRING,
    seqNo: ORM.INTEGER,
    comingSoon: ORM.BOOLEAN,
    isNew: ORM.BOOLEAN,
    isOngoing: ORM.BOOLEAN
});


CourseModel.findAll()
    .then(results => console.log(JSON.stringify(results)));



