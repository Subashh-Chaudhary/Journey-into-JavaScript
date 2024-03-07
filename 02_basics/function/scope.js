// {} - Scope

let d = 234;

if(true){
          let a = 34;
          const b = 23;
          var c = 32;
          let d = 122;
          console.log(`Inner d: ${a}`)
}

// console.log(a);     Blocked scoped
// console.log(b);     Blocked scoped
console.log(`C: ${c}`);     // Globally scoped
console.log(`Outer d: ${d}`);
