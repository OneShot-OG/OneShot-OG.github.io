var redButton = document.querySelector(".red");
var greenButton = document.querySelector(".green");
var blueButton = document.querySelector(".blue");
var h1 = document.querySelector("h1");

var change = (color) => {
  h1.style.color = color;
}


redButton.addEventListener("click", () => {
  change("red");
});
greenButton.addEventListener("click", () => {
  change("green");
});
blueButton.addEventListener("click", () => {
  change("blue");
});