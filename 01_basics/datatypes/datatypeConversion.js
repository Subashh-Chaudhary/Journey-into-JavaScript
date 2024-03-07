let score = "23";
let pass = 12423;

console.log(score)
console.log("Before typecast is " +typeof(score));
let valueInNumber = Number(score);
console.log("After typecast is " +typeof(valueInNumber));

console.log(pass)
console.log( "Before typecast is " +typeof(pass));
let valueInString = String(pass);
console.log("After typecast is " +typeof(valueInString));


let isLoggedIn = "Subash"; 
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true, 0 => false
// "" => false, "subash" =>true

let str = "Hello";
let str1 = " Subash";
let str2 = str + str1;

console.log(str2);


console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

