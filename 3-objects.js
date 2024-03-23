// The order of the elements does not matter
// Access to elements by key
// Loop only by For in
// The possibility of using the methods inside it

const product = {
  name: "Book",
  price: 10,
  count: 5,
  getSum() {
    return this.price * this.count;
  },
};

// We can not use like this:
console.log(product[0]);
// it return undefined

// We can use like this:
console.log(product["name"]);
// or
console.log(product.name);

// We can add new properties
product.addProperty = "this is new property";
console.log(product);

// We can call method inside it
console.log(product.getSum());
