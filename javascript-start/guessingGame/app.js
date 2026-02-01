let maximum = parseInt(prompt("Enter the maximum number: "));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number: "));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
let attempts = 1;

let guess = parseInt(prompt("Enter your first guess!"));
while (guess !== targetNum) {
    attempts++;
    if (guess > targetNum) {
        guess = parseInt(prompt("Too high! Enter a new guess: "));
    } else {
        guess = parseInt(prompt("Too low! Enter again!"));
    }
}
console.log(`You got it! It took ${attempts} guesses.`)