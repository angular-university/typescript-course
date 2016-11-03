
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

const clones = cloneArray(heroes);

console.log("Clones", clones);