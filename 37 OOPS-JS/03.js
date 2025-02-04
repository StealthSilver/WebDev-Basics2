// factory function

function personMaker(name, age) {
    const person = {
        name: name,
        age: age,
        talk() {
            console.log(`hi my name is ${this.name}`);
        },
    };

    return person;
}


p1 = personMaker("pogo", 43)
p2 = personMaker("pollie", 43)
console.log(personMaker("pogo", 43));
console.log(p1.talk === p2.talk)

