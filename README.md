# counter


People counter based on a project

Notes: 
- Add script tag at the bottom of the body element

- Javascript reads from top to bottom

- console.log() is going to be your BEST FRIEND in each step to make sure everything is working properly.

- onclick="increment()" is used in the tag like a class

EXAMPLE of Incrementing:
let count = 5

function NAME() {
    count = count + 1

}

NAME()
NAME()
console.log (count)


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

- RENDERING A MESSAGE can look like this: welcomeEl.innerText = welcomeEl.innerText + "👋" -> However, we can write it simplly like this -> += . This takes the current value and adds it after ->>>> welcomeEl.innerText += "👋" is the same as welcomeEl.innerText = (welcomeEl.innerText +) "👋"

- use TEXTCONTENT instead of INNERTEXT