

// Break Statement     used to break the control flow of program

for(let i = 0; i <= 20; i++){
          console.log(i);
          if(i == 5){
                    console.log("We got the 5... and need to exit the program.")
                    break;
          }
          
}


// Continue Statement

for(let i = 0; i <= 20; i++){
          
          if(i == 5){
                    console.log("We got the 5... and need to skip the five and continue.")
                    continue;
          }
           console.log(i);
          
}