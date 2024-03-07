// One parameter with multiple argument. (number of argument is not defined)

function calculateCardPrice(price1, price2, ...price){  // ... Rest operator
          return price;
}
 
console.log(calculateCardPrice(100, 234, 124, 2545)); 


// Passing object in function

const userDetails = {
          username : "Subash",
          password : 12332
}

function handleObject(anyobject){
          console.log(`Username : ${anyobject.username} Password : ${anyobject.password}`)
}

handleObject(userDetails);



// Passing array in function

const myArray = [243, 6534, 85, 23, 567, 11, 4];

function arrayFinder(anyArray){
          console.log(`Second array element : ${anyArray[1]}`);
}

arrayFinder(myArray);