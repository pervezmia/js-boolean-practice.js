let pi = 3.1416;
const p = "pervez";

function triple(n) {
    return n * 3;
}

function add(a, b) {
    const factor = 3;
    const result = (a + b) * factor + pi;//global scope vitor theke access kora jai.
    // console.log(p);
    const newNum = result + dbl(3);
    // console.log(dbl(10));
    const total = newNum + result;
    // console.log(triple(10));
    
    function nm(n){
        console.log(n / 2);
        console.log(n + pi);
        console.log(pi);
        return n //ai fuction thke jodi amra return na kori taile ader call korle js undefine dibe.
    }
    console.log(nm(50));

    return total; //ai fuction thke jodi amra return na kori taile ader call korle js undefine dibe.


}
// console.log(factor); //functional scope er vitor er jinish bire theke acces kora jai na.
console.log(add(19, 11));
// console.log(nm(100));//bire theke access kora jasse na.

function dbl(n) {
    return n * 2;
}
console.log(dbl(3));

const multiply = (a, b) => {
    // console.log(result);
    const result = a + b;
    return result
}
multiply(2,3);
