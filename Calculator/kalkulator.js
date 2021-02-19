"use strict";
const calculator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null,
    waitingForSecondNumber: false
};
function clearCalculator() {
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.waitingForSecondNumber = false;
}
function inputDigit(digit) {
    if (calculator.displayNumber == '0') {
        calculator.displayNumber = digit;
    }
    else {
        calculator.displayNumber += digit;
    }
}
function updateDisplay() {
    let item = document.querySelector("h1");
    if (item) {
        item.innerText = calculator.displayNumber;
    }
}
function inverseNumber() {
    if (calculator.displayNumber == '0') {
        return;
    }
    calculator.displayNumber = String(Number(calculator.displayNumber) * (-1));
}
function handleOperator(op) {
    if (!calculator.waitingForSecondNumber) {
        calculator.waitingForSecondNumber = true;
        calculator.operator = op;
        calculator.firstNumber = calculator.displayNumber;
        calculator.displayNumber = '0';
    }
}
function calculate() {
    if (calculator.firstNumber == null || calculator.operator == null) {
        alert("Invalid Calculation");
        return;
    }
    let res = 0;
    if (calculator.operator == "+") {
        res = parseInt(calculator.displayNumber) + parseInt(calculator.firstNumber);
    }
    else {
        res = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
    }
    let newData = {
        firstNumber: calculator.firstNumber,
        operator: calculator.operator,
        secondNumber: calculator.displayNumber,
        result: String(res)
    };
    calculator.displayNumber = String(res);
    putHistoryData(newData);
    renderHistory();
}
const allBtn = document.querySelectorAll(".button");
for (let btnItm of allBtn) {
    btnItm.addEventListener("click", function (event) {
        const target = event.target;
        if (target.classList.contains("clear")) {
            clearCalculator();
            updateDisplay();
            return;
        }
        if (target.classList.contains("negative")) {
            inverseNumber();
            updateDisplay();
            return;
        }
        if (target.classList.contains("operator")) {
            if (target.innerText == "+") {
                handleOperator("+");
            }
            else {
                handleOperator("-");
            }
            updateDisplay();
            return;
        }
        if (target.classList.contains("equals")) {
            calculate();
            updateDisplay();
            return;
        }
        inputDigit(target.innerText);
        updateDisplay();
    });
}
