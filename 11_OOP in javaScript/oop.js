// Functional paradigm
let shoes = 2500;
let statetaxt = 1.25;

function totalPrice(rate, taxRate) {
  return rate * taxRate;
}

let totalPriceOfShoes = totalPrice(shoes, statetaxt);
console.log(totalPriceOfShoes);

// OOP paradigm
// Object-Oriented Programming is a way of writing code that allows you to create different objects from a common object. The common object is usually called a blueprint while the created objects are called instances.
let purchase = {
  shoes: 2500,
  statetaxt: 1.25,
  totalPrice: function(){
    let calculation = this.shoes * this.statetaxt;
    console.log(calculation);
  },
};
purchase.totalPrice();
