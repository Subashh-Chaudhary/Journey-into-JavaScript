const numbers = [1, 2, 3, 4, 5, 6];
const superHeros = ["thor", "ironman", "spiderman", "superman", "aquaman"];

numbers.push(7);
numbers.push(8);
numbers.pop();
// console.log("OG :", numbers);

superHeros.unshift("Xmen");
superHeros.unshift("captain");
superHeros.shift();
// console.log("OG :", superHeros);

// console.log(numbers.includes(0));
// console.log(superHeros.indexOf("aquaman"));

// const newarr = numbers.join();
// console.log(newarr)

const nums = [0, 1, 2, 3, 4, 5, 6];

const num1 = nums.slice(1, 4); //range not include
// console.log("OG :", nums);
// console.log(num1);

const num2 = nums.splice(1, 4); // range include
// console.log("OG :", nums);
// console.log(num2);


const marvelHeros = ["captain", "thor", "ironman"];
const dcHeros = ["superman", "batman", "flash"];

// marvelHeros.push(dcHeros);
// console.log(marvelHeros);

// const allHeros = marvelHeros.concat(dcHeros);
// console.log(allHeros);

const allHeros = [...marvelHeros, ...dcHeros]
// console.log(allHeros)

const newArray = [0, 1, [2, 3], 4, [5, 6, [7, 8, 9]]];
// console.log(newArray.flat(Infinity));

console.log(Array.isArray("Subash"));
console.log(Array.from("SUBASH"));
console.log(Array.from({name : "Subash"}));  // need to specify the keys or values

const score = 100;
const score1 = 101;
const score2 = 102;

console.log(Array.of(score, score1, score2));

let myNums = [2, 3, 7, 23, 36, 23,  45, 6, 9, 56, 43];

// let myNums2 = myNums;      reference is also passed
let myNums2 = [...myNums];    // only pass the value (Deep clonning)
console.log("myNums: ", myNums)
console.log("myNums2: ", myNums2)


// Spread Operator
// The spread operator is used to expand or spread elements of an iterable (like an array or object) into individual elements. It’s commonly used in the following scenarios:

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

const num = [1, 2, 3];
const max = Math.max(...num); // 3

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = { ...obj1, ...obj2 }; // { a: 1, b: 3, c: 4 }


// Rest Operator
// The rest operator is used to collect multiple elements into a single array. It is often used in function parameters to gather arguments into an array. Here are some key uses:

function sum(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3)); // 6


const person = { name: 'Alice', age: 25, city: 'Wonderland' };
const { name, ...rest } = person; // rest = { age: 25, city: 'Wonderland' }


const product = {
          name: "Apple Watch",
          price: 23000,
          discount: 20,
          isPercent: false,
}

let {name: productName,  price, discount, ...restProduct} = product;

if(product.isPercent){
          price -= price * (discount /100);
}
else{
          price -= discount;
}

console.log(`The price of ${productName} before discount: ${product.price}`);
console.log(`The price of ${productName} after discount: ${price}`);


