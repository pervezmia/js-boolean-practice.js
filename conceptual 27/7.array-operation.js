//map , filter, find, foreach, reduce

let arr = [12, 34, 64, 55, 65];

//loop through
// for(let i= 0; i<arr.length; i++){
//     console.log(arr[i]);
// }
// for (let element of arr){
//     console.log(element);
// }



//map - update/modify element of an array
let updatedArr = arr.map((item, index, array) => {
    console.log(item,"--->",index, ":", array);
    console.log(item * 2);
} )

//filter method --- filter multiple elements  orthat mulple element khuje ane doya***
let overEighteen = arr.filter((element) => {
    return element > 18 ;
})
console.log(overEighteen);

//find method -- find a single element ***
const findThirty = arr.find(element => element === 34);
console.log(findThirty);