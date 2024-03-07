// Reduce 

// The reduce() method is used to iterate over an array and accumulate a single result by applying a specified callback function to each element of the array. The callback function is used to reduce the array to a single value or object. It is a versatile method that can be used for various purposes, such as summing up all the elements in an array, finding the maximum or minimum value, or transforming an array into a different data structure.

let myNums = [1, 2, 3, 4, 5];

const myTotal = myNums.reduce((accumulator, currentValue) => {
          console.log(`Accumulator : ${accumulator}, CurrentValue : ${currentValue}`);
          return accumulator + currentValue;
}, 3);

// const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);

console.log(myTotal);


let courses = [
          {
                    title : "Web Development",
                    fee : 30000
          },
          {
                    title : "MERN Stack",
                    fee : 25000
          },
          {
                    title : "App Development",
                    fee : 28000
          },
          {
                    title : "React",
                    fee : 18000
          },
          {
                    title : "Oracle Database",
                    fee : 50000
          }
]

let totalFee = courses.reduce((acc, item) => acc + item.fee, 0);
console.log(totalFee);