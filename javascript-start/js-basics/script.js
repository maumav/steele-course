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


/*Nested Loops example*/
// const seatingChart = [
//     ['Kristen', 'Erik', 'Naomi'],
//     ['Geoffrey', 'Joe', 'Kevin', 'Lucas'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]
// for (let i = 0; i < seatingChart.length; i++){
//     const row = seatingChart[i];
//     console.log(`ROW #${i + 1}`)
//     for (let j = 0; j < row.length; j++){
//         console.log(row[j])
//     }
// }

/*While loops*/
// let count = 0;
// while (count < 10) {
//     count++;
//     console.log(count)
// }

/*Another while loop example */
// const secret_message = "BabyHippo";

// let guess = prompt("Enter message here: ");
// while (guess !== secret_message ){
//     guess = prompt("Enter message here: ");
// }
// console.log("Congrats, you got the messeage!");

// let input = prompt("Say something...")
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === "stop copying me") break;
// }
// console.log("Ok you win!")

/*For..of Loop */
    /*First*/
    // const subreddits = ['cringe','books', 'plants', 'chickens','soccer']

    // for (let sub of subreddits) {
    //     console.log(sub)
    // }

    // /*Second example*/
    // const seatingChart2 = [
    //     ['Kristen', 'Jacob', 'Edward'],
    //     ['Carlyle', 'Yumi', 'Howard'],
    //     ['Sakura', 'Jack']
    // ]

    // for (let row of seatingChart2) {
    //     for (let student of row) {
    //         console.log(student)
    //     }
    // }




//     const numbers = [1,2,3,4,5,6,7,8,9]; //DON'T CHANGE THIS LINE PLEASE!

// // WRITE YOUR LOOP BELOW THIS LINE:
// for (let num1 of numbers) {
//     for (let num2 of num1) {
//         console.log(num2)
//     }
// }



// for (let i = 9; i >= 0; i += 6){
//     console.log(i, numbers[i])

// }

// for (let i = 1; i <= 9; i += 2){
//     console.log(i, numbers[i]);
// }

/*Claude AI*/
// If you want to use a for...of loop to multiply each number by itself and store the results, here's how:
// javascript

    // let squared = [];

    // for (let num of numbers) {
    // squared.push(num * num);
    // }

    // console.log(squared); // [1, 4, 9, 16, 25, 36, 49, 64, 81]


    // /* Or if you want to display it with the index numbering: */
    // let index = 1;

    // for (let num of numbers) {
    // console.log(`${index}. ${num * num}`);
    // index++;
    // }

    // const numbers = [1,2,3,4,5,6,7,8,9]; //DON'T CHANGE THIS LINE PLEASE!
    /*Try */
    // let index = 1;

    // for (let count of numbers) {
    //         console.log(`${count}. ${count * count}`)
    //     }

    /*Another try*/
    // for (let count of numbers) {
    //         console.log(`${count}. ${count * count}`)
    //     }

    /*SUCCESS TRY*/
    // const numbers = [1,2,3,4,5,6,7,8,9]; //DON'T CHANGE THIS LINE PLEASE!

    // // WRITE YOUR LOOP BELOW THIS LINE:
    
    //     for (let count of numbers) {
    //             console.log(`${count * count}`);
    //         }




