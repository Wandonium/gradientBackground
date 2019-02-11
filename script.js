var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var r1 = document.querySelector(".random1");
var r2 = document.querySelector(".random2");

r1.addEventListener("click", function() {
	var c1 = getRandomColor();
	var c2 = getRandomColor();
	color1.value = c1;
	color2.value = c2;
	body.style.background = "linear-gradient(to right, "
	+ c1
	+ ", " 
	+ c2
	+ ")";

	css.textContent = body.style.background + ";";	
})

r2.addEventListener("click", function() {
	var c1 = getRandomColor();
	var c2 = getRandomColor();
	color1.value = c1;
	color2.value = c2;
	body.style.background = "linear-gradient(to right, "
	+ c1
	+ ", " 
	+ c2
	+ ")";

	css.textContent = body.style.background + ";";	
})

css.textContent = body.style.backgroundColor + "WTF";

function setGradient() {
	body.style.background = "linear-gradient(to right, "
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

