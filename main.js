const add = function(a, b) {return a + b};
const substract = function(a, b) {return a - b};
const multiply = function(a, b) {return a * b};
const divide = function(a, b) {return a / b};

const buttons = document.querySelectorAll(".button")
const screen = document.querySelector(" screen")

let firstNumber = "";
let secondNumber = "";
let operator = "";
let screenText = "";

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
