let mcuHeros = ['Iron Man', 'Spider Man', 'Captain America', 'Thor', 'Doctor Strange'];
let dcueHeros = ['Bat Man', 'Super Man', 'Flash', 'Wonder Women', 'Aqua Man'];


let user1 = {
          name : "Subash Tharu",
          email : "chysubash15963@gmail.com",
          address : "Bardiya"
}
let user2 = {
          name : "Binod Shrestha",
          email : "shresthabinod334@gmail.com",
          address : "Udayapur"
}
let user3 = {
          name : "Sanjeep Mehta",
          email : "mehtasanjeep334@gmail.com",
          address : "Itahari"
}

// multidimensional array

const allFriends = [
          user1,
          user2,
          user3
]

console.log(allFriends[1].name)

const allHeros = [
          mcuHeros, 
          dcueHeros
]
console.log(allHeros[1][1]) 


let superHeros = mcuHeros.concat(dcueHeros);
console.log("Concat method:")
console.log(superHeros);

let sprheros = [...mcuHeros, ...dcueHeros];
console.log("SpreadOut method:")
console.log(sprheros);

const longArr = [3, 1, 45, 23, 41, [2, 5], [8, 9, [4, 2, 4]]];
// The flat() method in JavaScript is used to create a new array with all sub-array elements concatenated into it recursively up to the specified depth. When you pass Infinity as the depth parameter to flat()
let realArr = longArr.flat(Infinity);
console.log(realArr);

console.log("Checking it is array or not:")
console.log(Array.isArray("mcuHeros"));
console.log("Converting into array of given String:")
console.log(Array.from("Subash"));

let score = 30;
let score1 = 34;
let score2 = 93;
console.log("Converting into array for given variables:")
console.log(Array.of(score, score1, score2))