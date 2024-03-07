const myArr = [21, 12, 34, 12, 1, 3, 7, 10, 2];

console.log(`Type of array : ${typeof(myArr)}`);

// Array method
myArr.push(6)
console.log(`Pushing 6 in array : ${myArr}`);

myArr.pop()
console.log(`Poping last element from array : ${myArr}`);

myArr.unshift(6)
console.log(`Unshifting 6 in array : ${myArr}`);

myArr.shift()
console.log(`Shifting first element from array : ${myArr}`);

console.log(`Is array includes 2 : ${myArr.includes(2)}`);

console.log(`Index of 12 : ${myArr.indexOf(12)}`);

// The join() method in JavaScript is used to create and return a new string by concatenating all the elements of an array. It allows you to specify a separator that will be inserted between each element in the resulting string. If no separator is provided, a comma (,) is used by default.
let newArr = myArr.join(" | ");
console.log(`Join arrays and Type:${typeof newArr} ${newArr}`)



console.log(`Original array :${myArr}`)
let otherArr = myArr.slice(1, 4);
console.log(`Slice(Range not Include and original array not manupulated) : ${otherArr}`);
console.log(`Og Arr: ${myArr}`);

otherArr = myArr.splice(1, 4);
console.log(`Splice(Range Includes and original array manupulated) : ${otherArr}`);
console.log(`Og Arr: ${myArr}`);



