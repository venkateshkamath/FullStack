var  color1 = document.querySelector(".color1");
var  color2 = document.querySelector(".color2");
var h3=document.querySelector("h3");//css is holding the value of empty h3.
var body=document.getElementById("gradient");
h3.textContent=body.style.background;
function lineargrad(){
	body.style.background="linear-gradient(to right,"+color1.value +","+color2.value+")";
	h3.textContent=body.style.background

}
color1.addEventListener("input",lineargrad)
color2.addEventListener("input",lineargrad);// Neednot call the function just alert.

//since two functions are repeating lets make it same.
h3.textContent=body.style.background