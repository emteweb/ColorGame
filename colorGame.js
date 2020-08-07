/* var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
] */
var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
// var pickedColor = colors[3];
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");

    colors =generateRandomColors(3);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
});

hardBtn.addEventListener("click",function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
});

resetButton.addEventListener("click", function(){
    //generate all new colors
    colors = generateRandomColors(6);
    //pick a new random color
    pickedColor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.background = "#232323";
    resetButton.textContent = "New Colors"; // <<<<<<<<<<<<<
})


colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    // add click listener to squares
    squares[i].addEventListener("click", function(){
        //alert("Clicked a square!");
        //alert(this.style.backgroundColor);
    // grab color of clicked sqare
    var clickedColor = this.style.backgroundColor;  
    // compare color to pickedColor  
    if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play again";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
    } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try again!";
    }
    });
}

function changeColors(color){
    // loop through all squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
    //
}

function pickColor(){
    var chosen = Math.floor(Math.random() * colors.length);
    return colors[chosen];
}

function generateRandomColors(num){
    //make array
    var arr = [];
    //repeat num times
    for (var i = 0; i < num; i++) {
        //get random color and push it into array
        arr.push(randomColor());

        
    }
    //return that array
    return arr;

}

function randomColor(){
    // create random colors for rgb
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g +", " + b + ")";
}