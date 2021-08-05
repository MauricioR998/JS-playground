// Object property shorthand
const name = "Mauricio";
const userAge = 22;

const user = {
  name,
  userAge,
  locaion: "Lima",
};
console.log(user);

// Object destructuring

const product = {
  label: "Red notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4.2,
};

// const label = product.label
// const stock = product.stock;

// const { label: productLabel, stock, rating = 5 } = product;
// console.log(productLabel);
// console.log(stock);
// console.log(rating);

const transaction = (type, { label, stock = 0 } = {}) => {
  console.log(type, label, stock);
};

transaction("order");
