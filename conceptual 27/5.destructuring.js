//Array 
let numbers = [20, 30, 40, 50];
//protita man alada alada kore store na kore destructuring kortepari

let [twenty, thirty, , fifty] = numbers;
console.log(twenty, thirty, fifty);

//Object
let student = {
    name: "Pervez",
    classed: "Five",
    roll: 40,
    anotherInfo: {
        lived: "Bangladesh",
        moreInfo: {
            village: "boraitola",
            thana: "kazipur"
        }

    }
}

let { name: n, 
    classed: c, 
    anotherInfo:{ lived, 
        moreInfo:{ village, 
                    thana}}} = student;

console.log(n, c, lived, village, thana);