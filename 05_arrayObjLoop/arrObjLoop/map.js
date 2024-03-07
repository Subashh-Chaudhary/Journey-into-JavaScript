// map 
// The map() method is used to create a new array by applying a provided function to each element in an existing array. It iterates over the elements of the original array, performs a transformation on each element using the provided function, and then returns a new array containing the transformed values. The original array remains unchanged.


let myNums = [2, 3, 7, 23, 36, 23,  45, 6, 9, 56, 43];

let printNum = myNums.map((num) => num);
console.log(printNum);


console.log("Adding 10 in all arrays.")

printNum = myNums.map((num) => num + 10);
console.log(printNum);


// Chaining 

let newNums = myNums
          .map((num) => num * 10)
          .map((num) => num + 1)
          .filter((num) => num >= 50);

console.log("Chaining of map and filter.")
console.log(newNums);