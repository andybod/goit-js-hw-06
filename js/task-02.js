// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsEl = document.querySelector("#ingredients");

const ingredient = [];
for (const item of ingredients) {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = item;
  ingredient.push(itemEl);
}
ingredientsEl.append(...ingredient);
