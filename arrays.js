// 1- Data is stored in order
// 2- Accessing elements by index
// 3- The length is dynamic
// 4- Save different types of data

// Utilizing const improves app performance by storing values in constant memory locations.
// Conversely, using let or var introduces dynamic memory allocation,
// which can impact performance negatively.
// When you are certain that the data will not change, it's advisable to use const.
// However, if the data is expected to change, it's better to use let.
const products = ["Book1", "Book2", "Book3"];

for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
}

products.push("Book4");

console.log(products.length);

const productsIndex = products.findIndex((product) => product === "Book4");
console.log(productsIndex);
