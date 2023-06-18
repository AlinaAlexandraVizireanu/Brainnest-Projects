const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttonActive");
const purpleButtons = document.querySelectorAll(".color1");
const blueButtons = document.querySelectorAll(".color2");
const redButtons = document.querySelectorAll(".color3");
const operands = document.querySelectorAll(".operand");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const deleteButton = document.querySelector(".deleteButton");
const decimal = document.querySelector(".decimal");

let operator = "";
let firstOperand = "";
let secondOperand = "";
let result = 0;
let displayValue = "";
let displayWithDecimal = "";

window.addEventListener("keypress", function (e) {
  /// In this part of the project, due to the keyword 'this' which doesn't work in this scope,
  /// I've wrote the code directly here from the each named functions which contains the keyword 'this'.
  let reg1 = /\d/g;
  let reg2 = /\+|-|\/|\*/g;
  if (reg1.test(e.key)) {
    if (display.innerText === "0") {
      displayValue = "";
      purpleButtons[0].innerText = "AC";
    }
    displayValue += e.key;
    display.innerText = displayValue.substring(0, 18);
    if (display.innerText != "0") {
      purpleButtons[0].innerText = "C";
    }
  } else if (reg2.test(e.key)) {
    if (firstOperand == "") {
      firstOperand = display.innerText;
      displayValue = "";
    } else {
      secondOperand = displayValue;
      displayValue = "";

      switch (operator) {
        case "+":
          result = Number(firstOperand) + Number(secondOperand);
          break;
        case "-":
          result = Number(firstOperand) - Number(secondOperand);
          break;
        case "*":
          result = Number(firstOperand) * Number(secondOperand);
          break;
        case "/":
          result = Number(firstOperand) / Number(secondOperand);
          break;
      }
      firstOperand = result;
      display.innerText = result;
    }
    operator = e.key;
  } else if (e.key === ".") {
    if (display.innerText.indexOf(".") < 0) {
      displayValue += e.key;
      display.innerText = displayValue;
    }
  } else if (e.key === "Enter" || e.key === "=") {
    displayResult();
  } else if (e.key === "%") {
    divideByHundred();
  }
});

window.addEventListener("keyup", function (e) {
  if (e.key === "Backspace") {
    deleteNumber();
  }
});

for (let operand of operands) {
  operand.addEventListener("click", displayOperand);
}

for (let operator of operators) {
  operator.addEventListener("click", operate);
}

equal.addEventListener("click", displayResult);

deleteButton.addEventListener("click", deleteNumber);

decimal.addEventListener("click", addDecimal);

for (let purpleButton of purpleButtons) {
  purpleButton.addEventListener("click", function () {
    purpleButton.classList.add("color1:active");
    switch (purpleButton.innerText) {
      case "AC":
        allClear();
        break;
      case "C":
        allClear();
        break;
      case "+/-":
        positiveNegative();
        break;
      case "%":
        divideByHundred();
        break;
    }
  });
}

for (let blueButton of blueButtons) {
  blueButton.addEventListener("click", function () {
    blueButton.classList.add("color2:active");
  });
}

for (let redButton of redButtons) {
  redButton.addEventListener("click", function () {
    redButton.classList.add("color3:active");
  });
}

function displayOperand() {
  if (display.innerText === "0") {
    displayValue = "";
    purpleButtons[0].innerText = "AC";
  }
  if (displayWithDecimal === "") {
    displayValue += this.innerText;
  }
  if (display.innerText.indexOf(".") > 0 && displayWithDecimal != "") {
    displayValue = displayWithDecimal + this.innerText;
    displayWithDecimal = "";
  }
  display.innerText = displayValue.substring(0, 18);
  if (display.innerText != "0") {
    purpleButtons[0].innerText = "C";
  }
}

function operate() {
  if (firstOperand == "") {
    firstOperand = display.innerText;
    displayValue = "";
  } else {
    secondOperand = displayValue;
    displayValue = "";

    switch (operator) {
      case "+":
        result = Number(firstOperand) + Number(secondOperand);
        break;
      case "-":
        result = Number(firstOperand) - Number(secondOperand);
        break;
      case "*":
        result = Number(firstOperand) * Number(secondOperand);
        break;
      case "/":
        result = Number(firstOperand) / Number(secondOperand);
        break;
    }
    firstOperand = result;
    display.innerText = result;
  }
  operator = this.innerText;
}

function displayResult() {
  let lastValueOfSecond = secondOperand;
  secondOperand = displayValue;
  if (displayValue === "") {
    secondOperand = lastValueOfSecond;
    firstOperand = result;
  }
  displayValue = "";
  switch (operator) {
    case "+":
      result = Number(firstOperand) + Number(secondOperand);
      break;
    case "-":
      result = Number(firstOperand) - Number(secondOperand);
      break;
    case "*":
      result = Number(firstOperand) * Number(secondOperand);
      break;
    case "/":
      result = Number(firstOperand) / Number(secondOperand);
      break;
  }
  if (result === 0 && secondOperand != "") {
    display.innerText = secondOperand;
  } else if (operator === "") {
    display.innerText = "0";
  } else {
    display.innerText = result;
  }
  firstOperand = "";
  if (display.innerText === "0") {
    displayValue = "";
    purpleButtons[0].innerText = "AC";
  }
}

function allClear() {
  display.innerText = "0";
  purpleButtons[0].innerText = "AC";
  firstOperand = "";
  secondOperand = "";
  operator = "";
  displayValue = "";
}

function deleteNumber() {
  if (display.innerText.length == 1) {
    display.innerText = "0";
  }
  if (display.innerText != "0") {
    if (display.innerText.length > 1) {
      display.innerText = display.innerText.slice(0, -1);
    }
  }
  displayValue = display.innerText;
}

function addDecimal() {
  let lastStoredValue = display.innerText;
  // Display only one decimal point
  if (display.innerText.indexOf(".") < 0 && displayValue != "") {
    displayValue += this.innerText;
    display.innerText = displayValue;
  } else if (display.innerText.indexOf(".") < 0 && displayValue === "") {
    displayWithDecimal = lastStoredValue + this.innerText;
    display.innerText = displayWithDecimal;
  }
}

function positiveNegative() {
  if (display.innerText != "0" && display.innerText.indexOf("-") === -1) {
    display.innerText = "-" + display.innerText;
  } else if (display.innerText != "0") {
    display.innerText = display.innerText.slice(1);
  }
}

function divideByHundred() {
  display.innerText = Number(display.innerText) / 100;
}
