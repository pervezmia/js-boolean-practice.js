//Difference 1----
//var hoisted (Bad practice)
// let and const hoisted but in Temporal Dead Zone

//Difference 2----
//redeclare with same name by var
var name = "Pervez";
var name = "Sohag";

console.log(name);

//can't redeclare with same name by let and const

// let roll = 30;
// let roll = 10;

// const pervez = 40;
// const pervez = 50;

//Difference 3----
// reassign allowed by var and let but not const
var nationality = "bangladesh";
nationality = "American";
console.log(nationality);

let age = 26;
age = 30;
console.log(age);

const fullName = "Ahmed pervez kabir";
fullName = "sohag";
console.log(fullName);

//Difference 4----
//scope
//var maintain only function scope, but not block scope or global scope
//let and const maintain all scope 