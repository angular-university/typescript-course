

import {findAllCourses} from "./src/queries/findAllCourses";


let lessons = findAllCourses();




lessons
    .then((data:any) => {

        console.log(data[0].dataValues);

    })
    .catch(console.error);


