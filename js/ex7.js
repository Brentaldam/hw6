/* User Input / Sum
Use the prompt to query the user for two Integers.  Display the sum on the HTML Page.
Below is the starter HTML code */

/* Requirements
Correct input.
Display the sum as shown below.  Note that the sum style is red and bold
Hint:
See hands on tutorial.  Can use span element with style.color and style.fontWeight.
Invalid input
Display the error as shown below.  Again, note the red and bold font.
Also note that the input values are shown in quotes.
Error – Alphanumeric input:
Error – Decimal input: */

function myFunc(x, y) {
  const sumElement = document.createElement("span");
  sumElement.style.color="red";
  return sumElement.textContent = input0 + input1;
  
}


const input0 = Number(prompt("Please enter the first integer: "));
const input1 = Number(prompt("Please enter the second integer: "));
//var p = document.createElement("p");
if (Number.isInteger(input0) && Number.isInteger(input1)) {

  var input = document.getElementById("content");
  var out1 = myFunc(input0, input1);
  

  input.insertAdjacentHTML("beforeend", `${input0} + ${input1} = ${out1}`);
}
else {
  var input = document.getElementById("content");
  var out2 = myFunc(input0, input1);
  input.insertAdjacentHTML("beforeend", `Error! You must enter integers. You entered \"${input0}\" and \"${input1}\". Try Again.`);
}