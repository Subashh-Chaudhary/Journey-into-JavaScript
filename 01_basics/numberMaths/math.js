console.log(Math);
console.log(`Absolute value : ${Math.abs(-4)}`);
console.log(`Round up : ${Math.round(4.6)}`);
console.log(`Ceil : ${Math.ceil(4.1)}`);
console.log(`Floor : ${Math.floor(4.9)}`);
console.log(`Minimum values : ${Math.min(4, 1, 43, 7, 2, 6)}`);
console.log(`Maximum values : ${Math.max(4, 1, 43, 7, 2, 6)}`);


console.log(`Random value : ${Math.random()}`);
console.log(`Random value : ${Math.random() * 10 + 1}`);
console.log(`Random Exact value : ${Math.ceil(Math.random() * 10 + 1)}`);

let min = 10;
let max = 40;
console.log(`Random value between ${min} to ${max} : ${Math.floor(Math.random() * (max - min + 1) + min)}`)