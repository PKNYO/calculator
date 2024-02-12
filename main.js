const add = function(a, b) {return a + b};
const substract = function(a, b) {return a - b};
const multiply = function(a, b) {return a * b};
const divide = function(a, b) {return a / b};

const digitButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const screen = document.querySelector(".screen");

let firstNumber = 0;
let secondNumber = "";
let operator = "";
let operatorIsSelected = false;
let operatorKeySelected = ""

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

function populateScreen(event) {
    const key = event.target;

    if (screen.textContent == 0) {
        screen.textContent = "";
    }

    if (operatorIsSelected == false) {
        screen.textContent += key.textContent;
    } 
    if (operatorIsSelected == true) {
        operatorKeySelected.classList.remove("selected");
        operatorIsSelected = false;
        screen.textContent = "";
        screen.textContent += key.textContent;
    }
}

function operatorSelected(event) {
    const key = event.target;

    operatorKeySelected = key
    firstNumber = +screen.textContent;
    operator = key.id;
    key.classList.add("selected");
    operatorIsSelected = true;
}

function equalSelected(event) {
    secondNumber = screen.textContent;
    screen.textContent = operate(+firstNumber, +secondNumber, operator)
}

digitButtons.forEach((button) => {
    button.addEventListener("click", (e) => populateScreen(e))
})

operatorButtons.forEach((button) => {
    button.addEventListener("click", (e) => operatorSelected(e))
})

equalsButton.addEventListener("click", (e) => equalSelected(e))