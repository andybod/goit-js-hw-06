function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttonChangeColorEl = document.querySelector(".change-color");
const textColorEl = document.querySelector(".color");

buttonChangeColorEl.addEventListener("click", onChangeColor);

function onChangeColor() {
  const bgColor = getRandomHexColor();
  document.body.style.backgroundColor = `${bgColor}`;
  textColorEl.textContent = bgColor;
}
