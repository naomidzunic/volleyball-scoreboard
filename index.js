//Isolate the scores for Home & Guest
let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")

//Make sure that the scores change publicly for Home & Guest

//Set a variable for the count to start at zero
let count = 0


function homeOne(){
  count += 1
  console.log(count)
  document.getElementById("home-el").textContent = count
}

function homeTwo(){
    count += 2
    console.log(count)
    document.getElementById("home-el").textContent = count
  }

  function homeThree(){
    count += 3
    console.log(count)
    document.getElementById("home-el").textContent = count
  }

  function guestOne(){
    count += 1
    console.log(count)
    document.getElementById("guest-el").textContent = count
  }
  
  function guestTwo(){
      count += 2
      console.log(count)
      document.getElementById("guest-el").textContent = count
    }
  
    function guestThree(){
      count += 3
      console.log(count)
      document.getElementById("guest-el").textContent = count
    }



let recordScore = document.getElementById("record")
let resetScore = document.getElementById("reset")


function record() {
    //if home score is greater than guest score, then add 1
    //if guest score is greater than home score, then add 1
}



function reset() {
count = 0
document.getElementById("home-el").textContent = count
document.getElementById("guest-el").textContent = count

}



