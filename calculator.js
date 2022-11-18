//JS - variables
const button0 = document.getElementById("zero");
const button1 = document.getElementById("one");
const button2 = document.getElementById("two");
const button3 = document.getElementById("three");
const button4 = document.getElementById("four");
const button5 = document.getElementById("five");
const button6 = document.getElementById("six");
const button7 = document.getElementById("seven");
const button8 = document.getElementById("eight");
const button9 = document.getElementById("nine");

const getNumberButton = document.querySelectorAll(".numberButton");
const getOperatorButton = document.querySelectorAll(".operatorsButton");
const inputDisplay = document.getElementById("userInput");
const getBackspaceButton = document.getElementById("deleteButton");

//JS Functions
// Number Input - Display
const addNumToDisplay = (event) => {
  let valueDisplay = event.target.innerText;
  return (inputDisplay.innerText += valueDisplay);
};

for (let i = 0; i < getNumberButton.length; i++) {
  getNumberButton[i].addEventListener("click", addNumToDisplay);
}

//Operators Input - Display
const addOperatorsToDisplay = (event) => {
  let valueDisplay = event.target.innerText;
  return (inputDisplay.innerText += valueDisplay);
};

for (let i = 0; i < getOperatorButton.length; i++) {
  getOperatorButton[i].addEventListener("click", addOperatorsToDisplay);
}
// Backspace Button
const backspaceFunction = () => {
  let deleteLastInput = inputDisplay.innerText.slice(0, -1);
  return (inputDisplay.innerText = deleteLastInput);
};

getBackspaceButton.addEventListener("click", backspaceFunction);
