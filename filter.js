//🔹 Problem 1: Filter Even Numbers

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);


// 🔹 Problem 2: Filter Strings with Length > 3 

let words = ["cat", "lion", "tiger", "dog", "elephant"];
// const longWord = words.filter(word => word.length>3);
const longWord = words.filter(word => word[0] === "t");
console.log(longWord);


//🔹 Problem 3: Filter Products > 50

let products = [
  { name: "Pen", price: 10 },
  { name: "Book", price: 55 },
  { name: "Bag", price: 120 },
  { name: "Pencil", price: 5 }
];

const moreThanFifty = products.filter(product => product.price>50);
console.log(moreThanFifty);

// 🔹 Problem 4

let users = [
  { name: "Rahim", age: 17 },
  { name: "Karim", age: 25 },
  { name: "Salam", age: 30 },
  { name: "Jamal", age: 15 }
];

const adultUser = users.filter(user => user.age >= 18);
console.log(adultUser);