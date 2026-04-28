console.log("Hello World! DOM INTRO")

/*DOM = document object model 
js representation of a webpage.
A bunch of ojects that interacts with js.

type 
console.dir(document) in the console to see the js document.'

Selecting:
    - getElementById
    -getElementsByTagName
    -getElementsByClassName
*/
    // const banner = document.getElementById('banner')
        //save the banner id as banner variable

//query selector
    //one method to select element name, id or class

document.querySelector('a[title="Java"]') 
    //selecting an achor tag with attribute of Java.

    /*In-browser exercise*/

    const doneTodos = document.querySelectorAll('.done')
    const checkbox = document.querySelector('[type="checkbox"]')

//MANIPULATING using DOM
    // document.querySelector('p').innerText = 'new text here'
    
    /*In-browser exercise*/
    //  document.querySelector('span').innerHTML ='Disgusting'

    //getAttribute example 
    const firstLink = document.querySelector('a')
    firstLink.getAttribute('href')
    firstLink.getAttribute('id')

    //in console example
    const input2 = document.querySelector('input[type="text"]') 
    input2.type 

    //in-browser exercise. Change the img source and alt text
        //first attempt
    document.querySelector('img').src = 'https://images.unsplash.com/photo-1581061090142-c2cd0ec9f021?w=200'
        //with help
        const img = document.querySelector('img');
        img.src = 'https://images.unsplash.com/photo-1581061090142-c2cd0ec9f021?w=200';
        img.alt = 'chicken';

    //in-browser exercise
        //first attempt
            // const container = document.querySelector('div[id="container"]');
            // container.textAlignment = 'center';

            // const img = document.querySelector('img').src; 
            // img.width  = '150px';
            // img.borderRadius = '50%'

        //second attempt with help
        const container = document.querySelector('div#container');
        container.style.textAlign = 'center';
        const img = document.querySelector('img');
        img.style.width = '150px';
        img.style.borderRadius = '50%';

            // to finish
        // Coding Exercise 55: Magical Forest Circle Exercise
        // Start
        // Coding Exercise 56: Rainbow Text Exercise

//selecting classes and manipulating them

const h2 = document.querySelector('h2')
// h2.getAttribute('class')
// h2.setAttribute('class', 'purple')
h2.classList.add('purple')

    //in-browser exercise with help
    document.querySelectorAll('li').forEach(el => {
        el.classList.toggle('highlight');
      });