let btn = document.querySelector("#btn");
let res = document.querySelector("#password");

btn.addEventListener(
  "click",
  (passwordGenerator = () => {
    let length = 12;
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let char = "~!@#$%^&*-";
    let num = "0123456789";

    for (let i = 1; i <= length - 5; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }
    for (let i = 1; i <= 2; i++) {
      let index = Math.floor(Math.random() * char.length);
      pass += char.charAt(index);
    }
    for (let i = 0; i < 1; i++) {
      let index = Math.floor(Math.random() * num.length);
      pass += num.charAt(index);
    }
    res.innerHTML = pass;
    console.log(pass);
  })
);
