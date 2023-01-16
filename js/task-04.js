// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
let counterValue = 0;
const buttonDecrementEl = document.querySelector(
  'button[data-action="decrement"]'
);
const buttonIncrementEl = document.querySelector(
  'button[data-action="increment"]'
);
const counterEl = document.querySelector("#value");

const makeIncrementValue = () => {
  counterValue++;
  counterEl.textContent = counterValue;
};
const makeDecrementValue = () => {
  counterValue--;
  counterEl.textContent = counterValue;
};
buttonIncrementEl.addEventListener("click", makeIncrementValue);
buttonDecrementEl.addEventListener("click", makeDecrementValue);
