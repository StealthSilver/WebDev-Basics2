class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    talk() {
        console.log(`hi my name is${this.name}`)
    }
}

let p1 = new Person("adam", 43)
let p2 = new Person("eve", 43)

console.log(p1.talk === p2.talk)