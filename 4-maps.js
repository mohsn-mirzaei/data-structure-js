// Data is stored in order
// Access to elements by key
// loop by for of
// The key can be an array

const data = new Map();

data.set("key1", "value1");

data.set("title", "book1");

for (const item of data) {
  console.log(item);
}
