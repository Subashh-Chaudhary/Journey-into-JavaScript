// for in loop

// The for...in statement is used to iterate over the enumerable properties of an object, including properties that are inherited from its prototype chain. It is typically used to loop through the keys (property names) of an object and can be handy for working with objects, especially when you need to enumerate their properties dynamically.

let myarray = [23, 5, 7, 24, 345, 64, 2];
for (let arr in myarray) {
  console.log(myarray[arr]);
}

let greeting = "Hello World!";
for (let greet in greeting) {
  if (greeting[greet] == " ") {
    continue;
  }
  console.log(`Each word in ${greeting} : ${greeting[greet]}`);
}


const userDetails = {
          name : "Subash",
          sex : "Male",
          age : 21,
          phone : 9822578193
}


for(let detail in userDetails){
          console.log(`Key : ${detail}`);
          console.log(`Value : ${userDetails[detail]}`);
          console.log(`Combined : ${detail} :-> ${userDetails[detail]}`)
}