// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і
//  кількість елементів в категорії(усіх < li >, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

const categories = document.querySelector("#categories");
const category = categories.querySelectorAll(".item");
const numberCategories = category.length;
console.log("Number of categories: ", numberCategories);
for (const elem of category) {
  console.log(`Category: ${elem.firstElementChild.textContent}`);
  console.log(`Elements: ${elem.querySelectorAll("li").length}`);
}
