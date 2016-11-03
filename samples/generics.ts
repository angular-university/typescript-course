
class SuperCharacter {
    constructor(public name:string) {

    }
}

class Hero extends SuperCharacter {

}

class Villain extends SuperCharacter {

}

class SuperTeam<T> {
    constructor(public members: T[], public leader: T) {

    }
}

const captainAmerica = new Hero("Captain America");
const thor = new Hero("Thor");
const ironMan = new Hero("IronMan");

const avengers = new SuperTeam([captainAmerica, thor, ironMan], captainAmerica);

const members = avengers.members;



















