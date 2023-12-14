const guess = document.querySelector('#guessField');
const sbtn = document.querySelector('#subt');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const loworhi = document.querySelector('.lowOrHi');
const form = document.querySelector('.form');
const resultParas = document.querySelector('.resultParas');
const wrapper = document.querySelector('#wrapper');

let play = true

const newgame = document.createElement('h1');
const endGame  = () => {
    loworhi.innerHTML = `<h2>The Random Number Was ${random}</h2>`;
    newgame.innerHTML = 'Click Here To Replay';
    newgame.style.cursor = 'pointer'
    newgame.addEventListener('click', (e) => {
       newGame() 
    });
    wrapper.appendChild(newgame);
}

const newGame = () =>{
    guesses.innerHTML = '';
    loworhi.innerHTML = '';
    lastResult.innerHTML = 10;
    wrapper.removeChild(newgame);
    guessDone = 0;
    random = random_num();
    play = true
}

const random_num = () => (Math.round(Math.random() * 100 + 1))
let random = random_num();


const validateGuess = (value) => {
    if (play){
    if(isNaN(value)) {
        loworhi.innerHTML = '<h1>Please enter a number</h1>';
      }
    else if (!value){
        loworhi.innerHTML = '<h1>Please enter a number</h1>';
    }
    else {
        
        evaluateGuess(value)
    }
    }
}

let guessDone = 0;
const evaluateGuess = (value) =>{
    if (guessDone < 10) {
        let diff = Math.abs(random - value);

        if (guessDone == 0) {
          guesses.append(`${value}`);
        } 
        else {
          guesses.append(`, ${value}`);
        }
        
        if (diff == 0) {
          play = false;
          loworhi.innerHTML = '<h2>Congratulations!! You guessed the number</h2>';
          endGame()
        } else if (diff < 5) {
          loworhi.innerHTML = 'Number is too close.';
        } else if (diff < 10) {
          loworhi.innerHTML = 'Number is close.';
        } else if (diff < 20) {
          loworhi.innerHTML = 'Number is far.';
        } else {
          loworhi.innerHTML = 'Number is too far.';
        }

        guess.value = '';
        guessDone++;
        console.log(guessDone)
        if (guessDone == 10){
            play = false
            endGame()
        }
        lastResult.innerHTML = 10 - guessDone;
    }
}


sbtn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(random);
  
  validateGuess(guess.value)
  }
);


