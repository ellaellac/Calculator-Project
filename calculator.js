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

const numberButton = document.querySelectorAll(".numberButton");
const operatorButton = document.querySelectorAll(".operatorsButton");
const inputDisplay = document.getElementById("userInput");
const outputDisplay = document.getElementById("output");
const backspaceButton = document.getElementById("deleteButton");
const decimalButton = document.getElementById("dot");
const allClearButton = document.getElementById("allClearButton");
const percentageButton = document.getElementById("percentageButton");

//JS Functions
// Number Input - Display
const addNumToDisplay = (event) => {
  let valueDisplay = event.target.innerText;
  if (outputDisplay.innerText == "0") {
    outputDisplay.innerText = valueDisplay;
  } else {
    outputDisplay.innerText += valueDisplay;
  }
};

for (let i = 0; i < numberButton.length; i++) {
  numberButton[i].addEventListener("click", addNumToDisplay);
}

//Operators - Update Display
const OperatorsUpdateDisplay = (event) => {
  inputDisplay.innerText = outputDisplay.innerText;
  if ((inputDisplay.innerText = outputDisplay.innerText)) {
    outputDisplay.innerText = "";
  }
};

for (let i = 0; i < operatorButton.length; i++) {
  operatorButton[i].addEventListener("click", OperatorsUpdateDisplay);
}

// Backspace Button
const backspaceFunction = () => {
  let deleteLastInput = outputDisplay.innerText.slice(0, -1);
  return (outputDisplay.innerText = deleteLastInput);
};

backspaceButton.addEventListener("click", backspaceFunction);

//decimal "." button
const decimalRestriction = (event) => {
  let decimalDisplay = event.target.innerText;
  if (!outputDisplay.innerText.includes(".")) {
    outputDisplay.innerText += ".";
  }
};

decimalButton.addEventListener("click", decimalRestriction);

//AC Button
const allClearFunction = () => {
  outputDisplay.innerText = "0";
  inputDisplay.innerText = "";
};

allClearButton.addEventListener("click", allClearFunction);

//% Button
const numberToPercentage = () => {
  let getNumber = Number(outputDisplay.innerText);
  outputDisplay.innerText = getNumber * 0.01;
};

percentageButton.addEventListener("click", numberToPercentage);

//
