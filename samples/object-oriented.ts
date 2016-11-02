
enum Editor {
    MARVEL,
    DC
}


abstract class SuperHero {

    readonly name:string;

    constructor(
        name:string,
        public _editor:Editor,
        protected creationYear: number) {
        this.name = name;
    }

}

class FlyingHero extends SuperHero {

    fly(message:string) {
        console.log(message + this.creationYear);
    }

    get editor():string {
        return Editor[this._editor];
    }

    set editor(editorName:string) {
        this._editor = (<any>Editor)[editorName];
    }

    get message() {
        return `
            Flying Hero: 
            ${this.name} 
            ${this.editor} 
            ${this.creationYear}
        `;
    }

}

const greenLantern = new FlyingHero('Silver Age Green Lantern', Editor.DC, 1959);



const superman = new FlyingHero('Superman',Editor.MARVEL, 1938);

superman.editor = "DC";

console.log(superman.message);




