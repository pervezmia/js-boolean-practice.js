// == vs ===

let num = 3;
let num2 = "3";
//1.just check values -> 2.== is loose equality -> 3. Behind the scene type coercion hoye same hoye jai..for example number and string er moddhe compare korle number hyto string hoye jai noyto string ta number hoye jai.
console.log(num == num2); 

 //1. check values and data types --> 2. === is strict equality
console.log(num === num2);
