const form = document.querySelector('form');

// This useCase give you empty value;
//const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', (e) =>{
          e.preventDefault();

          const height = parseInt(document.querySelector('#height').value);
          const weight = parseInt(document.querySelector('#weight').value);
          const result = document.querySelector('.res');
          const bmi = (weight/((height*height)/10000)).toFixed(2);

          if(height === "" || height < 0 || isNaN(height)){
                    result.innerHTML = `Please give a valid height`;
          }
          else if(weight === "" || weight < 0 || isNaN(weight)){
                    result.innerHTML = `Please give a valid weight`;
          }
          else if(true){
                    if(bmi < 18.6){
                              result.style.color = 'red';
                    }
                    else if(bmi > 18.6 && bmi < 24.9){
                              result.style.color = 'green';
                    }
                    else if(bmi > 24.9){
                              result.style.color = 'red';
                    }


                    result.innerHTML =  `<span>${bmi}</span>`
          }
})