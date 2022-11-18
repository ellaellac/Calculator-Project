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

const getNumberButton = document.querySelectorAll(".number__button");
const getOperatorButton = document.querySelectorAll(".operatorsButton");
const InputDisplay = document.getElementById("userInput");

//JS Functions
// Register User INPUT (Testing)
// const changeDisplayText = (event) => {
//   let valueDisplay = button9.value;
//   return (InputDisplay.innerText = valueDisplay);
// };
// button9.addEventListener("click", changeDisplayText);

// Number Input - Display
const changeDisplayText = (event) => {
  let valueDisplay = event.target.innerHTML;
  return (InputDisplay.innerText = valueDisplay);
};

for (let i = 0; i < getNumberButton.length; i++) {
  getNumberButton[i].addEventListener("click", changeDisplayText);
}

//Operators Input - Display
const changeDisplayText2 = (event) => {
  let valueDisplay = event.target.innerHTML;
  return (InputDisplay.innerText = valueDisplay);
};

for (let i = 0; i < getOperatorButton.length; i++) {
  getOperatorButton[i].addEventListener("click", changeDisplayText2);
}
