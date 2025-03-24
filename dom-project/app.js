// function handleSelect() {}
const allBtn = document.getElementsByClassName("add-to-cart");
let count = 0;

console.log(allBtn);
for (let btn of allBtn) {
  console.log(btn);
  btn.addEventListener("click", function (e) {
    count = count + 1;
    console.log(e.target.parentNode.childNodes[1].innerText);
    const placeName = e.target.parentNode.childNodes[1].innerText;
    console.log(e.target.parentNode.childNodes[3].childNodes[1].innerText);
    const price = e.target.parentNode.childNodes[3].childNodes[1].innerText;
    const selectedContainer = document.getElementById(
      "selected-place-container"
    );
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerText = placeName;
    const p2 = document.createElement("p");
    p2.innerText = price;

    e.target.parentNode.parentNode.style.backgroundColor = "grey";

    li.appendChild(p);
    li.appendChild(p2);

    const budget = document.getElementById("budget").textContent;
    if (parseInt(budget) - parseInt(price) < 0) {
      alert("low budget , Please add more money  ");
      return;
    }

    document.getElementById("budget").textContent = parseInt(
      budget - parseInt(price)
    );

    selectedContainer.appendChild(li);

    // const convertedTotalCost = parseInt(totalPrice);

    // document.getElementById("total-cost").innerText =
    //   // convertedTotalCost + parseInt(price);
    //   sum;
    // totalCost("total-cost", parseInt(price));
    // const grandTotal = document.getElementById("grand-total").innerText;
    // const grandTotalSum = parseInt(grandTotal) + parseInt(price);
    // document.getElementById("grand-total").innerText = grandTotalSum;

    // console.log(typeof totalPrice);
    // const totalCost = document.getElementById("total-cost").textContent;
    // const sum = parseInt(price) + parseInt(totalCost);

    // const grandTotal = document.getElementById("grand-total").textContent;
    // const grandTotalAmount = parseInt(price) + parseInt(grandTotal);
    totalCost("total-cost", parseInt(price));
    grandTotalCost("grand-total", parseInt(price));
    setInnerText("cart-count", count);
    // setInnerText("total-cost", sum);
    // setInnerText("grand-total", grandTotalAmount);
    document.getElementById("cart-count").style.color = "red";
    // console.log("boss select korci!!!");
    // console.log(count);
  });
}
function totalCost(id, value) {
  const totalCost = document.getElementById(id).textContent;
  const sum = parseInt(value) + parseInt(totalCost);
  setInnerText(id, sum);
}
function grandTotalCost(category) {
  console.log(category);
  // const grandTotal = document.getElementById(id).textContent;
  // const grandTotalAmount = parseInt(value) + parseInt(grandTotal);
  // setInnerText(id, grandTotalAmount);
  const totalCost = document.getElementById("total-cost").innerText;
  if (category === "bus") {
    setInnerText("grand-total", parseInt(totalCost) + 100);
  } else if (category === "train") {
    setInnerText("grand-total", parseInt(totalCost) - 200);
  } else if (category === "flight") {
    setInnerText("grand-total", parseInt(totalCost) + 500);
  } else {
    setInnerText("grand-total", parseInt(totalCost));
  }
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
