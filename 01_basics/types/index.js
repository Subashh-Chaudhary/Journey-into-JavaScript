let a = 342;
let b = a;
b = 65;

console.log(`A : ${a}`);
console.log(`B : ${b}`);

let c = [1, 2, 3, 4];
let d = c;
d.pop();
console.log(`C : ${c}`);
console.log(`D : ${d}`);



// Coping reference value
let e = [1, 2, 3, 4, 5, 6, 7]
let f = [...e];
f.pop()
console.log(`E : ${e}`);
console.log(`F : ${f}`);