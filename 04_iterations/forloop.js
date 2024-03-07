// forloop

for (let i = 0; i < 11; i++) {
  console.log(i);
}

// nested for loop

for (let i = 0; i <= 10; i++) {
  console.log(`Outer loop value : ${i}`);
  for (let j = 0; j <= 10; j++) {
    console.log(`Inner loop value : ${j}, Outer loop value : ${i}`);
  }
}

// Multiplication table
console.log("Multiplication Table(1 to 10");
for(let i = 1; i <= 10; i++){
          for(let j = 1; j <= 10; j++){
                    console.log(`${i} X ${j} = ${i*j}`)
          }
}

// Array

let myArray = ["Flash", "Ironman", "Thor", "Groot", "Superman"];

for (let index = 0; index < myArray.length; index++) {
  console.log(myArray[index]);
}
