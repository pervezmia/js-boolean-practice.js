// function multiply (a, b){
//     console.log(a, b);

// }
// let x = 10;
// let y = 20;
// const result = multiply(x, y);
// console.log(result);

//Primitive Data te call er before and after value same e thakbe kono change hobe na.

function multiply (a, b){

    a = a - 5;
    b = b - 10;
    console.log(a, b);
    return a * b;
}

let x = 10;//asole value change hobe na call er por o
let y = 20; //asole value change hobe na call er por o
console.log("before calling", x, y);
const result = multiply(x, y);
console.log(result);
console.log("after calling", x, y);

//primitive value ta k pathai vitor a jotoi change kori na keno asol value ee thakbe. kono change hobe na.

function add (a, b){
    const agrs = [arguments];
    const agrs2 = [...arguments];
    console.log(agrs);
    console.log(agrs2);
    
}
add(1,3,4,5,9);
