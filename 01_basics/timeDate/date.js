let myDate = new Date();

console.log(`Type of date : ${typeof(myDate)}`);
console.log(myDate);
console.log(`String Date : ${myDate.toString()}`);
console.log(`Date String : ${myDate.toDateString()}`);
console.log(`Locale Date String : ${myDate.toLocaleDateString}`);

let myCreatedDate = new Date(2001, 9, 9);
console.log(`Self created date : ${myCreatedDate.toString()}`);

let myCreatedDate1 = new Date(2001, 9, 9, 23, 1);
console.log(`Self created date : ${myCreatedDate1.toString()}`);


let myCreatedDate2 = new Date("1996-9-29");
console.log(`Self created date : ${myCreatedDate2.toString()}`);
