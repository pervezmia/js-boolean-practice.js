// const numbers = [2, 3, 4, 5, 6, 8];

// // dubble of the numbers normal way;

// const dbl = [];
// for (const number of numbers){
//     dbl.push(number*2);
// }
// console.log(dbl);

// smart way 

// const doubleIt = (num) => num * 2;
// const double = numbers.map(doubleIt);

// const double = numbers.map((num) => num * 2)
// const square = numbers.map(num => num*num);

// console.log(double);
// console.log(square);

//🟢 Problem 1: Double the Numbers (Easy)

// const numbers = [2, 4, 6, 8];
// const double = numbers.map(num => num*2);
// console.log(double);

//🟢 Problem 2: Convert to Uppercase

const fruits = ["apple", "banana", "mango"];
const cpiFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(cpiFruits);

//🟡 Problem 3: Add "Mr." Prefix

const names = ["Rahim", "Karim", "Hasan"];
// const mrNames = names.map(name =>(`Mr. ${name}`));
const mrNames = names.map(name =>(`Mr. ${name}`));
console.log(mrNames);

// 🟡 Problem 4: Extract Property from Objects

// const users = [
//   { id: 1, name: "Rahim", age: 22 },
//   { id: 2, name: "Karim", age: 25 },
//   { id: 3, name: "Hasan", age: 20 }
// ];

// const nams = users.map(nam => nam.name);
// console.log(nams);

//🔴 Problem 5: Calculate Total Price

const products = [
  { name: "Book", price: 100, quantity: 2 },
  { name: "Pen", price: 10, quantity: 5 },
  { name: "Bag", price: 500, quantity: 1 }
];

const productPrice = products.map(product => product.price * product.quantity);
console.log(productPrice);

//🔴 Bonus Problem (Little Tricky 😎)

// const digits = [1, 2, 3, 4, 5];

const digits = [1, 2, 3, 4, 5];
const digit = digits.map(d => d%2===0 ? d * 2 : d * 3);
console.log(digit);

// 🟡 Another Problem 1: Index diye Multiply
const numbers = [1, 2, 3, 4, 5];

const indexWithMultiply = numbers.map((num, index) => {
    return index%2 === 0 ? num*2 : num*3
});

console.log(indexWithMultiply);

// 🟡 Another Problem 2: Negative ke Positive koro
// const numbers = [-5, 4, -3, 2, -1];
// // const positive = numbers.map(num => num < 0 ? num * -1 : num);
// const positive = numbers.map(num => Math.abs(num));
// console.log(positive);

//🟠 Another Problem 3: Word Length Check

// const words = ["apple", "hi", "banana", "cat"];
// const lengthCheck = words.map(word => word.length > 3 ? word : "short");
// console.log(lengthCheck);

// Another 🟠 Problem 4: Object Modify
const users = [
  { name: "Rahim", age: 17 },
  { name: "Karim", age: 22 },
  { name: "Hasan", age: 15 }
];

const userUpdate =users.map( user =>  ({name: user.name, status: user.age >= 18 ? "Adult" : "Minor"}));
console.log(userUpdate);



// Another 🔴 Problem 5: Mixed Transformation

// const numbers = [10, 15, 20, 25, 30];
// const number = numbers.map(num => {
//     if(num % 5 === 0 && num % 2 === 0){
//         return "EvenFive";
//     } else if (num % 5 === 0) {
//         return "Five";
//     } else {
//         return num;
//     }
// })
// console.log(number);


// Another 🔥 Problem 6: Real Interview Style

const prices = [100, 200, 300, 400];
const price = prices.map(prc => {
    const discount = prc * 10 / 100;
    const digitsPrice = prc - discount;
    return digitsPrice;
})
console.log(price);


// Another 🧠 Brain Teaser (Little Hard)

// const numbers = [1, 2, 3, 4, 5];
// const number = numbers.map(num => {
//     if(num % 2 === 0){
//         return num * num;
//     } else {
//         return num * num * num;
//     }
// })
// console.log(number);

// 🟢 Problem 1: First Letter Uppercase 
// const words = ["apple", "banana", "mango", "orange"];

// const uppercaseWord = words.map(w => {
//     const upr = w[0].toUpperCase();
//     const slc = w.slice(1);
//     const result = upr + slc;
//     return result;
// });
// console.log(uppercaseWord);

// 🟢 Problem 2: Odd Index Uppercase 
// const words = ["html", "css", "javascript", "react", "node"];
// const word = words.map((w,index) => index%2===0 ? w.toLowerCase() : w.toUpperCase());
// console.log(word);

//🟡 Problem 3: Word Length Based Case Change
const words = ["hi", "hello", "js", "developer", "ok"];
// const wordsUpdate = words.map((w, )) 