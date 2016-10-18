


import {findAllLessons} from "./src/queries/findAllLessons";



let lessons = findAllLessons();




lessons
    .then((data:any) => {

        console.log(data[0].dataValues);

    })
    .catch(console.error);


