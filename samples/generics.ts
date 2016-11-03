
interface HasName {
    name:string;
}

const heroes: HasName[]  = [
    {name:"Superman"},
    {name:"Batman"},
    {name:"Green Lantern"},
    {name:"Wonder Woman"},
    {name:"Flash"}
];

function cloneArray<T>(array: T[]): T[] {
    return array.slice(0);
}

const numbers = [0,1,2];

const clones = cloneArray(heroes);

const clonedNumber = cloneArray(numbers);

console.log("Clones", clones);