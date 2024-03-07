const user = {
          id : 1101,
          username : "Subash Tharu",
          email : "chysubash15963@gmail.com",
          logInCount : 6,
          isLoggedIn : true,
          getUserDetails : function(){
                    console.log("Got the users details...");
                    console.log(`Username : ${this.username}`);
                    console.log(this);
          }
}

console.log(`Id : ${user.id}`)
console.log(`Email : ${user.email}`)
console.log(`IsLoggedIn : ${user.isLoggedIn}`)
console.log(`Users Details ${user.getUserDetails()}`)