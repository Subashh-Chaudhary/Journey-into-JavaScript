// Singleton Onject
// Object.create()

// Object literals

const nknm = Symbol("nickname");

const jsUser = {
    name : "Subash",
    "full name" : "Subash Tharu",
    [nknm] : "Subba",
    age : 21,
    location : "Imadol",
    email : "chysubash15963@gmail.com",
    isLoggedIn : false,
    lastLoggedInDay : ["Monday", "Tuesday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser[nknm]);
console.log(typeof jsUser[nknm]);

jsUser.location = "Bardiya"
console.log(jsUser);

// The Object.freeze() method in JavaScript is used to freeze an object, meaning it makes the object immutable. Once an object is frozen, its properties cannot be added, removed, or modified, and any attempts to do so will result in an error (in strict mode) or be silently ignored (in non-strict mode).
//Object.freeze(jsUser);
jsUser.location = "Lalitpur";
console.log(jsUser); 

jsUser.greeting = function(){
    console.log("Hello JS user");
}
console.log(jsUser.greeting)
console.log(jsUser.greeting());


jsUser.greeting1 = function(){
    console.log(`Hello JS user, ${this["full name"]}`);  // Reference the same object
}
console.log(jsUser.greeting1)
console.log(jsUser.greeting1());
