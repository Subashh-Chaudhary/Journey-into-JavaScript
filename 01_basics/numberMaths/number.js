let balance = new Number(100);
console.log(balance);

console.log("Length :" + balance.toString().length);
console.log("Setting fix :" + balance.toFixed(3));

let number = 124.9233479812;
console.log("Precised number :" + number.toPrecision(10));

let otherNumber = 1000000000;
console.log("Locale String :" + otherNumber.toLocaleString("en-IN"));