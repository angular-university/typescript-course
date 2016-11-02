
enum Editor {
    MARVEL,
    DC
}

class SuperHero {

    readonly name:string;

    constructor(
        name:string,
        public editor:Editor,
        public creationYear: number) {
        this.name = name;
    }
}


const superman = new SuperHero('Superman',Editor.DC, 1938);

superman.name = 'Spiderman';

console.log(`
    Super hero: 
    ${superman.name} 
    ${Editor[superman.editor]} 
    ${superman.creationYear}
`);

console.log("Superman",superman);
