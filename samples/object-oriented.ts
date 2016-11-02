
enum Editor {
    MARVEL,
    DC
}


class SuperHero {

    readonly name:string;

    constructor(
        name:string,
        public editor:Editor,
        protected creationYear: number) {
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

class FlyingHero extends SuperHero {

    fly(message:string) {
        console.log(message + this.creationYear);
    }

    createMessage() {
        return `
            Flying Hero: 
            ${this.name} 
            ${Editor[this.editor]} 
            ${this.creationYear}
        `;
    }
}

const greenLantern = new FlyingHero('Silver Age Green Lantern', Editor.DC, 1959);

console.log(greenLantern.createMessage());

const superman = new FlyingHero('Superman',Editor.DC, 1938);

//superman.fly('Up and Away ! ');

//console.log(superman.createMessage());

