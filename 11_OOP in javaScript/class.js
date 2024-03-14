// Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes.
class User {
  // accepts as many parameters as needed, assign the passed in parameter to the future object property.
  constructor(userid, username, email, isLoggedIn) {
    this.userid = userid;
    this.username = username;
    this.email = email;
    this.isLoggedIn = isLoggedIn;

    return this;
  }
  printUser() {
    console.log(`\n\nUser details of ${this.username}`);
    console.log(
      `User id: ${this.userid} \nUsername : ${this.username}, \nEmail : ${
        this.email
      }, \nLoggedIn status : ${this.isLoggedIn ? "ON" : "OFF"}`
    );
  }
}

let firstUser = new User(101, "Subash Tharu", "chysubash15963@gmail.com", true);
// creating instances with "new" keyword which create the instance for the given class which has the same property and method as the original class have.
let secondUser = new User(
  102,
  "Binod Shrestha",
  "shresthabinod334@gmail.com",
  false
);
firstUser.printUser();
secondUser.printUser();
