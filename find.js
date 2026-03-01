// 🟢 Problem 1: Find First Even Number 
// let numbers = [1, 3, 7, 8, 10];
// const evenFirst = numbers.find(num => num % 2 === 0);
// console.log(evenFirst);

//🟡 Problem 2: Find User by Name

let users = [
  { id: 1, name: "Rahim" },
  { id: 2, name: "Karim" },
  { id: 3, name: "Salam" }
];

const userKarim = users.find(user => user.name === "Karim");
console.log(userKarim);

// 🟠 Problem 3: Find Expensive Product 

let products = [
  { name: "Pen", price: 10 },
  { name: "Book", price: 55 },
  { name: "Bag", price: 120 }
];

const expensiveProduct = products.find(product => product.price > 50);
console.log(expensiveProduct);

//🔴 Problem 4 (Edge Case Thinking)

let numbers = [1, 3, 5, 7];

const evenNum = numbers.find(num => num % 2 === 0);
if(evenNum === undefined) {
    // console.log("No match found!");
    return "No match found!"
}
console.log(evenNum);