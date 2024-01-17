let randomNumber = Math.round(Math.random() * 99 + 1);

const submit = document.querySelector("#subt");
let userInput = document.querySelector("#guessField");
let prevGuesses = document.querySelector(".guesses");
let attempts = document.querySelector(".lastResult");
let lowOrHi = document.querySelector(".lowOrHi");
let resultParse = document.querySelector(".resultParas");

let prevGuessesNumbers = [];
let play = true;
let countdown = 2;
let p = document.createElement("p");

if (play) {
    submit.addEventListener("click", (e) => {
        e.preventDefault();
        let userNumber = parseInt(userInput.value);
        console.log(userNumber);
        if(countdown <= 0){
            endGame()
            message(`acutal number : ${randomNumber}`)
        }else{
            checkValidNumber(userNumber);
            attempts.innerText = countdown;
        }
    });
}


let checkValidNumber = (number) => {
    let validate = isNaN(number);
    // console.log(validate, typeof number, number)
    if (!validate ) {
        if (number > 0 && number <= 100) {
            userInput.value = "";
            // prevGuessesNumbers.push(number);
            prevGuesses.innerText += `${number},  `;
            countdown= countdown-1;
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
    // lowOrHi.innerText= m;
    Toastify({
        text: m,
        className: "info",
        duration:3000,
        stopOnfocus:true,
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        offset: {
            x: 550, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: 10 // vertical axis - can be a number or a string indicating unity. eg: '2em'
          },
      }).showToast();
};

let endGame = () => {
    play = false;
    userInput.setAttribute("disabled","");
    // message(`actual number ${ randomNumber }`);
    p.innerHTML = `<input type='button' className="restart" value='Restart Game'> `;
    resultParse.appendChild(p);
    
    p.addEventListener("click",restartGame)

};

let restartGame = () => {
    // rewrite this function this is bugged check again.
    // document.querySelector(".restart").addEventListener("click",restartGame);
    console.log(`executed`)
    play= true;
    userInput.removeAttribute('disabled');
    userInput.value="";      // not working
    randomNumber = Math.round(Math.random() * 99 + 1);
    console.log(`number assigned again: ${randomNumber}`);
    prevGuesses.innerText = '';
    message(`Let's Start Game`);
    countdown = 2;
    p.innerHTML=''
};
