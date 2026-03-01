// traditional function is hoisted , but arrow function is not hoisted tobe variable a rakhle hoisted hobe na.

console.log("multiply -->", multiply(4,5));
function multiply (a, b){
    return a * b;
    
}

const variableWithFunction = function multiply (a, b){
    return a * b;
    
}
console.log("multiply -->", variableWithFunction(4,5));


//Arrow function 
const sum = (a,b) => {
    return a + b;
}
console.log(sum(50, 15));
//short cut arrow function 
const total = (a,b) => a + b; //implicitly return 
console.log(total(40, 40));