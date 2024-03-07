// Singleton Object

const regularUser = {
          email : "chysubash15963@gmail.com",
          fullname : {
                    userfullname : {
                              firstname : "Subash",
                              lastname : "Tharu"
                    }
          },
          faculty : "Development"
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname.firstname)

let obj1 = {1 : "a", 2 : "b"};
let obj2 = {3 : "C", 4 : "d"};
let obj3 = {4 : "e", 5 : "f"};
let obj4 = Object.assign({}, obj1, obj2, obj3); //Object.assign(target, source, source);

console.log("Assign Operator:")
console.log(obj4);
console.log("Spread Operator:")
console.log({...obj1, ...obj2, ...obj3})


const darazUser = {
          name : "Subash Tharu",
          age : 21,
          number : 9822578193,
          email : "chysubash15963@gmail.com",
          isLoggedIn : true
}

console.log("Keys of Objects:");
console.log(Object.keys(darazUser));

console.log("Values of Objects:");
console.log(Object.values(darazUser));

console.log("Array in array form:");
console.log(Object.entries(darazUser));

console.log(`Include email : ${darazUser.hasOwnProperty("email")}`);
console.log(`Include gender : ${darazUser.hasOwnProperty("gender")}`);

