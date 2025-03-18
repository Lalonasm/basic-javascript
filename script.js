console.log("connected");
const button = document.querySelector("button");
button.style.background = "blue";

let sum = 0;

const firstElement = document.querySelector("#count");
function clickMe() {
  console.log("Hello");
  console.log(firstElement);
  sum = sum + 1;
  firstElement.textContent = sum;
}

// function clickDecrease() {
//   const secondElement = document.getElementById("count");
//   if (sum <= 0) {
//     return "Please use + button";
//   }
//   sum = sum - 1;
//   secondElement.innerText = sum;
// }

function clickMinus() {
  if (sum <= 0) {
    return "Please use + button";
  }
  console.log("minus");
  sum -= 1;
  firstElement.innerText = sum;
}

const minusBtn = document.getElementById("minus-btn");
// minusBtn.addEventListener("click");

minusBtn.addEventListener("click", clickMinus);
