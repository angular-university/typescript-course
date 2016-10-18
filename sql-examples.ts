

import Sequelize = require("Sequelize");




const loggingConfig = {benchmark:true, logging:console.log};

const dbUrl = 'postgres://postgres:postgres@localhost:5432/complete-typescript-course';


export const sequelize = new Sequelize(dbUrl, loggingConfig);



const CourseModel = sequelize.define('Course', {
    description: Sequelize.STRING,
    url:  Sequelize.STRING,
    longDescription: Sequelize.TEXT,
    iconUrl: Sequelize.STRING,
    courseListIcon:Sequelize.STRING,
    seqNo: Sequelize.INTEGER,
    comingSoon: Sequelize.BOOLEAN,
    isNew: Sequelize.BOOLEAN,
    isOngoing: Sequelize.BOOLEAN,
    visibleFrom: Sequelize.DATE
}, {
    classMethods: {
        associate: function (models:any) {
            models.Course.hasMany(models.Lesson, {foreignKey: 'courseId'});
        }
    }
});







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


