const body = document.querySelector('body');
const buttons = document.querySelectorAll('.box'); 

buttons.forEach((button) =>{
          console.log(button);
          button.addEventListener('click', (e) =>{
                    console.log(e);
                    console.log(e.target);
                    if(e.target.id == 'green'){
                              body.style.backgroundColor = e.target.id;
                    }
                    else if(e.target.id == 'red'){
                              body.style.backgroundColor = e.target.id;
                    }
                    else if(e.target.id == 'yellow'){
                              body.style.backgroundColor = e.target.id;
                    }
                    else if(e.target.id == 'purple'){
                              body.style.backgroundColor = e.target.id;
                    }
                    else if(e.target.id == 'blue'){
                              body.style.backgroundColor = e.target.id;
                    }
                    else if(e.target.id){
                              body.style.backgroundColor = e.target.id;
                    }
          })
})