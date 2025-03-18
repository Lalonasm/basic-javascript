console.log("review");

let serialCount = 1;

const textArea = document.querySelector("#text-area");
textArea.style.width = "50rem";
textArea.style.height = "7rem";
textArea.style.borderRadius = "2rem";
textArea.style.padding = "2rem";
textArea.style.fontSize = "1.5rem";

const button = document.querySelector("button");
button.style.width = "10rem";
button.style.height = "10rem";
button.style.marginTop = "1.rem";

document.getElementById("submit-btn").addEventListener("click", function () {
  //   console.log("running the textarea button");
  //   const inputElement = document.querySelector("textarea");
  //   const inputValue = inputElement.value;
  const inputValue = document.querySelector("textarea").value;
  const container = document.getElementById("review");

  const p = document.createElement("p");
  p.style.color = "green";
  p.innerText = serialCount + ". " + inputValue;

  container.appendChild(p);
  serialCount++;
  document.querySelector("textarea").value = " ";
  console.log(inputValue);
});

document
  .getElementById("text-area")
  .addEventListener("keyup", function (event) {
    console.log(event.key);
    if (event.key === "Enter") {
      const inputValue = document.querySelector("textarea").value;
      const container = document.getElementById("review");

      const p = document.createElement("p");
      p.style.color = "green";
      p.innerText = serialCount + ". " + inputValue;

      container.appendChild(p);
      serialCount++;
      document.querySelector("textarea").value = " ";
      console.log(inputValue);
    }
  });
