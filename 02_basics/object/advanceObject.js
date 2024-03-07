


const mySelf = {
          name : "Subash",
          age : 21,
          sex : "male",
          courseGrabbed : "react",
          Temporarylocation : "Imadol"
}

console.log("Object De-Structring");

let {name, age, sex, courseGrabbed, Temporarylocation : templocation} = mySelf;
let {courseGrabbed : cg} = mySelf;

console.log(courseGrabbed);
console.log(`CourseGranned : ${cg}`)