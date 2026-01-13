console.log("Hello from our First JS file!")

// Conditionals
/* if (1 + 1 === 2) {
    console.log("Math still works!")
}
*/ 
// let random = Math.random();
// if (random < 0.5) {
//     console.log("Your number is less than 0.5")
//     console.log(random);
// } else {
//     console.log("Your number is GREATER or EQUAL than 0.5")
// }


/*Using else if */
// const dayOfWeek = prompt("Enter a day").toLowerCase();
// if (dayOfWeek === "monday"){
//     console.log("I hate Mondays!")
// } else if (dayOfWeek === "saturday"){
//     console.log("I LOVE Saturday!")
// } else if (dayOfWeek === "friday"){
//     console.log("I LOVE Friday JAM JAM!")
// } 
// else {
//     console.log("Invalid")
// }


/*Fair Entry Price*/
// 0-5 FREE
// 5 -10 Child $10
// 10 - 65 $20
// 65+ Senior $10

const age = 68;

if (age < 5 ) {
    console.log("You are a baby, FREE!")
} else if (age < 10 ) {
    console.log("You are a child. $10")
} else if (age < 65) {
    console.log("You are an adult. $20")
} else {
    console.log("You are a Senior. $10")
}

