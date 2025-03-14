console.log("Hero Hacked " + 10 + " Dinajpur");
// var x = 10;
// var y = 20;
// console.log(x + y);

// var Name = "Rahim"//string
// var age = 34646//number
// var male = false//boolean
// var b = null;//null
// var c;//undefined
// console.log(typeof Name);
// console.log(typeof age);
// console.log(typeof b)
// console.log(typeof male);
// console.log(typeof c)
// //can not use reserve keywords name,function,return, var etc. as variable
// //cannot use number as variable name

// // best practice:
// //1. camel case

// var p = 6;
// var q = 7;
// var total = p + q + 9
// console.log(total);

// var minus = total - 12
// console.log(minus);
// var multiple = total * 2;
// console.log(multiple);
// var divide = multiple / p;
// console.log(divide);
// // modulus %

// console.log(25 % 7)
// var age = 36;
// console.log(age % 2);//remaining in divide = %

// // note: console.log(23 % 4)= 3 //(always less than 4 value) 
// // 2. console.log(4 % 7)=4  //(always lower value make result)

// //shorthand
// var num = 5;
// // num =num+1;
// // num+=1;
// // num = num-2;
// // num-=2
// // num=num*4
// // num*=4;
// // num=num/5;
// num /= 5;
// console.log(num);

//conversion
// var number = 456.55;
// var e = "123";
// var f = "34.54";
// // console.log(parseInt(number));
// // console.log(parseFloat(f));
// var number1 = parseFloat(f);
// console.log(number1);
// var number2 = parseInt(e);
// console.log(number2);
var a = "20";
console.log(typeof a);
var converted = parseInt(a);
console.log(typeof converted);
console.log(3, "+", "4")
console.log(true + 3);
var x = 4.5864;
const convert = x.toFixed(3);
console.log(convert);
console.log(5 + parseFloat(convert));
//parseInt/parseFloat/toFixed
console.log(isNaN(30));
console.log(isNaN("abc"));
// যদি নাম্বার হয় অথবা নাম্বারে কনভার্ট করা সম্ভব হয় তবে isNaN false দেবে । অন্য ক্ষেত্রে true হবে।
//if/else
/*
if(condition){
condition true
}else{
condition false;
}

*/
var abc = 40;
if (abc !== 30) {
    console.log("Not Equal to 30")
}
else {
    console.log("Equal to 30")
}
var temperature = 5;

if (temperature > 30) {
    console.log("It's a hot day!")
} else if (temperature > 20) {
    console.log("It's a warm day")
} else if (temperature > 10) {
    console.log("It's a cood day!")
} else {
    console.log("It's a cold day!")
}

//logical operator && , ||
var hour = 19;

if (hour >= 6 && hour < 12) {
    console.log("Good Morning");
} else {
    if (hour >= 12 && hour < 18) {
        console.log("Good Afternoon!")
    } else {
        console.log("Good Evening!")
    }
}

var x = 7;
if (x > 5 || x > 10) {
    console.log('true')
} else {
    console.log('false')
}

var y = 9;
// var message;
// if(y>5 && y<10){
//     message="Bigger than 5";
// }else{
//     message="Less than 5"
// }
// console.log(message);
//ternary operaton condition?true:false
message = y > 5 && y < 10 ? "Bigger than 5" : "Less than 5";
console.log(message);

//==compare only value,  === compare value with datatype;
// console.log(10 == 10);
// console.log(10 == "10");
// console.log(10 === "10");
// //array
// var numbers = [10, 20, 60, 40, 30, 50];
// var names = ['Mehedi', "Hasana", "Rahim", "Jogesh", "Michael"]
// console.log(numbers);
// console.log(names);
// console.log(numbers[2])
// //index number:0,1,2,3,4,...
// numbers.push(100);
// numbers.push(200, 300, 400, 800);
// var b = numbers.pop();
// var a = numbers.pop();
// console.log(numbers, a, b);
// var first = names.shift();
// console.log(names, first)
// // var addFirst = names.unshift("karim", "Raja", "Polash")
// console.log(names, addFirst);
var numbers = [5, 15, 10, 25, 20];
console.log(numbers.indexOf(25));
console.log(numbers.indexOf(50));
console.log(numbers[numbers.length - 1]);
console.log(numbers.slice(1, 4));
console.log(numbers.slice(4));


//splice method
//splice(start,deleteCount,element1,element2)
// (numbers.splice(2,1,500,500));
//কোনো কিছু ডিলিট না করে কোনো জায়গায় সংখ্যা বসার ক্ষেত্রে  নিচের মতো করতে হয়।
numbers.splice(2,0,1000,2000)
console.log(numbers,numbers.length);