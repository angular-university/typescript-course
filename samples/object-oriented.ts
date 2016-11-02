
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

    createMessage() {
        return `
            Super hero: 
            ${this.name} 
            ${Editor[this.editor]} 
            ${this.creationYear}
        `;
    }

}


const superman = new SuperHero('Superman',Editor.DC, 1938);

console.log(superman.createMessage());

