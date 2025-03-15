//var , let , const
// var a = 5;
// a=10;
// var a =20;
// console.log(a)
// let b = 5;
// b=10;
//  b =20;console.log(b);

//  const c = 5 ;
//  c=20; console.log(c)
//while-loop
// let i =1;
// while(i<=5){
//     console.log("Rahim")
//     console.log("Aakash")
//     i++;
// // }

// let i =1;
// let sum = 0;
// while(i<=10){
//     sum=sum+i;
//     i++;//i=i+1,i+=1;i++
// }
// console.log(sum)
//multiplication
// let i =1;
// let sum = 1 ;
// while(i<=5){
//     sum *=i;
//     i++;
// }
// console.log(sum);

//for loop
// for (let i = 1; i <= 10; i += 1) {
//     console.log("Shorosswati", i);
//     console.log("Anamika");
// }
// for (let i = 0; i <= 100; i += 2) {
//     console.log("Sorry Babu...", i)
// }

// const nums = [23, 54, 56, 2001, 544, 700, 801, 750];
// // console.log(nums[3])
// let sumOfOdd = 0;
// let sumOfEven = 0;

// for (let i = 1; i < nums.length; i++) {
//     const x = nums[i];
//     if (x % 2 === 1) {
//         sumOfOdd += x;
//     } else {
//         sumOfEven += x;
//     }
// }
// console.log(sumOfOdd);
// console.log(sumOfEven);

// for (let item of nums) {
//     console.log(item.length, item);
// }

// let i = 5;

// while (i > 10) {
//     console.log(i);
//     i++;
// }
//do while loop
// do {
//     console.log(i);
//     i++;
// } while (i > 10);
// firstly run one time then check the condition and run again

//break and continue 
// const nums = [23, 54, 56, 73, 544, 700, 56,];

// for (let i of nums) {
//     console.log(i);
//     if (i === 56) {
//         break;
//     }
// }
// for (let i of nums) {
//     if (i === 56) {
//         continue;
//     }
//     console.log(i);
// }

// for (let i of nums) {
//     if (i % 2 === 1) {
//         continue;
//     }
//     console.log(i);
// }
// string
// const x = "hello";
// const y = "hElLo";

// if (x.toLowerCase() === y.toLowerCase()) {
//     console.log("Both are same");
// } else {
//     console.log("Both are different")
// }
//includes compare

// const x = "Hello World!";
// const y = "hello";

// // console.log(x.includes(y));
// console.log(x.toLowerCase().includes(y.toLowerCase()));

// const x = "   Hello";
// const y = "hello  ";
// if (x.trim().toLowerCase() === y.trim().toLowerCase()) {
//     console.log("Both are same");
// } else {
//     console.log("Both are different")
// }
// //trim remove the gap of front and back,  not in the middle

// const xy = "My name is Json Sheikh"
// const words = xy.split(" ");
// console.log(words);
// console.log(words.join("_"))

// const myPet = {
//     name: "Travis",
//     age: 2,
//     isMale: true,
//     food: "Fish",
//     color: "White",
//     species: "Hulo Biral",
//     "is married":false
// }
// console.log(myPet);
// const x ="name";

// delete myPet.name
// //dot notation(opject.propertyName)
// //bracket notation(object["propertyName"])

// // console.log(myPet.color);
// // const catFood = myPet.food;
// const catFood = myPet["food"];
// myPet.color="black"
// myPet["is married"]=true;
// // myPet.sound = "mew mew"
// myPet["sound"]="Hambaa hambaa"
// delete myPet.sound;
// // console.log(catFood);
// console.log(myPet);

// const myPet = {
//     name: "Travis",
//     age: 2,
//     isMale: true,
//     food: "Fish",
//     color: "White",
//     species: "Hulo Biral",
//     "is married": false
// }
// for (let key in myPet) {
//     // console.log(key, typeof key);
//     console.log(myPet[key])
// }

// const students = {
//     name: {
//         firstName: "Sheikh",
//         middleName: "Abu",
//         lastName: "Lalon"
//     },
//     subjects: ["bangla", "english", "math", "chemistry"],
//     isMale: true,
//     roll: 34
// }
// console.log(students.name.lastName);
// console.log(students.subjects[3])

//template string
const myPet = {
    name: "Travis",
    color: "White",
    food: "Fish"
}
// const sentense = 'My pet name is ' + myPet.name + ". His favorite food is " + myPet.color + ". His color is " + myPet.color + "."
const sentense =`My pet name is ${myPet.name}. The favourite color of my pet is ${myPet.color}. Also favourite food is ${myPet.food}. `
console.log(sentense);