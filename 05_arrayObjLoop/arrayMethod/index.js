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