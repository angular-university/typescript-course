


function Person(name) {

    this.name = name;

    this.sayHi = function() {

        setTimeout( () => {
            console.log('Hello my name is ' + this.name);
        },1000)
    }
}


const person = new Person('Bob');


person.sayHi();

