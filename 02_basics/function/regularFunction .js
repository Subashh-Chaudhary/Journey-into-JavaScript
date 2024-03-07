
function printName(){
          console.log("My name is Subash Tharu");
}

printName();


function addTwoNum(num1, num2){   // Parameters is used in function definition. 
          let sum = num1 + num2;
          console.log(`The sum of ${num1} and ${num2} is ${sum}.`);
}

addTwoNum(2, 34);  // Argument is used for function calling.
addTwoNum(4, "a");
addTwoNum(43, null);
addTwoNum(3, undefined);


// Return
function prtName(){
          return "Subash";
          console.log("G");
}
const namee = prtName();
// Can stored in variable
console.log(`Name : ${namee}`);


// Console
function prtNamee(){
          console.log("Subash");
          console.log("G");
}
const name1 = prtNamee();
// Can't be stored in variable
console.log(`Name : ${name1}`);


// Default parameter
function userLogginMessage(username = "user"){
          if(!username){
                    return `Please enter a username.`;
          }
          else{
            return `${username} just logged in.`         
          }   
}

let message = userLogginMessage();
console.log(message);