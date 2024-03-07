// forof loop

let myarray = [23, 5, 7, 24, 345, 64, 2];
for(let arr of myarray){
          console.log(arr);
}

let greeting = "Hello World!";
for(let greet of greeting){
          if(greet == " "){
                    continue;
          }
          console.log(`Each word in ${greeting} : ${greet}`);
}


let map = new Map();
map.set('IN', "INDIA");
map.set('NP', "NEPAL");
map.set('PK', "PAKISTAN");
map.set('IN', "INDIA");

console.log(map);

for(const [key, value] of map){
          console.log(`${key} :-> ${value}`);
}