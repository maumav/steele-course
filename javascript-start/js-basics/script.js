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

// const age = 68;

// if (age < 5 ) {
//     console.log("You are a baby, FREE!")
// } else if (age < 10 ) {
//     console.log("You are a child. $10")
// } else if (age < 65) {
//     console.log("You are an adult. $20")
// } else {
//     console.log("You are a Senior. $10")
// }

/*truthy and falsey */
// const userInput = prompt("Enter something");

// if (userInput) {
//     console.log("Truthy")
// }
// else {
//     console.log("Falsey")
// 

/*Logical Operators */
/* &&*/
// true && true 
// true

// true && false 
// false

// false && false
// false 

// false && true 
// false 

    // const password = prompt("Enter a password");

    // if (password.length >= 6 && password.indexOf(' ') === -1) {
    //     console.log("Valid Password")
    // }
    // else {
    //     console.log("Incorrect format for password.")
    // }

/*Logical (OR) || */

    //  0-5 free
    //  5-10 $10 
    //  10-65 $20 
    //  65+ free 
        // const age = 7;
        // if (age >= 0 && age < 5 || age >= 65) {
        //     console.log("Free");
        // } 
        // else if (age >= 5 && age < 10) {
        //     console.log("$10")
        // }
        // else if (age >= 10 && age < 65) {
        //     console.log("$20")
        // } 

/* !NOT logical */
// const firstName = prompt("Enter your name:");
// if (!firstName) {
//     firstName = prompt("Try Again!");
// }

// const age = 45;
// if (!(age >= 0 && age < 5 || age >= 65)) {
//     console.log("You are not a baby or a senior!")
// }

// let movieLine = ['tom', 'nancy']
// movieLine.push('oliver')

/*Triple equals array*/
// let array1 = [1,2,3];
// let arrayCopy = array1;
// array1 === arrayCopy
// /* returns true */

// /*Array objects; key-value pairs sample*/
// const product = {
//     name: "Gummy Bears",
//     inStock: true,
//     price: 1.99,
//     flavors: [["grape"], ["apple"], ["cherry"]]
// }

/*product.name = "Cake"
product.["name"] = "Muffin"

*/

    /*product.name 
    array objects keys are turned into strings.
    */

/*LOOPS*/
// for ( let num = 1; num <= 10; num++) {
//     console.log(num);
// }

/*Loops in-browser quiz*/
// let words = "Da ba dee da ba daa"
// for (let i = 1; i <= 6; i++) {
//     console.log(words);
// }

/*Another loops; even numbers*/
// for (let i = 0; i <= 20; i += 2){
//     console.log(i)
// }

/* from 100 taking away 10 all the way to 0 */
// for (let i = 100; i >= 0; i -= 10){
//     console.log(i)
// }

/*In-browser exercise. From 25 to 0, taking away 5*/
// for (let i = 25; i >= 0; i -= 5) {
//     console.log(i)
// }


/*Looping over arrays*/
// const animals = ['lions', 'tigers', 'bears', 'leopards', 'zebras'];
//         for (let i = ; i < animals.length; i++) {
//             console.log(i, animals[i]);
//         }
//             /*starting at index 0 incrementing to index 4*/


/* assuming there is animals variable that lists 312 animals */
// for (let i = 0; i < animals.length; i++) {
//     console.log(i, animals[i])
// }

/*Output in reverse alphabtical order*/
// let animals = ['Abalone',
// 'Albatross',
// 'American lobster',
// 'Anchovy',
// 'Angelfish',
// 'Anglerfish',
// 'Barracuda',
// 'Barnacle',
// 'Basking shark',
// 'Beluga whale',
// 'Blobfish',
// 'Blue crab',
// 'Blue whale',
// 'Blue-ringed octopus',
// 'Bottlenose dolphin',
// 'Box jellyfish',
// 'Brittle star',
// 'Bull shark',
// 'Butterflyfish',
// 'Clownfish',
// 'Conch',
// 'Coral (polyps)',
// 'Cormorant',
// 'Cowrie',
// 'Crown-of-thorns starfish',
// 'Cuttlefish',
// 'Dugong',
// 'Eagle ray',
// 'Flying fish',
// 'Frigate bird']

// for (let i = animals.length - 1; i >= 0; i--){
//     console.log(animals[i])
// }


/*in-browser exercise, print in uppercase*/
// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// // WRITE YOUR LOOP BELOW THIS LINE:
// let uppercase = [];
// for (let i = 0; i < people.length; i++) {
//    uppercase.push(people[i].toUpperCase());
//    console.log(uppercase[i]);
// }

