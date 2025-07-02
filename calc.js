let num1 = "";
let num2 = "";
let operator = null;
let result;
let isX = true;
isDone = false;
addition = false;

function add() {
  result = num1 + num2;
}

function subtract() {
  result = num1 - num2;
}

function multiply() {
  result = num1 * num2;
}

function divide() {
  if (num2 === 0) {
    alert("Cannot divide by zero.");
    return;
  }
  result = num1 / num2;
}

function clear() {
  num1 = "";
  num2 = "";
  result = "";
  operator = null;
  isX = true;
  isDone = false;
}

function operate() {
  if (operator === "+") {
    add();
  } else if (operator === "-") {
    subtract();
  } else if (operator === "*") {
    multiply();
  } else if (operator === "/") {
    divide();
  }
  console.log("result " + result);
  addition = true;
}
const text = document.querySelector(".display");

const operators = document.querySelectorAll(".operator");
operators.forEach((button) => {
  button.addEventListener("click", () => {
    if (num1 !== "" && num2 !== "") {
      operate();
      operator = button.textContent;
      num2 = "";
      isX = false;
      num1 = result;
      console.log(operator);
    } else {
      operator = button.textContent;
      console.log(operator);
      isX = false;
    }
    if (!addition) text.textContent = operator;
    else {
      text.textContent = result + " " + operator;
    }
    if (isDone) {
      num1 = result;
      isDone = false;
    }
  });
});

const numbers = document.querySelectorAll(".number");
numbers.forEach((button) => {
  button.addEventListener("click", () => {
    if (isDone) {
      clear();
    }
    if (isX) {
      num1 = parseInt(num1.toString() + button.textContent);
      console.log(num1);
      text.textContent = num1;
    } else {
      num2 = parseInt(num2.toString() + button.textContent);
      console.log(num2);
      text.textContent = num2;
    }
  });
});

const equals = document.querySelector("#btn-equals");
equals.addEventListener("click", () => {
  operate();
  num1 = result;
  num2 = "";
  isDone = true;
  console.log(result);
  text.textContent = result;
});

const clearALL = document.querySelector("#btn-clear");
clearALL.addEventListener("click", () => {
  clear();
  console.log("Cleared");
  text.textContent = "0";
});

document.addEventListener("keydown", function (event) {
  const key = event.key;
  const validNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const validOperators = ["+", "-", "*", "/"];

  if (validNumbers.includes(key)) {
    event.preventDefault();
    if (isDone) {
      clear();
    }
    if (isX) {
      num1 = parseInt(num1.toString() + key);
      console.log(num1);
      text.textContent = num1;
    } else {
      num2 = parseInt(num2.toString() + key);
      console.log(num2);
      text.textContent = num2;
    }
  } else if (validOperators.includes(key)) {
    event.preventDefault();
    if (num1 !== "" && num2 !== "") {
      operate();
      operator = key;
      num2 = "";
      isX = false;
      num1 = result;
      console.log(operator);
    } else {
      operator = key;
      console.log(operator);
      isX = false;
    }
    if (!addition) text.textContent = operator;
    else {
      text.textContent = result + " " + operator;
    }
    if (isDone) {
      num1 = result;
      isDone = false;
    }
  } else if (key === "Enter") {
    operate();
    num1 = result;
    num2 = "";
    isDone = true;
    console.log(result);
    text.textContent = result;
  } else if (key === "Escape") {
    clear();
    console.log("Cleared");
    text.textContent = "0";
  }
});
