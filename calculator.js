//JS - variables
const numberButton = document.querySelectorAll(".numberButton");
const operatorButton = document.querySelectorAll(".operatorsButton");
const outputDisplay = document.getElementById("output");
const inputDisplay = document.getElementById("userInput");
const backspaceButton = document.getElementById("deleteButton");
const decimalButton = document.getElementById("dot");
const allClearButton = document.getElementById("allClearButton");
const percentageButton = document.getElementById("percentageButton");
const equalButton = document.getElementById("equalButton");
const signButton = document.getElementById("signButton");

//JS Functions
// Number Input - Display
const addNumToDisplay = (event) => {
  let valueDisplay = event.target.innerText;
  if (inputDisplay.innerText == "0") {
    inputDisplay.innerText = valueDisplay;
  } //Error - Length of Input Values
  else if (inputDisplay.innerText.length >= 9) {
    alert("Max. number reached!");
  } else {
    inputDisplay.innerText += valueDisplay;
  }
};

for (let i = 0; i < numberButton.length; i++) {
  numberButton[i].addEventListener("click", addNumToDisplay);
}

// Backspace Button
const backspaceFunction = () => {
  let deleteLastInput = inputDisplay.innerText.slice(0, -1);
  return (inputDisplay.innerText = deleteLastInput);
};

backspaceButton.addEventListener("click", backspaceFunction);

//decimal "." button
const decimalRestriction = (event) => {
  let decimalDisplay = event.target.innerText;
  if (!inputDisplay.innerText.includes(".")) {
    inputDisplay.innerText += ".";
  }
};

decimalButton.addEventListener("click", decimalRestriction);

//AC Button
const allClearFunction = () => {
  inputDisplay.innerText = "0";
  outputDisplay.innerText = "";
  previousOperator = null;
};

allClearButton.addEventListener("click", allClearFunction);

//% Button
const numberToPercentage = () => {
  let getNumber = Number(inputDisplay.innerText);
  let percentageValue = getNumber * 0.01;
  return (inputDisplay.innerText = percentageValue.toFixed(7));
};

percentageButton.addEventListener("click", numberToPercentage);

//Calculation
let previousOperator = null;

const operationFunction = (event) => {
  let inputNum = parseFloat(inputDisplay.innerText);
  let outputNum = parseFloat(outputDisplay.innerText);
  let currentOperator = event.target.innerText;

  console.log(outputNum, inputNum, currentOperator, previousOperator);

  // if input doesn't has any value
  if (isNaN(inputNum)) {
    previousOperator = currentOperator;
    // only input has value
  } else if (isNaN(outputNum)) {
    outputDisplay.innerText = inputNum;
    inputDisplay.innerText = "";
    previousOperator = currentOperator;
    // both output and input have values
  } else {
    outputDisplay.innerText = getAnswer(outputNum, inputNum);
    inputDisplay.innerText = "";
    previousOperator = currentOperator;
  }
};

// Answer Function
const getAnswer = (outputNum, inputNum) => {
  switch (previousOperator) {
    case "+":
      answer = outputNum + inputNum;
      break;
    case "-":
      answer = outputNum - inputNum;
      break;
    case "x":
      answer = outputNum * inputNum;
      break;
    case "÷":
      answer = outputNum / inputNum;
      break;
  }
  //Error = Infinity/ -Infinity / NaN
  if (!isFinite(answer)) {
    alert("error!");
    return "";
  }
  return answer.toString().substring(0, 9);
};

for (let i = 0; i < operatorButton.length; i++) {
  operatorButton[i].addEventListener("click", operationFunction);
}

//Equal Button

const handleEqualFunction = (event) => {
  let inputNum = parseFloat(inputDisplay.innerText);
  let outputNum = parseFloat(outputDisplay.innerText);

  if (isNaN(outputNum)) {
    //pass
  } else if (isNaN(inputNum)) {
    inputDisplay.innerText = outputNum;
    outputDisplay.innerText = "";
  } else {
    outputDisplay.innerText = "";
    inputDisplay.innerText = getAnswer(outputNum, inputNum);
  }
};

equalButton.addEventListener("click", handleEqualFunction);

//Sign Button
const handleSignBtn = (event) => {
  if (inputDisplay.innerText.startsWith("-")) {
    inputDisplay.innerText = inputDisplay.innerText.slice(1);
  } else if (inputDisplay.innerText == "0") {
    //pass
  } else {
    inputDisplay.innerText = "-" + inputDisplay.innerText;
  }
};

signButton.addEventListener("click", handleSignBtn);
