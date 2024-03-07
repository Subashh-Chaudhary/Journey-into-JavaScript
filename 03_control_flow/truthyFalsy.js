
// Falsy values 
// false, 0, -0, BingInt 0n, "", null, undefined, NaN

// Truthy values
// "0", "false", " ", [], {}, function(){}


let userDetails = [];
const usersName = {};

if(userDetails){
          console.log("Details checked...");
}

if(""){
          console.log("This is Truthy value.");
}
else{
          console.log("This is not truthy value.");
}

if(userDetails.length === 0){
          console.log(`The array is Empty.`);
}
else{
          console.log(`The array is not Empty.`);  
}

if(Object.keys(usersName).length === 0){
          console.log(`The Object is Empty.`);
}
else{
          console.log(`The object is not Empty.`);  
}


// Nullish Coalescing Operator (??): null, undefined
val1 = 5 ?? 15;
val2 = null ?? 10;
val3 = undefined ?? 9;
val4 = null ?? undefined ?? 2 ?? 12;

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);


// Terniary Operator (?):

"" == 0 ? console.log("True Statement:"):console.log("False Statement:");