
// type, timestamp, defaultprevented
// target, toElement, srcElement, currentTarget
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode


// Wrong Approach
// document.getElementById('images').onclick = function(e){
//           console.log("images clicked!!!");
// }


// Right Approach


// Event Propagation
// 1. Bubling 
// (bottom to top)
document.getElementById('images').addEventListener('click', () =>{
          console.log("images clicked!!!");
})


// 2. Capturing
// (top to bottom) 
document.getElementById('images').addEventListener('click', () =>{
          console.log("images clicked!!!");
}, true)

document.getElementById('batman').addEventListener('click', () =>{
          console.log("batman !!!");
}, true)

// Stopping propagations
document.getElementById('car1').addEventListener('click', (e) =>{
          e.stopPropagation();
          console.log("Car clicked!!!");
})


// PreventDefault()
document.getElementById('google').addEventListener('click', (e) =>{
          console.log("Google clicked!!!");
          e.stopPropagation();
          e.preventDefault();

}, false)


// Remove the clicked images...
document.querySelector('#images').addEventListener('click', function(e){
          console.log(e);
          console.log(e.target);
          console.log(e.target.parentNode);
          console.log(e.target.tagName);
          console.log(e.target.id);

          if(e.target.tagName === "IMG"){
              let removeIt = e.target.parentNode;
          // removeIt.remove();
          removeIt.parentNode.removeChild(removeIt);      
          }
}, false)
