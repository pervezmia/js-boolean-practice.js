//pass by value (pass by primitive value);
const name  = "pervez";
const myFunc = (value) => {
    value = "sohag";
    console.log("Inside func --->", value);
    console.log(value);
}
console.log(name);

myFunc(name);



//Pass by reference (pass by non primitive or referential data type);


const obj = {
    color: "red",
    model: "lj"
}

const myFunc2 = (param) => {
    param.color = "Black"
    console.log("Inside func -->", param);

}
myFunc2(obj);
console.log(obj);