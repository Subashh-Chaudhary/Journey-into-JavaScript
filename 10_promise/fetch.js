
async function getAlluser(){
          let data;
          try{

                    const response = await fetch("https://jsonplaceholder.typicode.com/users");
                    // console.log(response);
                    data = await response.json();
                    console.log(data);
          }
          catch(error){
                    console.log(`Error : ${error}`);
          }

          console.log(`Type of data : ${typeof data}`)


          console.log(`ID : ${data[0].id}`)
          console.log(`NAME : ${data[0].name}`)
          console.log(`USERNAME : ${data[0].username}`)
          console.log(`EMAIL : ${data[0].email}`)
          console.log(`ADDRESS : ${data[0].address}`)
          console.log(`PHONE: ${data[0].phone}`)
          console.log(`WEBSITE : ${data[0].website}`)
          console.log(`COMPANY : ${data[0].company}`)
          console.log(`TYPE OF ID : ${typeof data[0].id}`)
          console.log(`TYPE OF NAME : ${typeof data[0].name}`)
          console.log(`TYPE OF COMPANY : ${typeof data[0].company}`)
          
}
getAlluser();