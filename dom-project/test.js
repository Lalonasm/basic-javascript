console.log("Test added");
// document.getElementById("btn").addEventListener("click", function () {
//   console.log("btn clicked!");
// });
function handleClick(event) {
  console.log(event.target.parentNode.parentNode.childNodes[1].textContent);
}
