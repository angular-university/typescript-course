

interface MessageCreator {
    (name:string) : string
};


function createHelloMessage(name:string) :string {
    return `Hello, my name is ${name}`;
}

const creator: MessageCreator = createHelloMessage;

const message = creator('Bill');

console.log(message);