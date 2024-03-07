// This keyword -- Current context referred

const user = {
          username : "Subash",
          password : "subbu121222",
          welcomeMessage : function(username){
                    console.log(`${this.username}, Welcome to our site....`);
                    console.log(this)
          }
}

user.welcomeMessage();
user.username = "Amit";
user.password = "ammi2232@12"
user.welcomeMessage();


// This keyword in not worked in function
// do have their own 'this' binding
function chai(){
          let name = "Subash";
          console.log(this.name);
}
chai();


// Arrow function
// do not have their own 'this' binding
const chaii = () => {
          let name = "Subash";
          console.log(this);
}
chaii();


// Implicit return 
// 'Curley braces' and 'return' not used in implicit return
const addTwoNum = (num1, num2) => num1 + num2;

console.log(`Sum through Implicit return: ${addTwoNum(3, 5)}`);


// Object through implicit return 
// parenthesis must used for object 
const printObject = () => ({username : "Subash", pass : "subba1212"});

console.log(`Object through implict return`);
console.log(printObject());