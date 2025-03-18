//basic function
// function printName(name) {
//     console.log("I am ", name);
// }
// printName("Lalon Sheikh")
// printName("Mehedi Hasan")


// function printDetails(name, age, address) {
//     console.log(`My name is ${name}. Now my age is ${age}. Currently I live in ${address}`)
// }
// printDetails("Lalon Sheikh", "38", "Dinajpur");
// function add(x, y) {
//     const total = x + y;
//     return total;
// }
// const z = add(40, 5);
// console.log(z)

//Types of function
//1. no parameters,no return;
//2. no parameters,but return;
//3. parameters, but no return
//4. parameters,return
//no parameters,no return
function fun1() {
    console.log("no parameter , no return")
}
//no parameters,but return
function fun2() {
    return 5;
}
//parameters , but no return
function fun3(name) {
    console.log(name);
}
//4. parameters,return
function fun4(x, y) {
    return x + y;
}
// problem1
//check if the number is even or odd
// const x = 5;
// if (x % 2 === 0) {
//     console.log("Even");
// } else {
//     console.log("Odd");
// }
// const num = 8;
// function checkEvenOdd(x) {
//     if (x % 2 === 0) {
//         console.log("Even")
//     } else {
//         console.log("Odd");
//     }
// }
// checkEvenOdd(num);
// function checkEvenOdd(x) {
//     if (x % 2 === 0) {
//         return "Even"
//     } else {
//         return "Odd"
//     }
// }
// const result = checkEvenOdd(33);
// console.log(result);

// function printName(x) {
//     for (let i = 1; i <= x; i++) {
//         console.log("Lalon")
//     }
// }
// // printName(4)
// function checkEvenOdd(xy) {
//     if (xy % 2 === 0) {
//         return "Even Number"
//     } else {
//         return "Odd Number"
//     }
// }
// const result = checkEvenOdd(76);
// console.log(result);


// function printName(x) {
//     for (let i = 1; i <= x; i++) {
//         console.log("Safoon")
//     }
// }

// printName(3)

//validation
// function add(x, y) {
//     return x + y;

// }
// // const sum = add("3", 4)
// // const sum = add(null, 4)
// const sum = add(undefined, 4)
// // console.log(sum)
// function add(x, y) {
//     if (typeof x !== "number" || typeof y !== "number") {
//         return "Thik thak number den"
//     }
//     return x + y;

// }
// console.log(add(4,8))

function details(info) {
    if (typeof info !== "object") {
        return "Please write an  object."
    } else if (!info.name || !info.age) {
        return "Object must contain name and age property."
    } else if (typeof info.name !== "string" || typeof info.age !== "number") {
        return "Name should be a string , age should be a number."

    }else if(info.age<=0){
        return "Age must be a positive number";
    }

    return `My name is ${info.name} . My age is ${info.age} .`
}
// console.log(details({name:"Lalon Sheikh",age:"38"}))
console.log(details({ age: -38, name: "Lalon Sheikh" }))
// console.log(details('xyz'))

