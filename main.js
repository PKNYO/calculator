// VARIABLE DECLARATION

const add = function(a, b) {return a + b};
const substract = function(a, b) {return a - b};
const multiply = function(a, b) {return a * b};
const divide = function(a, b) {
    return (b == 0) ? "ERROR" : a / b;
};

const digitButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear")
const signButton = document.querySelector(".sign-change")
const screen = document.querySelector(".screen");

let firstNumber = "0";
let secondNumber = "";
let operator = "";
let operatorIsSelected = false;
let operatorKeySelected = ""

// FUNCTION DECLARATION

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

    if (secondNumber != "") {
        firstNumber = "";
        secondNumber = "";
        operator = "";
        screen.textContent = "";
    }

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

function equalSelected() {
    secondNumber = screen.textContent;
    screen.textContent = operate(+firstNumber, +secondNumber, operator)
}

function clearSelected() {
    firstNumber = "0";
    secondNumber = "";
    operator = "";
    screen.textContent = "0";
    operatorKeySelected.classList.remove("selected");
}

function signSelected() {
    let temp = screen.textContent;

    if (temp.includes("-")) {
        screen.textContent = temp.slice(1);
    } else {
        screen.textContent = `-${temp}`;
    }
}

// EXECUTE PART

digitButtons.forEach((button) => {
    button.addEventListener("click", (e) => populateScreen(e))
})

operatorButtons.forEach((button) => {
    button.addEventListener("click", (e) => operatorSelected(e))
})

equalsButton.addEventListener("click", () => equalSelected())

clearButton.addEventListener("click", () => clearSelected())

signButton.addEventListener("click", () => signSelected())