let randomNumber = Math.round(Math.random() * 99 + 1);

const submit = document.querySelector("#subt");
let userInput = document.querySelector("#guessField");
let prevGuesses = document.querySelector(".guesses");
let attempts = document.querySelector(".lastResult");
let lowOrHi = document.querySelector(".lowOrHi");
let resultParse = document.querySelector(".resultParas");

let prevGuessesNumbers = [];
let play = true;
let countdown = 3;
let p = document.createElement("p");

if (play) {
    submit.addEventListener("click", (e) => {
        e.preventDefault();
        let userNumber = parseInt(userInput.value);
        console.log(userNumber);
        if(countdown<= 0){
            endGame()
        }else{
            checkValidNumber(userNumber);
        }
    });
}

let checkValidNumber = (number) => {
    let validate = isNaN(number);
    console.log(validate, typeof number, number)
    if (!validate ) {
        if (number > 0 && number <= 100) {
            userInput.value = "";
            prevGuessesNumbers.push(number);
            prevGuesses.innerText += `${number},  `;
            countdown -= 1;
            attempts.innerText = countdown;
            compare(number);
        } else {
            message(`number not in range`);
        }
    } else {
        message(`number is not valid`);
    }
};

let compare = (number) => {
    if (number === randomNumber) {
        message(`you have guessed the right number`);
        endGame();
    } else {
        if (number > randomNumber) {
            message(`tooo high`);
        } else {
            message(`tooo looow`);
        }
    }
};

let message = (m) => {
    lowOrHi.innerText= m;
};

let endGame = () => {
    play = false;
    userInput.setAttribute("disabled","");
    message(`actual number ${ randomNumber }`);
    p.innerHTML = `<input type='button' class="restart" value='Restart Game'> `;
    
    resultParse.appendChild(p);
    

};

let restartGame = () => {
    // rewrite this function this is bugged check again.
    // p.addEventListener("click",restartGame);
    console.log(`executed`)
    play= true;
    userInput.removeAttribute('disabled');
    randomNumber = Math.round(Math.random() * 99 + 1);
    prevGuessesNumbers = [];
    countdown = 10;
};
