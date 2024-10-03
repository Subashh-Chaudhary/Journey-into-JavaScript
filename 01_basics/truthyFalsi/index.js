// Truthy and Falsi value in js

if (null) {
  console.log(`It is Truthy value`);
} else {
  console.log(`It is Falsi value`);
}

console.log(null <= 0); // true
console.log(null == 0); // false
console.log(null < 0); // false

// Truthy Values:
// true
// Any non-empty string, e.g., "hello"
// Any non-zero number, e.g., 1, -1, 0.01, -0.01
// Any object, including arrays and functions
// The value Infinity or -Infinity

// Falsy Values:
// false
// 0 (zero)
// Empty string ('')
// null
// undefined
// NaN (Not a Number)
// document.all
