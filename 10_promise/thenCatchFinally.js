

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) =>{
          return response.json();
})
.then((data) =>{
          console.log(`Type of Data: ${typeof data}`);
          console.log(data)
})
.catch((error) =>{
          console.log(`Error : ${error}`);
})
.finally(() =>{
          console.log("Finally fetching is completed...")
})