/*FUNCTIONS*/

    // function greeting(firstName) {
    //     console.log(`Good morning, ${firstName}!`)
    // }

    // greeting('Stitch');

    /*Example 2*/
    // function greet(firstName, lastName) {
    //     console.log(`Good day, ${firstName} ${lastName[0]}.`) /*Last name outputs index 0 only.*/
    // }

    /*Example 3*/
        // function repeat(str, numTimes) {
        //     let result = '';
        //     for(let i = 0; i < numTimes; i++) {
        //         result += str;
        //     }
        //     console.log(result)
        // } 

    /*In-browser exercise. Print Snake Eyes! otherwise print Not Snake Eyes!*/
        // function isSnakeEyes(num1, num2){
        //     if (num1 === 1 && num2 === 1) {
        //         console.log("Snake Eyes!") 
        //     } else {
        //         console.log("Not Snake Eyes!")
        //     }
        // }
        // isSnakeEyes()

     /*In-browser exercise*/
    //  function multiply(num1, num2) {
    //     return num1 * num2;
    // }
    // multiply(2, 3)
    // multiply(9, 9)
    // multiply(5, 4)

     /*in-browser; lastElement exercise*/
    // /*try 1*/
    //  function lastElement([x,y,z]) {
    //     return x[z] 
    // }
    // /*try 2*/
    // function lastElement([x]) {
    //     return x[2]
    // }


    /*FIZZ BUZZ TRY*/
    // function fizzBuzz(n) {
    //     for (let i = 1; i <= n; i++) {
    //       if (i % 15 === 0) {
    //         console.log("FizzBuzz");
    //       } else if (i % 3 === 0) {
    //         console.log("Fizz");
    //       } else if (i % 5 === 0) {
    //         console.log("Buzz");
    //       } else {
    //         console.log(i);
    //       }
    //     }
    //   }

    /*FUNCTION SCOPE SECTION*/

        // let bird = 'Scarlet Macaw';
        // function birdWatch() {
        //     let bird = 'Great Blue Heron'; 
        //     console.log(bird)
        // }
        // birdWatch()
            /*If there is a variable inside the function named bird, it will be called.
                Otherwise, the outside variable will be called.
            */

    // /*BLOCK SCOPE Section*/ 

    //     let radius = 8;
    //     if (radius > 0){
    //         const PI = 3.14;
    //         let circ = 2 * PI * radius;
    //     }
    //     console.log(radius)
    //     console.log(PI) // not defined
    //     console.log(circ) // not defined
        /*only for conditionals or loops.
        The variables inside a block, it only exists only within the curly braces.
        
        */

        /*LEXICAL SCOPE Section*/

            // function outer() {
            //     let hero = 'Black Panther';

            //     function inner() {
            //         let cryForHelp = `${hero}, please save me!`
            //         console.log(cryForHelp);
            //     }inner();
                
            // }
            // outer();

            //     // When outer() is called, it automatically calls inner() inside it, which prints the message to the console.

        /*FUNCTION EXPRESSIONS*/

            // // const add = function(x,y) {
            // //     return x + y;
            // }
            // function is stored inside a variable.   
            // we call the function using the variable name.
        
        /* HIGHER ORDER FUNCTIONS */
            /* functions that operate on/with other functions.
             can: 1, accept other functions as arguments
                    2, return a function. 
            */

            //    function callTwice(func) {
            //     func();
            //     func();
            //    }

            //    function callTenTimes(f) {
            //     for (let i = 0; i < 10; i++) {
            //         f()
            //     }
            //     }

            //     function rollDie() {
            //         const roll = Math.floor(Math.random() * 6) + 1
            //         console.log(roll)
            //     }
            // callTwice(rollDie)

                // Returning Function
            // function makeMysteryFunc(){
            //     const rand = Math.random();
            //     if (rand > 0.5) {
            //         return function() {
            //             console.log("Good function")
            //         }
            //     } else {
            //         return function() {
            //             alert("You have been infected")
            //         }
            //     }
            // }

            // function makeBetweenFunc(min, max) {
            //  return function(num){
            //     return num >= min && num <= max;
            //  }
            // }
            // const isChild = makeBetweenFunc(0, 18) #makeBetweenFunc is captured as as variable 
            // isChild(40)
            // false
            // isChild(4)
            // true
                // function isBetween(num) {
                //     return num >= 50 && num <= 100
                    
                // }

    /* Defining METHODS*/
            /*We can add functions as properties on objects.
            */
            // const myMath = {
            //     PI: 3.14159,
            //     square: function (num) {
            //         return num * num;
            //     },
            //     cube: function (num) {
            //         return num ** 3;
            //     }
            // }

                //shorthand style 
                //     square(num) {
                //         return num * num;
                //     },
                //     cube(num) {
                //         return num ** 3;
                //     }
                // }

            /* In-browser test:
                I was missing const at first, that was why it didn't work.
            */
                // const square = {
                //     area : function(side) {
                //     return side * side
                //     },
                //      perimeter : function(side) {
                //     return side * 4 
                //     }
                // }
                //    square.area(10)
                //    square.perimeter()
                
        /*THIS in Methods
            use the keyword th is, to access other properties
            on the same object.
        
        */
         
            /*In-browser exercise:
            My initial code which didn't work.
            */
            // const hen = {
            //     name: 'Helen',
            //     eggCount: 0,
            //     layAnEgg(eggCount) {
                    
            //         for (let i = 0; i < 5; i++ ){
            //             console.log(i)
            //             console.log("EGG")
            //             console.log(`Helen's egg count: ${this.eggCount++}`)
            //         }
                    
                    
            //     }
            // }
            // hen.layAnEgg()

            /*Code that worked */
            // const hen = {
            //     name: 'Helen',
            //     eggCount: 0,
            //     layAnEgg() {
            //         this.eggCount++;
            //         return "EGG";    
            //     }
            // }

           /* TRY/CATCH */

        //    try {
        //     hello.toUpperCase();
        //    } catch {
        //     console.log("Error!")
        //    }
        //    hello.toUpperCase()
        //    console.log("After")

        // function yell(msg){
        //     try {
        //         console.log(msg.toUpperCase().repeat(3));
        //     } catch (e) {
        //         console.log("Please pass a string!")
        //     }
        // }

