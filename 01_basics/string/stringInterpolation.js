let name = "Subash";
let roll = 28;

console.log(`My name is ${name} and my roll number is ${roll}`);

const Name = new String("Subash Tharu");

console.log(Name[0]);
console.log(Name.__proto__);

console.log(`Length : ${Name.length}`);
console.log(`To uppercase : ${Name.toUpperCase()}`);
console.log(`Character at 5 : ${Name.charAt(5)}`);
console.log(`Index of a : ${Name.indexOf("a")}`);

for(let i =0; i<Name.length; i++){
          console.log(Name[i])
          if(Name[i] === " "){
                    break;
          }
}

let newString = Name.substring(0, Name.indexOf(" "));
console.log(newString);
