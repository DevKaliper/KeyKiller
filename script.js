

const keys = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"];

const randomKey = () => keys[Math.floor(Math.random() * keys.length)];

//This function generates a random key
function generateKey(){
  //This line gets a random key from the randomKey function
  const key = document.getElementById(randomKey())
  //This line adds the class "selected" to the key variable
  key.classList.add("selected");

}

//This line listens for a key press
document.addEventListener("keyup", e => {
  //This line gets the key value of the key pressed
  const keyOn = String.fromCharCode(e.keyCode);
  //This line gets the key pressed from the DOM
  const key = document.getElementById(keyOn);
  //This line gets the key that has the class "selected"
  const highlight = document.querySelector(".selected");
  //This line adds the class "hit" to the key variable
  key.classList.add("hit");
  //This line waits for the animation to end
  key.addEventListener("animationend", () => {
    //This line removes the class "hit" from the key variable
    key.classList.remove("hit");
  });
  //This line checks to see if the key pressed is the same as the key that has the class "selected"
  if (keyOn === highlight.id) {
    //This line removes the class "selected" from the key variable
    highlight.classList.remove("selected");
    //This line runs the function generateKey
    generateKey();
  }
})

//This line runs the function generateKey
generateKey();
