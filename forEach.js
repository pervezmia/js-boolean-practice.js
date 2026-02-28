let n = 10;
let total = 0;
while(n >= 1 ){
    if(n%2===0){
        total += n; 
    }
    n--;
}
console.log(total);

// 🔥 Problem 2: Even Numbers Sum using
// let numbers = [3, 7, 2, 8, 10, 5];
// let sum = 0;
// numbers.forEach(num => {
//     if(num%2 === 0){
//         sum += num;
//     }
// })
// console.log(sum);

// 🟠 Problem 3: Count Odd Numbers 

// let numbers = [1, 4, 7, 10, 13, 16];
// let totalOdd = 0;
// numbers.forEach(num => {
//     if(num%2===1){
//         totalOdd++;
//     }
// })
// console.log(totalOdd);

// 🟡 Problem 4: Square All Numbers 

// let numbers = [2, 3, 4];
// const square = [];
// numbers.forEach(num => {
//     const s = num*num;
//     square.push(s);
// })
// console.log(square);

// 🟠 Problem 5: Find Largest Number 

let numbers = [12, 5, 8, 20, 3];
let large = numbers[0];
numbers.forEach(num => {
    if(num>large){
        large = num;
    }
})

console.log(large);

// 🔴 Problem 6 (Challenging): Total Price of Products 

let products = [
  { name: "Pen", price: 10 },
  { name: "Book", price: 50 },
  { name: "Bag", price: 100 }
];
let totalPrice = 0;
products.forEach( product => {

        const price = product.price
        totalPrice += price;

})

console.log(totalPrice);