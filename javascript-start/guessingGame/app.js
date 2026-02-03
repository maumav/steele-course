let maximum = parseInt(prompt("Enter the maximum number: "));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number: "));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
let attempts = 1;

let guess = parseInt(prompt("Enter your first guess!"));
while (guess !== targetNum) {
    if (guess === 'q') breakl;
    guess = parseInt(guess);
    attempts++;
    if (guess > targetNum) {
        guess = parseInt(prompt("Too high! Enter a new guess: "));
        attempts;
    } else if (guess < targetNum){
        guess = parseInt(prompt("Too low! Enter again!"));
        attempts++;
    } else {
        guess = prompt("Invalid guess. Enter a number or 'q' to quit.")
    }
}
console.log(`You got it! It took ${attempts} guesses.`)