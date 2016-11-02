
enum Editor {
    MARVEL,
    DC
}

class SuperPower {
    constructor(public name:string) {

    }
}


class SuperHero {
    name:string;
    editor: Editor;
    creationYear:number;

    constructor(name:string, editor: Editor, creationYear: number) {
        this.name = name;
        this.editor = editor;
        this.creationYear = creationYear;
    }



}



const batman = new SuperHero("Batman", Editor.DC, 1939);

const spiderman = new SuperHero("Spiderman", Editor.MARVEL, 1962);



class FlyingSuperHero extends SuperHero {

    fly(message:string) {
        console.log(message);
    }

}


const superman = new FlyingSuperHero("SuperMan", Editor.DC, 1938);


superman.fly('Up and Away !');
