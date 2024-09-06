const button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Rick");
  button.textContent = `Meer info: ${name}`;
}

