class users {
  constructor(userid, username, email, isLoggedIn) {
    this.userid = userid;
    this.username = username;
    this.email = email;
    this.isLoggedIn = isLoggedIn;

    return this;
  }
}

let userOne = new users(101, "Subash Tharu", "chysubash15963@gmail.com", true);
let userTwo = new users(
  102,
  "Naresh Tharu",
  "jr.er.nareshtharu@gmail.com",
  true
);
// console.log(userOne);
// console.log(userTwo);

let customer = {
  customer_id: 100,
  customer_name: "Binod Shrestha",
  product: "Masu",
};

function Customer(customer_id, customer_name, product) {
          this.customer_id = customer_id;
          this.customer_name = customer_name;
          this.product = product;

          console.log(this)
          return this;
}

const customer1 = new Customer(11, "binod", "masu");
console.log(customer1);

// steps when we use new keyword

// empty object created
// constructor function call
// this keyword is injected
// function executed



// new keyword is used to create individual instance of an object.
