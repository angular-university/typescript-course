
enum Editor {
    MARVEL,
    DC
}

interface Hero {
    name:string;
    creationYear:number;
}

const batman:Hero = {
    name: "Batman",
    creationYear: 1939
};

abstract class SuperHero implements Hero {

    private static readonly LABEL = 'Hero:';

    readonly name:string;

    constructor(
        name:string,
        public _editor:Editor,
        public creationYear: number) {
        this.name = name;
    }

    static createMessage(hero:SuperHero):string {
        return `
            ${SuperHero.LABEL} 
            ${hero.name} 
            ${Editor[hero._editor]} 
            ${hero.creationYear}
        `;
    }

}

interface CanFly {
    fly(message:string):void;
}



class FlyingHero extends SuperHero implements CanFly {

    fly(message:string) {
        console.log(message + this.creationYear);
    }

}


const superman = new FlyingHero('Superman',Editor.MARVEL, 1938);

console.log(superman.fly('Up and Away !'));





