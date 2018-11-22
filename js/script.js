
const input1 = document.getElementById("input-1");
const input2 = document.getElementById("input-2");
const addButton = document.getElementById("add-button");
const subtractButton = document.getElementById("subtract-button");
const multiplyButton = document.getElementById("multiply-button");
const devisionButton = document.getElementById("devision-button");
const clearButton = document.getElementById("clear-button")


addButton.addEventListener("click", plus);
subtractButton.addEventListener("click", minus);
multiplyButton.addEventListener("click", times);
devisionButton.addEventListener("click", devide);
clearButton.addEventListener("click", clear);


function plus(){

	let addition = parseInt(input1.value) + parseInt(input2.value);
	console.log(addition);
}
function minus(){

	let subtraction = parseInt(input1.value) - parseInt(input2.value);
	console.log(subtraction);
}
function times(){

	let multiply = parseInt(input1.value) * parseInt(input2.value);
	console.log(multiply)	
}
function devide(){

	let devision = parseInt(input1.value) * parseInt(input2.value);
	console.log(devision)
}

function clear(){
	input1.value = "";
	input2.value = "";
}



// function myFunction() {
//     document.getElementById("userinput").reset();
// }