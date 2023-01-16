function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const controlsEl = document.querySelector("#controls");
const inputEl = controlsEl.querySelector("input");
const buttonCreateEl = controlsEl.querySelector("button[data-create]");
const buttonDestroyEl = controlsEl.querySelector("button[data-destroy]");
const boxesEl = document.querySelector("#boxes");
const VALUE_SIZE = 30;
const STEP_SIZE = 10;

buttonCreateEl.addEventListener("click", createBoxe);
buttonDestroyEl.addEventListener("click", destroyBoxes);
function createBoxe() {
  const colectionEl = [];
  let size = VALUE_SIZE;
  for (let i = 1; i <= inputEl.value; i++) {
    const divEl = document.createElement("div");
    divEl.style.width = `${size}px`;
    divEl.style.height = `${size}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    colectionEl.push(divEl);
    size += STEP_SIZE;
  }
  boxesEl.append(...colectionEl);
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
}
