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

document.querySelector('a[title="Java"') 
    //selecting an achor tag with attribute of Java.

    /*In-browser exercise*/

    const doneTodos = document.querySelectorAll('.done')
    const checkbox = document.querySelector('[type="checkbox"]')

//MANIPULATING using DOM
    // document.querySelector('p').innerText = 'new text here'
    
    /*In-browser exercise*/
    //  document.querySelector('span').innerHTML ='Disgusting'