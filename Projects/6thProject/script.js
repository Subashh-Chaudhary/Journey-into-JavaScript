
const randomColor = () =>{
          const hex = "0123456789ABCDEF";
          color = "#";

          for(let i = 0; i < 6; i++){
                    color += hex[Math.round(Math.random() * 15)];
          }
          body.style.backgroundColor = color;
          console.log(`Color code : ${color}`)
}






const strt = document.querySelector('#start');
const stp = document.querySelector('#stop');
const text = document.querySelector('h1');
const body = document.querySelector('body');

let ranBgColor;

strt.addEventListener('click', function(){
          if(!ranBgColor){
               ranBgColor = setInterval(randomColor, 1000);
          console.log('Color Changing is started...');     
          }

})

stp.addEventListener('click', function(){
          clearInterval(ranBgColor);
          ranBgColor = null;
          console.log('Color Changing is cleared...')
})