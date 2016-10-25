
enum PlayerPosition {
    Guard,
    Forward,
    Center
}

interface Player {
    name:string;
    position: PlayerPosition
}

let kobe: Player | null = {
    name: 'Kobe',
    position: PlayerPosition.Guard
};

kobe = null;
