// foreach loop
// It do not return any value, it only print

// the forEach() method is used to iterate over the elements of an array and execute a provided function once for each array element. It's a simple and concise way to loop through arrays and perform an action on each item without explicitly writing a for loop.


const language = ["c", "c++", "java", "javascript", "python", "php"];

console.log("Through normal process");
language.forEach((value) => {
  console.log(value);
});

// function calling through foreach loop

let printme = (item) => {
  console.log(item);
};

console.log("By function calling process.");
language.forEach((item) => {
  console.log(item);
});

// Condition given

let myNums = [1, 3, 5, 123, 345, 12, 34, 67, 12, 4, 5];

let newNums = [];
myNums.forEach((num) => {
  if (num < 100) {
    newNums.push(num);
  }
});

console.log(newNums);

// Object in array

const books = [
  { title: "Book One", genre: "Biography", publish: 1987, editon: 2034 },
  { title: "Book Two", genre: "science", publish: 1947, editon: 2045 },
  { title: "Book Three", genre: "history", publish: 1945, editon: 2043 },
  { title: "Book four", genre: "political", publish: 1924, editon: 2032 },
  { title: "Book five", genre: "Biography", publish: 1945, editon: 2024 },
  { title: "Book six", genre: "science", publish: 1956, editon: 2023 },
];

let userBook = [];

books.forEach((book) => {
  if (book.genre === "Biography") {
    userBook.push(book);
  }
});

console.log(userBook);


// Adding 10 on each element of array.

console.log("Normal array")
let newArray = [];
myNums.forEach((num) => {
          newArray.push(num);
})

console.log(newArray);

newArray.length = 0;

console.log("After adding")
myNums.forEach((num) => {
          let sum = num + 10;
          newArray.push(sum);
})

console.log(newArray);
