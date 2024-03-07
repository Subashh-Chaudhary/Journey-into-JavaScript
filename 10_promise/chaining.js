// 4th way of constructing promise
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    const error = false;
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

promiseFour
  .then((user) => {
    console.log(`Name : ${user.name}`);
    console.log(`Age : ${user.age}`);
    console.log(`Phone : ${user.phone}`);
    console.log(`Location : ${user.location}`);
    console.log(`Email : ${user.email}`);
    console.log(`Password : ${user.password}`);
    console.log(typeof user);
    return user.name;
  })
  .then((name) => {
    console.log(`${name} is the first user of the site.`);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() =>{
          console.log("The promise is either resolve or rejected..")
  })
