// const title = document.getElementById("title");
// title.innerText = "My JS Power";
// title.style.color = "red";
// console.log(title.innerText);
// const title2 = document.querySelector("#title");
// const list = document.querySelector("li");
// title2.textContent = "I am done by Selector!";
// list.textContent = "I am done by Selector!";
// console.log(list);

// const p = document.querySelector("p");
// p.textContent =
//   "We are very proud for your peak growth and get a massive googler job!";

// const items = document.getElementsByClassName("li-items");
// console.log(items, typeof items, items.length);

// const myArr = Array.from(items);
// console.log(myArr);

// for (let i = 0; i < items.length; i++) {
//   const element = items[i];
//   element.style.color = "green";
//   element.style.background = "red";
//   element.innerText = "Dom loop ";
//   // console.log(element);
// }

// const items2 = document.getElementsByTagName("li");
// console.log(items2);
// for (const iterator of items2) {
//   // console.log(iterator);
//   iterator.style.fontSize = "2rem";
//   iterator.style.color = "red";
//   iterator.style.fontWeight = "bold";
//   iterator.style.backgroundColor = "yellow";
//   iterator.style.width = "auto";
//   iterator.style.height = "3rem";
// }

// const bodyName = document.querySelector("body");
// console.log(bodyName.childNodes);

// const items = document.querySelector("ul");
// console.log(items.children);
// const items = document.getElementsByTagName("ui");
// console.log(items.children);

// const ul = document.getElementById("li-container");
// // console.log(ul.parentElement);
// // console.log(ul.previousElementSibling);
// console.log(ul.previousElementSibling.nextElementSibling.nextSibling);
// const li = document.querySelector("ul");
// // console.log(li.innerText);
// console.log(li.textContent);
// const li = document.querySelector("li");
// console.log(li.innerText);
// console.log(li.textContent);
//TextContent-হাইড করা সত্ত্বেও দেখা যাবে। InnerContext-এ হাইড করা থাকলে দেখা যাবে না
// const ul = document.querySelector("ul");
// console.log(ul.innerText);
// console.log(ul.textContent);
// let name = "Rakib";

// ul.innerHTML = `<p>Hello ${name}</p>`;
//removeAttribute, setAttribute,getAttribute
// // document.querySelector("h2").removeAttribute("id");
// // document.querySelector("h2").removeAttribute("class");
// document.querySelector("h2").setAttribute("class", "first-heading");
// const idValue = document.querySelector("h2").getAttribute("id");
// console.log(idValue);
//appendChild,append
// const li2 = document.createElement("li");
// li2.innerText = "Added by JS.";
// console.log(li2);

// ul.appendChild(li2);
// // const h2 = document.createElement("h2");
// // h2.textContent = "H2 element added by JS";
// // ul.appendChild(h2);

// const h2 = document.querySelector("h2");
// //add,remove
// h2.classList.add("first", "second");
// h2.classList.remove("first");

const ul = document.querySelector("ul");
const li = document.createElement("li");
const second = document.getElementById("second");

li.textContent = "Hello";
ul.insertBefore(li, second);
const h2 = document.querySelector("h2");
h2.classList.add("color");

// const color = document.getElementsByClassName("color");
// for (let element of color) {
//   element.style.background = "green";
// }
