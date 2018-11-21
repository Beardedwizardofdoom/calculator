let num1;
let num2;


const userInput = document.getElementById("userinput");
const addButton = document.getElementById("add-button");
const subtractButton = document.getElementById("subtract-button");
const multiplyButton = document.getElementById("multiply-button");
const devisionButton = document.getElementById("devision-button");

addButton.addEventListener("click", plus);
subtractButton.addEventListener("click", minus);
multiplyButton.addEventListener("click", times);
devisionButton.addEventListener("click", devide);


function plus(){
	console.log("plus");
}
function minus(){
	console.log("minus");
}
function times(){
	console.log( "times");
}
function devide(){
	console.log("devide");
}




// function myFunction() {
//     document.getElementById("userinput").reset();
// }