/*ARRAY CALLBACK METHODS */

    /* - use new arrow function syntax
        - understand and use these methods:
            -forEach
                Accepts a callback function.
                Calls the function once per element in the array.
            -map
                Creates a new array with the results of calling a callback on
                every element in the array.
            -arrow functions
                'syntactically compact alternative' to a regular
                function expression.
                there is also called IMPLICIT RETURN

            -filter
            -find
            -reduce
            -some
            -every

            They are array methods that require us to pass in
            a function.
    */

        /*forEach            */
        //     const movies = [
        //         {
        //             title: 'Amadeus',
        //             score: 99
        //         },
        //         {
        //             title: 'Stand By Me',
        //             score: 85
        //         },
        //         {
        //             title: 'Parasite',
        //             score: 95
        //         }
        //     ]
        // movies.forEach(function(movie){
        //     console.log(`${movie.title} - ${movie.score}/100`)
        // })
        
        /*MAP*/
        // const texts = ['rofl', 'lol', 'omg', 'hi'];
        // const textInCaps = texts.map(function(t) {
        //     return t.toUpperCase();
        // })

        // /*In-browser exercise on MAP*/
        // // DO NOT ALTER THE FOLLOWING CODE:
        //     const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

        //     // Write your code here

        //     const firstNames = fullNames.map(function(name) {
        //         return name.first
        //     }

        /*ARROW FUNCTION*/
        // const square = (x) => {
        //     return x * x;
        // }

        // const sum = (x,y) => {
        //     return x + y;
        // }
        //     /*In-browser exercise
        //     SUCCESS
        //     */
        //     const greet = (name) => {
        //         return `Hey ${name}!`;
        //       };
              
        //       console.log(greet('Blue'));
        //       console.log(greet('Scout'));
        //       console.log(greet('asfadf'));

        /*Implicit Returns*/
        //  const isEven = num => ( //implicit return, notice the use of parenthesis instead of curly braces
        //     num % 2 === 0
        //  );
        //  const isEven = num => num % 2 === 0; //one-liner implicit return

        //  const add = (a, b) => a + b //implicit return; one-liner


            /* Arrow Functions, another example using movies*/
        //  const movies1 = [
        //             {
        //                 title: 'Up',
        //                 score: 99
        //             },
        //             {
        //                 title: 'Cinderella',
        //                 score: 85
        //             },
        //             {
        //                 title: 'Snow White',
        //                 score: 95
        //             }
        //         ]
        //        const newMovies =  movies1.map(movie => (
        //         `${movie.title} - ${movie.score / 10}`
        //        ))

    /* setTimeout */
    
        // delays the execution of a function.
        // console.log("Hello...")
        // setTimeout(() => {
        //     console.log("... are you still there?")
        // }, 3000) //3000 is 3 seconds.This section will run after 3 seconds.
        // console.log("Goodbye!")
            // hello and goodbye will show as output right away in the console.
    
    /*setInterval*/
        // const id = setInterval(()=> {
        //     console.log(Math.random())
        // }, 2000);
        //to clear/stop the function type clearInterval(id) 


    /*.filter method*/
     // creates a new array with all elements that pas the test implemented by the provided function.

                    //         const movies1 = [
                    //         {
                    //             title: 'Up',
                    //             score: 99,
                    //             rank: 1
                    //         },
                    //         {
                    //             title: 'Cinderella',
                    //             score: 85,
                    //             rank: 3
                    //         },
                    //         {
                    //             title: 'Snow White',
                    //             score: 95,
                    //             rank: 2
                    //         },
                    //         {
                    //             title: 'Aladdin',
                    //             score: 60,
                    //             rank: 4
                    //         }
                    //     ]
                    // const goodMovies = movies1.filter(m => m.score > 80)
                    // const goodTitles = goodMovies.map(m => m.title) //using .map
                    // // movies1.filter(m => m.score > 80).map(m => m.title) //combining both in one line.
                    // const badMovies = movies1.filter(m => m.score < 70)
                    //         // the original array, movies1, is not changed.

                /*In-browser exercise*/
                 /*
                                // function validUserNames(usernames) {
                                //   'helloBye', 'stacy01WowYay', 'qwerty', '12345', '123456789011'
                                //   validUserNames.filter(usernames => text.length > 10)
                                // }
                                My first attempt at writing filter method above.
                                */

                                // second attempt with help 
                                // function validUserNames(usernames) {
                                //     return usernames.filter(username => username.length <= 9);
                                // }
                                
                                // console.log(validUserNames(usernames));


