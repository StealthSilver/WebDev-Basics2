let n = 9;

for (let i = 0; i <= n; i++) {
    console.log(i);
}

console.log("the quantity is", n)

console.log(process.argv);

let args = process.argv;

for (let i = 2; i < args.length; i++) {
    console.log(args[i])
}

