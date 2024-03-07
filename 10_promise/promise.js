
// Constructing Promise 

// 1st way
const promise = new Promise(function(resolve, reject){
          // Do an async task
          // DB calls, cryptography, network

          setTimeout(function(){
                    console.log('Async task is completed.');
                    resolve();
          }, 1000)
});

promise.then(function(){
          console.log("Promise consumed...");
})


// 2nd way
new Promise(function(resolve, reject){
          setTimeout(function(){
                    console.log("Async task is runnig.")
          }, 1000)
}).then(function(){
          console.log("Promised is consumed -->")
})


// 3rd way
const promiseThree = new Promise(function(resolve, reject){
          setTimeout(function(){
                    resolve({name : "Subash Tharu", age : "23", phone : "9822578193", location : "Imadol", email : "chysubash15963@gmail.com"});
          }, 100)
})

promiseThree.then(function(user){
          console.log(user)
})
