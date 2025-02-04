// parent class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    talk() {
        console.log(`Hi i am ${this.name}`)
    }
}

//child class
class Student extends Person {
    constructor(name, age, marks) {
        super(name, age); //parent class constructor is being called
        this.marks = marks;
    }
}


console.log(Student)


let stu1 = new Student("adam", 25, 95);


//child class
class Teacher extends Person {
    constructor(name, age, subject) {
        super(naem, age); //parent class constructor is being called
        this.subject = subject;
    }
}



// base / parent class
class Mammal {
    constructor(name) {
        this.name = name;
        this.type = "warm blooded"
    }

    eat() {
        console.log("i am eating")
    }
}


// child class
class Dog extends Mammal {
    constructor(name) {
        super(name);
    }

    bark() {
        console.log("woff...")
    }
    // this will override the method of the parent class
    eat() {
        console.log("dog is eating");
    }
}

// child class
class Cat extends Mammal {
    constructor(name) {
        super(name);
    }

    meow() {
        console.log("meow...")
    }
}

console.log(new Dog("tummy"))
console.log(new Cat("millo"))