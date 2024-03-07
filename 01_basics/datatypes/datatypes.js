"use strict"; //treat js code as newer version

// Primitive => use stack memory
// 7 types : String, Number, Boolean, NULL, Undefined, Symbol, BigInt

// Non Primitive(Reference) => use heap memory
// Array, Objects, Functions

// alert(3 + 3); we are using node js not browser

// dosumentation  (tc39.es)

let name = "Subash";
let age = 21;
let isLoggedIn = false;
const big = 432n;

console.log(typeof(big));
console.log(typeof isLoggedIn);
console.log(typeof null); // null is object
console.log(typeof undefined); // return undefined type

let id = Symbol("abc");
let anotherId = Symbol("abc");

console.log(id == anotherId);

// number => 2 to the power 53
// bigint => stored values which in not fit in number
// boolean => true/false
// string => ""
// null => standalone value
// undefined => value not assigned
// symbol => check the uniqueness between two component
 