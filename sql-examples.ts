

import {findAllCourses} from "./src/queries/findAllCourses";


let courses = findAllCourses();


courses
    .then((data:any) => {

        console.log(data[0].dataValues);

    })
    .catch(console.error);


