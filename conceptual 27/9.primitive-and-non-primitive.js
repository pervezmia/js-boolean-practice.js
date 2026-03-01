//***primitive data types ***
//1. String
//2. Number
//3. Boolean
//4. undefine
//5. Null
//6. more
// primitive data types holo immutable. call stack heap memory store kore na aigulo sorasori call stack thekei execute hoooi.
const name = "pervez";
const updateName = name.toUpperCase();
console.log(name); //dekho asol ta change holo na 
console.log(updateName); //but  change kore onno akta variable a rakhte hosse.



//***non primitive data types ***
//1. object
//2. array
//3. function
//4. date




// Non-primitive data types holo mutable orthat mul array poriborton hoi..r aita reference stored kore. 
//aigulo heap memory te store hoi 

const student = {
    name: "pervez",
    age : 30
}


const updateStudent = student;
updateStudent.name = "sohag"; //dekho change korlam updateStudent but student shoho change hoye gelo.
console.log(updateStudent); //dekho duita thekei change hoyese
console.log(student); //dekho duita thekei change hoyese

//non primitive reference stor kore tai.