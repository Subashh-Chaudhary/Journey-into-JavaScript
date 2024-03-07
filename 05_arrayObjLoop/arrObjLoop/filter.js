
// filter
// The filter() method is userd to create a new array containing elements that satisfy a given condition. The filter() method iterates over each element in an array and checks whether it meets the specified condition.


let myNums = [1, 3, 5, 123, 345, 12, 34, 67, 12, 4, 5];

// let newNumbs = myNums.filter((numbs) => numbs < 100);

// let newNumbs = myNumbs.filter((numbs) => (numbs < 100));

let newNums = myNums.filter((nums) => {return nums < 100});

console.log(newNums);


// Object in array

const books = [
          {title: "Book One", genre : "Biography", publish : 1987, editon : 2034},
          {title: "Book Two", genre : "science", publish : 1947, editon : 2045},
          {title: "Book Three", genre : "history", publish : 1945, editon : 2043},
          {title: "Book four", genre : "political", publish : 1924, editon : 2032},
          {title: "Book five", genre : "Biography", publish : 1995, editon : 2024},
          {title: "Book six", genre : "science", publish : 1956, editon : 2023}
]

let userBook = books.filter((book) => book.genre === "Biography");

console.log("Books with Biography genre");
console.log(userBook);

let bookPublished = books.filter((book) => book.publish > 1945 && book.genre === "science");

console.log("Books with published date after 2030 and having science genre");
console.log(bookPublished);