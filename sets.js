// Data is not stored in order
// Access to elements by method
// Dynamic length
// Values must be unique

const prices = new Set();

prices.add(10);
prices.add(20);
prices.add(30);
prices.add(10);

console.log(prices);

console.log(prices.size);
console.log(prices.has(1));