/* SOME and EVERY; they are boolean methods which means will return TRUE or FALSE */
    // const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77]
    // exams.every(score => score <= 75)

    // //example
    // movies.some(movie => movie.year > 2015)

        /*In-browser exercise
        Define a function called allEvens that accepts a single array of numbers.  
        If the array contains all even numbers, return true.  
        Otherwise, return false. 
        */
       //with help
        function allEvens(numbers) {
            return numbers.every(num => num % 2 === 0);
          }
          //Claude AI: The => arrow means "take this input, and return this output":
            // Left side → the parameter(s) it receives (num)
            // Right side → the expression it returns (num % 2 === 0)

/*REDUCE*/
    //executes a reducer function on each element of the array resulting in a single value.
    //     let movies1 = [
    //                         {
    //                             title: 'Up',
    //                             score: 99,
    //                             rank: 1
    //                         },
    //                         {
    //                             title: 'Cinderella',
    //                             score: 85,
    //                             rank: 3
    //                         },
    //                         {
    //                             title: 'Snow White',
    //                             score: 95,
    //                             rank: 2
    //                         },
    //                         {
    //                             title: 'Aladdin',
    //                             score: 60,
    //                             rank: 4
    //                         }
    //                     ]

    // const highestRated = movies1.reduce((bestMovie, currentMovie) => {
    //     if (currentMovie.score > bestMovie.score){
    //         return currentMovie;
    //     }
    //     return bestMovie;
    // })

    /*Arrow Functions & this*/
    // const person = {
    //     firstName: 'Viggo',
    //     lastName: 'Mortensen',
    //     fullName: function () {
    //         return `${this.firstName} ${this.lastName}`
    //     },
    //     shoutName: function () {
    //         setTimeout(() => {
    //             console.log(this);
    //             console.log(this.fullName())
    //         }, 3000)
    //     }
    // }

/*Newer Javascript Features */

//default parameters
        //   function greet(person, msg = "Hey there", punc = "!") {
        //     console.log(`${msg}, ${person}${punc}`)
        //   }

//spread in function calls
        //   Math.max(2,5,1) //retro way of looking for max number.

        //   const nums = [2,5,1]
        //   Math.max(...nums) //new way of outputting the max number

//spread in array literals
        //   const cats = ['Bluey', 'Scout', 'Rocket'];
        //   const dogs = ['Rusty', 'Wyatt'];

        //   const allPets = [...cats, ...dogs] //if i add into allPets a new name, the cats and dogs seperate array will not change
        //     //only the allPets array.

//spread with objects literals
//           const feline = { legs: 4, family: 'Felidae' };
//           const canine = { isFurry: true, family: 'Caninae' };
//           const catDog = {...feline, ...canine};

// //rest parameters
//           function raceResults(gold, silver, ...everyoneElse) {
//             console.log(`Gold goes to: ${gold}`)
//             console.log(`Silver goes to: ${silver}`)
//             console.log(`Thanks to everyone else: ${everyoneElse}`)
//           }

//           raceResults('Tammy', 'Todd', 'Tina', 'Trevor', 'Travis', 'Jake') //The names will go into the respective medals

//destructuring arrays
          const score = [1234, 5678, 9101112, 13141516, 171819120];
          const [gold, silver, bronze, ...everyonElse ] = score;
          //the original variable array is not altered.

//destructuring objects
          const user = {
            email: 'brucewayne@mail.com',
            password: 'bruce123',
            born: 1988,
            firstName: 'Bruce',
            lastName: 'Wayne',
            city: 'San Francisco',
            state: 'California'
          }

          const {email, firstName, lastName, city} = user;
          const { born: birthYear, lastName: lastName2 } = user;
          //the original variable objects is not altered.

//destructuring parameters
          function fullName({ firstName, lastName }) {
            return `${firstName} ${lastName}`
          }
          //type fullName(user) in console to get the function working.

            //using the movies variable
          movies.map(({title, score, year}) {
            return `${title} (${year}) is rated ${score}`
          })