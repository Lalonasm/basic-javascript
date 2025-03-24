// console.log("connected");
// const price = document.getElementById("budget").textContent;
// console.log(typeof price);

// function getConvertedValue(id) {
//   const price = document.getElementById(id).textContent;
//   return parseInt(price);
// }
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
  });
}
