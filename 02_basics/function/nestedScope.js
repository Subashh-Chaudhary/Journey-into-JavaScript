function one() {
  const name = "Subash";
  function two() {
    const faculty = "BCA";
    console.log(name);
  }
  // console.log(faculty);   Not able access the inner variable.
  two();
}
one();

// Function declaration

console.log(`One added value: ${addOne(3)}`); // Can execute before the function declaration.
function addOne(num) {
  return num + 1;
}

// console.log(addTwo(5));  not able to execute before variable initialized.
const addTwo = function (num) {
  return num + 2;
};

console.log(`Two added value: ${addTwo(5)}`);
