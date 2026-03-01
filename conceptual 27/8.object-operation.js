//dot notation, bracket notation , nested object, optional chaining, Object.keys, Object.entries, loop through using for in and array method after object.keys, freeze, seal, delete,


let person = {
    name: "Pervez",
    age: 26,
    getInfo: () => {
        console.log(`My name is ${person.name}`);
    }
}
console.log()

//Access property's value
//dot notation
//
console.log(person.name);
console.log(person.age);

//Bracket notation
let name = "name";
console.log(person[name]); //
console.log(person["name"]);




let student = {
    name: "Pervez",
    classed: "Five",
    roll: 40,
    anotherInfo: {
        lived: "Bangladesh",
        moreInfo: {
            village: "boraitola",
            thana: "kazipur",
            street: null,
        }

    }
}

console.log(student.anotherInfo.moreInfo.street)
// console.log(student.anotherInfo.moreInfo.street.roadNum) //error khabo because null cannot read
console.log(student.anotherInfo.moreInfo.street?.roadNum)


const keys = Object.keys(person);
const value = Object.values(person);
const entries = Object.entries(person);
console.log(keys,'**',value, "**", entries);

// for in and array method after object.keys **
// for (let property in person){
//     console.log(property,"--->",person[property]);
// }


for(let key of keys) {
    console.log(key, '--->', person[key]);
}



//freeze, seal, delete
let car = {
    barand: "Toyota",
    color: "Black",
    model: "ABC"
}
// delete car.color 
// Object.freeze(car); //delete, add, modify kisu korte dei na
// car.color = "white";
// delete car.model;
// console.log(car);


Object.seal(car); //delete and add korte dei na tobe modify krte dei
delete car.color ;
car.barand = "Tesla";
console.log(car);

