class SuperCharacter {
  constructor(public name:string) {}
}

class Hero extends SuperCharacter {}

class Villain extends SuperCharacter {}

class SuperTeam<T extends SuperCharacter> {
  constructor(public members: T[], public leader: T) {}
}

const captainAmerica = new Hero("Captain America");
const thor = new Hero("Thor");
const ironMan = new Hero("IronMan");

const avengers = new SuperTeam([captainAmerica, thor, ironMan], captainAmerica);
const members = avengers.members;

const luthor = new Villain("Luthor");
const bizarro = new Villain("Bizarro");
const captainCold = new Villain("Captain Cold");

const legionOfDoom = new SuperTeam([luthor, bizarro, captainCold], luthor);

const megaCrossoverTeam = new SuperTeam([captainAmerica, thor, ironMan,
  luthor, bizarro, captainCold], captainAmerica);
