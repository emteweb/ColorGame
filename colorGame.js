/* var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
] */
var numSquares = 6;
var colors = generateRandomColors(numSquares);
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
    numSquares = 3;
    colors =generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    // to change colors of 3 squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else // to hide remaining squares
        squares[i].style.display = "none";
    }
});

hardBtn.addEventListener("click",function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors =generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    // to change colors of 3 squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function(){
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color
    pickedColor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Color";
    //change colors of squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "NEW COLORS"; 
    messageDisplay.textContent = "";
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
        resetButton.textContent = "PLAY AGAIN";
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