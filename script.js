const screen = document.querySelector(".screen");
const sbtns = document.querySelectorAll(".sbtn");
const btns = document.querySelectorAll(".btn");

let firstoperand = null;
let operator = null;
let waitingForSecondOperand = false;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // If operator button
    if (btn.id === "divide" || btn.id === "multiply" || btn.id === "subtract" || btn.id === "add") {
      operator = btn.id;
      firstoperand = parseFloat(screen.innerText);
      waitingForSecondOperand = true;
      if (operator === "add") screen.innerText += "+";
      if (operator === "subtract") screen.innerText += "-";
      if (operator === "multiply") screen.innerText += "×";
      if (operator === "divide") screen.innerText += "/";
    } else {
      // If waiting for second operand, clear screen
      if (waitingForSecondOperand) {
        screen.innerText = "";
        waitingForSecondOperand = false;
      }
      // Append digit
      if (screen.innerText === "0") {
        screen.innerText = btn.innerText;
      } else {
        screen.innerText += btn.innerText;
      }
    }
  });
});

sbtns.forEach((sbtn) => {
  sbtn.addEventListener("click", () => {
    if (sbtn.id === "clear") {
      screen.innerText = "0";
      firstoperand = null;
      operator = null;
      waitingForSecondOperand = false;
    }
    if (sbtn.id === "equals" && operator && firstoperand !== null) {
      const secondoperand = parseFloat(screen.innerText);
      operate(firstoperand, secondoperand, operator);
      firstoperand = null;
      operator = null;
      waitingForSecondOperand = false;
    }
  });
});

function operate(firstoperand, secondoperand, operator) {
  let result;
  if (operator === "divide") {
    result = firstoperand / secondoperand;
  } else if (operator === "multiply") {
    result = firstoperand * secondoperand;
  } else if (operator === "subtract") {
    result = firstoperand - secondoperand;
  } else if (operator === "add") {
    result = firstoperand + secondoperand;
  }
  screen.innerText = result;
}