var css = document.querySelector("textarea");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var colorInputs = document.querySelectorAll(".input-color");
var body = document.getElementById("gradient");
var randomColorButton = document.querySelector("button");

window.onload = (event) =>{
    setGradient();
    setRandomColors();
    }

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}


function setRandomColors() {
    colorInputs.forEach(el => el.value = randomColor());
    setGradient();
}

function randomColor() {
    randColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    return randColor;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomColorButton.addEventListener("click", setRandomColors);