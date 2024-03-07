let name = "Subash";
let roll = 28;

console.log(`My name is ${name} and my roll number is ${roll}`);

const Name = new String("SubashCh");

console.log(Name[0]);
console.log(Name.__proto__);

console.log(`Length : ${Name.length}`);
console.log(`To uppercase : ${Name.toUpperCase()}`);
console.log(`Character at 2 : ${Name.charAt(2)}`);
console.log(`Index of a : ${Name.indexOf("a")}`);

let newString = Name.substring(0, 4);
console.log(newString);
