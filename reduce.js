// const numbers = [12, 33, 54, 23, 42, 55];

// const total = numbers.reduce((accu, num) => accu + num, 0);
// console.log(total);

// const result = numbers.reduce((accu, num) => {
//     return accu + num;
// }, 0)
// console.log(result);

//🟢 Problem 1 (Easy)

// const numbers = [2, 3, 4, 5];
// const multiply = numbers.reduce((mlti, curr) => mlti *curr, 1);
// console.log(multiply);

//🟢 Problem 2 (Easy+)

// const numbers = [10, 15, 20, 25, 30];

// const evenSum = numbers.reduce((accu, num) => {

//     if(num % 2 === 0){
//         return num + accu;
//     } else {
//         return accu;
//     }

// }, 0);
// console.log(evenSum);

//🟡 Problem 3 (Medium)

// const numbers = [5, 8, 12, 20, 3, 3, 8, 5, 0];

// const length = numbers.reduce((tl, cn) => {

//     if (cn) {
//         return tl + 1;
//     } else {
//         return tl;
//     }
// }, 0);
// console.log(length);

//🟡 Problem 4 (Medium)

const numbers = [45, 12, 89, 23, 67];

const bigNum = numbers.reduce((big, cur) => cur > big ? cur : big, numbers[0]);
console.log(bigNum);

//🔴 Problem 5 (Little Challenging)

const words = ["apple", "banana", "mango", "orange"];

const word = words.reduce((wd , cw) => {
    
        return wd ? wd + " " + cw : wd;

}, '');
console.log(word);