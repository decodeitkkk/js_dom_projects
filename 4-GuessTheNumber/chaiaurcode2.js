let previousGuess = [];
let attemptsLeft = 10;

addEventListener("submit", (e) => {
    e.preventDefault();

    // fixing countdown
    attemptsLeft -= 1;
    if (attemptsLeft >= 0) {
        let lastResult = (document.querySelector(".lastResult").innerText =
            attemptsLeft);
        // console.log(`lastResult: ${lastResult}`);
    } else {
        alert(`attempts over`);
    }

    //Generating random Number here ----
    let randomNumber = Math.round(Math.random() * 99 + 1);

    // Getting User guessed number
    let number = document.getElementById("guessField").value;
    let number2 = (document.getElementById("guessField").value = "");

    if (number != randomNumber) {
        previousGuess.push(number);
        let guesses = document.querySelector(".guesses");
        guesses.innerText += number
    }

    console.log(`random Number ${randomNumber} ;prevent default ${number} `);
    console.log(previousGuess)
});
