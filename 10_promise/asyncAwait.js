// 5th way of constructing promise
const promiseFive = new Promise(function (resolve, reject) {
          setTimeout(() => {
            const error = true;
            if (!error) {
              resolve({
                name: "Subash Tharu",
                age: "23",
                phone: "9822578193",
                location: "Imadol",
                email: "chysubash15963@gmail.com",
                password: "subbu@#1463",
              });
            } else {
              reject("ERROR : Something went wrong...");
            }
          }, 2000);
        });


async function consumePromiseFive(){
          try{
               const response = await promiseFive;
               console.log(response);     
          }
          catch(error){
                    console.log(error)
          }
}
consumePromiseFive();