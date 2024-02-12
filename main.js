const add = function(a, b) {return a + b};
const substract = function(a, b) {return a - b};
const multiply = function(a, b) {return a * b};
const divide = function(a, b) {return a / b};

const buttons = document.querySelectorAll(".button")
const display = document.querySelector(".display")

let firstNumber = null;
let secondNumber = null;
let operator = null;
let displayValue = null;

function operate(a, b, operator) {
    switch (operator) {
        case "+": 
            return add(a, b);
        case "-":
            return substract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            break;
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        return e.target.classList.contains("digit") ? display.textContent += e.target.textContent : ""
    })
})