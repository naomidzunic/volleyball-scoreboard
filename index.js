
// You are declaring what you want to isolate and changed from the DOM
let countEl = document.getElementById("count-el")

// Starting count
let count = 0 

// You're saying "Hey Javascript I want you to do something to "save-el". Remember this info because it will be important to how you're gonna do the task for me."

let saveEl = document.getElementById("save-el")


// "Hey JS this is how I want you to do it exactly"

function increment() {
    // The += is the same as saying count = (count +) 1
    count += 1
    // You're telling JS to take the value of what's in countEl (this is what's in the text) and change it to the new value
    countEl.textContent = count
}

// This function ensures you're saving the number you've logged.


function save() {
    let entries = count + " - "
    saveEl.textContent += entries
    // This ensures you're resetting back to zero
    count = 0
    countEl.textContent = 0
}

