function firstSum (arr1, arr2){
    arr1[0] = 100;
    arr2[0] = 200;
    const first = arr1[0];
    const second = arr2[0];
    return first + second;
}

const num1 = [1,2,3]; //asole value change hobe call er por o
const num2 = [4,5,6]; //asole value change hobe call er por o
console.log("before the function call:", num1, num2);

const result = firstSum(num1, num2);

console.log("after the function call:", num1, num2);


//non primitive (array or obj reference k pathai) ai agulo k bole pass by reference
