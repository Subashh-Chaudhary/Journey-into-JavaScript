// Hoisting refers to the behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is actually executed.


function hoisting(){
          console.log(`B : ${b}`);
          var b = 2;
}
hoisting();


console.log(`A : ${a}`)
let a = 1;

console.log(`B : ${b}`)


// var Variables:
// With var, variables are hoisted to the top of their containing function or global scope.
// Hoisting means the variable declarations are moved to the top of their scope during the compilation phase.
// Declarations are hoisted, but not initializations. Variables declared with var are initialized with undefined by default until the actual assignment is encountered.


// let and const Variables:
// Variables declared with let and const are also hoisted to the top of their block scope.
// However, unlike var, they are not initialized until their actual declaration is encountered in the code.
// Accessing variables declared with let or const before their declaration results in a ReferenceError, as they are not initialized by default.