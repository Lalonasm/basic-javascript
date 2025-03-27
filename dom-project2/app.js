// console.log("connected");
// const price = document.getElementById("budget").textContent;
// console.log(typeof price);

// const result = getConvertedValue("budget");
// const result1 = getConvertedValue("cart");
// const result2 = getConvertedValue("left");
// console.log(result, result1, result2);
const allBtn = document.getElementsByClassName("add-btn");
console.log(allBtn);
for (let btn of allBtn) {
  btn.addEventListener("click", function (e) {
    const name = e.target.parentNode.childNodes[1].textContent;
    const price = e.target.parentNode.childNodes[3].childNodes[1].textContent;
    const category = e.target.parentNode.childNodes[5].childNodes[1].innerText;
    console.log(e.target.parentNode.childNodes[5].childNodes[1].innerText);

    const selectedPlayersContainer = document.getElementById(
      "selected-players-container"
    );
    
    //cart condition
    const firstCount = getConvertedValue("cart");
    if (firstCount + 1 > 6) {
      alert("six er beshi ar hobe na...");
      return;
    }
    e.target.setAttribute("disabled", false);
    e.target.parentNode.style.backgroundColor = "red";
    //left condition
    const firstleft = getConvertedValue("left");
    if (firstleft - 1 < 0) {
      alert("six er beshi ar hobe na...");
      return;
    }
    //budget condition
    const firstBudget = getConvertedValue("budget");
    if (firstBudget <= 0) {
      alert("add more money");
      return;
    }

    //update budget
    const budget = getConvertedValue("budget");
    document.getElementById("budget").textContent = budget - parseInt(price);
    //update cart
    const cart = document.getElementById("cart").textContent;
    document.getElementById("cart").innerText = parseInt(cart) + 1;
    //update left
    const left = getConvertedValue("left");
    document.getElementById("left").innerText = left - 1;

    const div = document.createElement("div");
    div.classList.add("selected-players-container");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    p1.innerText = name;
    p2.textContent = price;
    p3.innerText = category;
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    selectedPlayersContainer.appendChild(div);
    updateTotalCost(price);
    updateGrandTotal();
  });
}
function updateGrandTotal(status) {
  console.log(status);
  const totalCost = getConvertedValue("total-cost");
  if (status === undefined) {
    // const totalCost = document.getElementById("total-cost").textContent;
    document.getElementById("grand-total").textContent = totalCost;
  } else {
    const couponCode = document.getElementById("coupon-code").value;
    if (couponCode === "love") {
      const discountedPrice = totalCost * 0.2;
      document.getElementById("grand-total").textContent =
        totalCost - discountedPrice;
      console.log(discountedPrice);
    } else {
      alert("Please enter a valid coupon code...");
    }
  }
}
// function updateTotalCost(value) {
//   console.log(value);
//   const totalCost = getConvertedValue("total-cost");
//   const sum = totalCost + parseInt(value);
//   document.getElementById("total-cost").textContent = sum;
// }
function updateTotalCost(price) {
  const totalCost = document.getElementById("total-cost").textContent;

  const sum = parseInt(totalCost) + parseInt(price);
  document.getElementById("total-cost").innerText = sum;
  console.log(typeof totalCost);

  // return parseInt(price);
}
function getConvertedValue(id) {
  const price = document.getElementById(id).textContent;
  return parseInt(price);
}
