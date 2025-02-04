// constructors - they dont return anything 
// constructors start with a capital alphabet

function Person(name, age) {
    this.name = name;
    this.age = age
}

Person.prototype.talk = function () {
    console.log(`Hi, my name is ${this.name}`);
}

let p1 = new Person("adam", 43)
let p2 = new Person("eve", 43)

