let runningTotal = 0;
let buffer = "0";
let previousOperator;

const screen = document.querySelector(".screen");

function buttonClick(x) {
  if (isNaN(x)) {
    handleSymbol(x);
  } else {
    handleNumber(x);
  }
  screen.innerText = buffer;
}

function handleSymbol(x) {
  switch (x) {
    case "C": {
      buffer = "0";
      runningTotal = 0;
      break;
    }
    case "=": {
      if (previousOperator === null) {
        return;
      }
      flushOperation(parseInt(buffer));
      previousOperator = null;
      buffer = runningTotal;
      runningTotal = 0;
      break;
    }
    case "←": {
      if (buffer.length === 1) {
        buffer = "0";
      } else {
        buffer = buffer.toString(0, buffer.length - 1);
      }
      break;
    }
    case "+":
    case "-":
    case "×":
    case "÷":
      handleMath(x);
      break;
  }
}

function handleMath(x) {
  if (buffer === "0") {
    return;
  }

  const intBuffer = parseInt(buffer);

  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOperation(intBuffer);
  }
  previousOperator = x;
  buffer = "0";
}

function flushOperation(x) {
  if (previousOperator === "+") {
    runningTotal += x;
  } else if (previousOperator === "-") {
    runningTotal -= x;
  } else if (previousOperator === "×") {
    runningTotal *= x;
  } else if (previousOperator === "÷") {
    runningTotal /= x;
  }
}

function handleNumber(x) {
  if (buffer === "0") {
    buffer = x;
  } else {
    buffer += x;
  }
}

function init() {
  document.querySelector(".calc-buttons").addEventListener("click", (event) => {
    buttonClick(event.target.innerText);
  });
}

init();
