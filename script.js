//get elements
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var css = document.querySelector("h3");
var direction = ""; //initial state of direction is none.
var rev = false; 

//get buttons
var buttonVer = document.getElementById("vertical");
var buttonHor = document.getElementById("horizontal");
var buttonRad = document.getElementById("radial");
var randomBtn = document.getElementById("random");
var reverseBtn = document.getElementById("reverse");

gradientHor(); // initial state when starting the website

// to coppy text on click
css.onclick = function() {
  document.execCommand("copy");
  alert("Copied the text: " + css.textContent);
}

css.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", css.textContent);
    console.log(event.clipboardData.getData("text"))
  }
});

// Vertical gradient 
function gradientVer() {
    direction = "linear-gradient(to right,"; //value of direction is "linear-gradient(" when gradientVer() is ran.
  
  body.style.background = 
    direction 
    + color1.value 
    + "," 
    + color2.value
    + ")";

    css.textContent = "background: " + body.style.background + ";";
}

// Orizontal gradient
function gradientHor() {
    direction = "linear-gradient("; //value of direction is "linear-gradient(to right," when gradientHor() is ran.
    body.style.background = 
    direction 
    + color1.value 
    + "," 
    + color2.value
    + ")";

    css.textContent = "background: " + body.style.background + ";";
}

// Radial Gradient
function gradientRad() {
    direction = "radial-gradient("; //value of direction is "radial-gradient" when gradientRad() is ran.
    body.style.background = 
    direction 
    + color1.value 
    + "," 
    + color2.value
    + ")";

    css.textContent = "background: " + body.style.background + ";";
}

// converts one rba value to hex value
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

// is giving a random number 
function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
  }

function getRandomGradient() {
	var m1 = getRandomInt(256);
	var g1 = getRandomInt(256);
	var b1 = getRandomInt(256);
	var m2 = getRandomInt(256);
	var g2 = getRandomInt(256);
	var b2 = getRandomInt(256);
	var randomGradient = direction + "rgb("
	+ m1 + ", " + g1 +", " + b1 
	+ "), rgb("
	+ m2 + ", " + g2 +", " + b2
	+ "))";

    //converts all value I need from rba to hex
    function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
    
	body.style.background = randomGradient;

    color1.value = rgbToHex(m1 ,g1, b1);
    color2.value = rgbToHex(m2 ,g2, b2);

	css.textContent = "background: " + randomGradient + ";";
}

// is reversing the colors from color input
function getReverseColorsA() {
    body.style.background = direction + color2.value + "," + color1.value + ")";
    css.textContent = "background: " + body.style.background + ";";
    var col1 = color1.value;
    var col2 = color2.value;
    color2.value = col1;
    color1.value = col2;
    rev = true;
}

function getReverseColorsB() {
    var col1 = color1.value;
    var col2 = color2.value;
    color2.value = col1;
    color1.value = col2;
    body.style.background = direction + color1.value + "," + color2.value + ")";
    css.textContent = "background: " + body.style.background + ";";
    rev = false;
}

function getReverseColors() {
    rev ? getReverseColorsB() : getReverseColorsA() ;
}

function updateColor() {
    body.style.background = 
    direction //direction value is kept and stored when you clicked one of the option (Horizontal/Vertical/Radial).
    + color1.value 
    + "," 
    + color2.value
    + ")";
    css.textContent = "background: " + body.style.background + ";";
}

color1.addEventListener("input", updateColor);
color2.addEventListener("input", updateColor);

buttonVer.addEventListener("click", gradientVer); //changes the value of direction to "linear-gradient(" on-click.
buttonHor.addEventListener("click", gradientHor); //changes the value of direction to "linear-gradient(to right," on-click.
buttonRad.addEventListener("click", gradientRad); //changes the value of direction to "radial-gradient(" on-click.
randomBtn.addEventListener("click", getRandomGradient); // changes the value of colors randomly 
reverseBtn.addEventListener("click", getReverseColors); // changes the color position
