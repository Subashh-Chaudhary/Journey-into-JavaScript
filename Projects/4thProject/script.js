let guessedNumber = document.getElementById("input");
const button = document.querySelector('#submitButton');
const warning = document.querySelector(".warning");
const numbers = document.querySelector(".guessed-numbers");
let totalGuessess = document.querySelector(".total-guesses");
let newgame = document.querySelector("#new");

const randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);
let guessCount = 0;
let prevGuesses = [];

let playGame = true;

if(playGame){
    button.addEventListener('click', function(e){
      e.preventDefault();
      const guess = parseInt(guessedNumber.value);
      console.log(guess)
      validate(guess);
    })
  }

function validate(guess){
  if(isNaN(guess)){
    alert("Please enter a valid number");
  }
  else if(guess < 1){
    alert("Please enter a number more than 1.");
  }
  else if(guess > 100){
    alert("Please enter a number less than 100.");
  }
  else{
    prevGuesses.push(guess);
    if(guessCount === 10){
      displayGusess(guess);
      warning.style.color = "red";
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();  
    } 
    else{
        displayGusess(guess);
        checkGuess(guess);
      }
  }
}

function checkGuess(guess){
  if(guess === randomNumber){
    warning.style.color = "green";
    displayMessage(`Congratulation!! You guess it Right.`);
  }

  else if(guess < randomNumber){
    displayMessage(`Bad luck!! Number is too low`);
  }

  else if(guess > randomNumber){
    displayMessage(`Bad luck!! Number is too high`);
  }

}

function displayGusess(guess){
  guessedNumber.value = "";
  numbers.innerHTML += `${guess} ,`;
  guessCount++;
  console.log(`Guess Count: ${guessCount}`);
  if(guess === randomNumber){
    totalGuessess.innerHTML = `You guess it right in ${guessCount} try..`;
    endGame();
  }
  else{
    totalGuessess.innerHTML = `Remaining Guessess: ${10 - guessCount}`;
  }
}


function displayMessage(message){
  warning.innerHTML = `${message}`;
}


function endGame(){
  guessedNumber.value = "";
  guessedNumber.setAttribute('disabled', '');
  button.setAttribute('disabled', '');

}

function newGame(){
  newGame.addEventListener('click', function(){
    guessedNumber = document.getElementById("input");
    let guessCount = 0;
    let prevGuesses = [];
    numbers.innerHTML;
    button.removeAttribute('disabled');
    guessedNumber.removeAttribute('disabled');
    playGame = true;
  })

}