//rest operator

function myFunction (a, b, c, d, ...rest){
    console.log(a, b, c, d, rest);
}
myFunction(1, 2, 35, 5, 3, 5, 6, 3, 2,);


//spread operator
//array
const numbers = [20, 44, 33, 22];
console.log(...numbers);

//object and array same rules
const rolls = [22, 33, 55, 34,];
const updateRolls = [...rolls];
updateRolls.push(53);
console.log(rolls);
console.log(updateRolls);

console.log(Math.max(3, 53, 64, 72, 77, 200)); //krn holo aita individual value expect kore. 
console.log(Math.max(rolls)); // akhane kintu array dile kaj korbe na
console.log(Math.max(...rolls)); //tobbe ai khettre spread operator use korle kaj korbe.

console.log(Math.min(3, 4, 6, 6, 20));
console.log(Math.min(rolls)) //sorasori array nite parbe na
console.log(Math.min(...rolls));// spread operator use korle hobe


const info = {
    name: "Pervez kabir",
    age: 25,
    single: true
}

const updateInfo = info;
updateInfo.age = 20; //update obj a value change korsi main ta teo change hoye gese
console.log(updateInfo);

const obj = {
    name: "pervez",
    roll: 20
}

const obj2 = {...obj}; //copy independently obj hoilo spread operator diya. //spread operator use korar krn a notun obj make hoilo and shudhu sekhanei change holo.
obj2.name = "sohag";

console.log(obj);
console.log(obj2);