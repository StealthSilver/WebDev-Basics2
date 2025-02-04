let arr1 = [1, 2, 4];
let arr2 = [1, 2, 3, 84];

arr1.sayHello = () => {
    console.log("hello i am arr")
}


arr2.sayHello = () => {
    console.log("hello i am arr")
}

// for individual arrays the functions are different
console.log(arr1.sayHello === arr2.sayHello)

// for prototypes functions are same
console.log("opg".toUpperCase === "erd".toUpperCase);