

import ORM = require("Sequelize");
import {Sequelize} from 'Sequelize';




export function initCourseModel(sequelize:Sequelize) {
    return sequelize.define('Course', {
        description: ORM.STRING,
        url:  ORM.STRING,
        longDescription: ORM.TEXT,
        iconUrl: ORM.STRING,
        courseListIcon: ORM.STRING,
        seqNo: ORM.INTEGER,
        comingSoon: ORM.BOOLEAN,
        isNew: ORM.BOOLEAN,
        isOngoing: ORM.BOOLEAN,
        visibleFrom: ORM.DATE
    }, {
        classMethods: {
            associate: function (models:any) {
                models.Course.hasMany(models.Lesson, {foreignKey: 'courseId'});
            }
        }
    });
}