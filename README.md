## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)


### Overview

Project based on the counter builder from Scrimba. The course covered basic JS on creating a counter for people coming in and out of a train. 

### Screenshot

(./images/desktop-final.jpg)
(./images/mobile-final.jpg)


## My process

For this process I went through the lesson on buidling the counter and then deleted everything and rebuilt it with just using the notes that I've created (see below). And to make it an extra challenge I decided to use my CSS skills to customize it and make it a little nicer and responsive.

JULY 20, 2022 - As of this date stamp the customizations for responsiveness aren't complete quite yet.


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Vanilla Javascript
- Mobile-first workflow (attempted)

### What I learned

With Javascript taking a bit to click I learned a few things that I've learned and then learned some functions such as onclick for buttons (which is one I will likely be using a lot). I also realized that some things are just stupid easy and I tend to think a little *too critically which is something that will likely take some practice with writing vanilla Javscript. 

I also learned that it's so important to console.log every step to ensure you're avoiding bugs, especially as I'm learning Javascript. I remember when I was first learning I wasn't doing it and was just getting more confused on what I did wrong but now after each line I do it as good practice but it makes the project a lot more manageable. 

# Notes below

People counter based on a project

- Add script tag at the *bottom* of the body element

- Javascript reads from top to bottom

- console.log(NAME) is going to be your BEST FRIEND in each step to make sure everything is working properly.

- onclick="NAME()" is used in the tag like a class

EXAMPLE of Incrementing:
let count = 5

function NAME() {
    count = count + 1

}

NAME() <-- This repeat means you're telling Javascript to run the function several times.
NAME()
console.log (count) <--- You're telling JS "do the thing!"


- another word for function NAME() is command (aka Javascript do this)

- declaring a function is adding action. 'call the function' means to do the action (do the thing!) Example below


function hello() {
    console.log(40)
    l
}

hello() <----- THIS IS 'CALL/INVOKE' THE FUNCTION DO NOT FORGET THIS STEP AS IT IS IMPORTANT

- You have to define a value within a function and not outside. 

- Let variables are 'blocked scopes'

- When it comes to making sure that a button does something over and over again, you'll want to put all the actions within the function of it.

EXAMPLE: 

function increment() {
    count = count + 1
    console.log(count)
}

- Breaking down .document.getElementById("NAME").innerText = 5

    - DOCUMENT.GETELEMTENTBYID -> Is saying that you want to highlight a specific class in HTML.

    - ("NAME")-> You're specifying what the class name is. This is also called 'passing an argument' you're giving data for the JS to work with.

    - .innerText = count -> This is specifcying the text within the HTML you specified to modify

- Document Object Model (DOM): How you use JS to modify a website.

- For ONCLICK("") functions you can literally label it whatever you want (i.e. onclick("hello)). Just make sure it's specific so you know what it's supposed to be doing.

- STRINGS = TEXT
    - CONCATONATE = to put strings together 

- STRINGS > NUMBERS: Meaning if there's a string number and a number, the number will be turned into a string and will not add together like normal math.

    EXAMPLE: 
        console.log(4 + 5) // 9
        console.log("2" + "4") // "24"

- When rendering a message out you don't need to always use the function. Use the function when you're wanting to repeat a command several times.

- RENDERING A MESSAGE can look like this: NAME.innerText += "👋" is the same as NAME.innerText = (NAME.innerText +) "👋"

- use TEXTCONTENT instead of INNERTEXT (based on findings in MDN)