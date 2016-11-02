

const heroes = ["Superman", "Batman", "Green Lantern", "Wonder Woman", "Flash"];


function cloneArray(array:any[]): any[] {
    return array.slice(0);
}



const clones = cloneArray(heroes);


console.log("Printing clones", clones);

