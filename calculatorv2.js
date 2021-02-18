const btn = document.getElementById("buttons").querySelectorAll("button");
const display = document.getElementById("display");

let currentOperator = null;
let shouldResetDisplay = false;
let firstTerm = "";
let secondTerm = "";

btn.forEach((button) => {
    button.addEventListener("click", () => {
        let clicked = button.id;
        switch (clicked) {
            case '+' :
                setOperation(clicked);
                break;
            case '-' :
                setOperation(clicked);
                break;
            case '*' :
                setOperation(clicked);
                break;
            case '/' :
                setOperation(clicked);
                break;
            case '=' :
                evaluate();
                break;
            case 'clear' :
                clear();
                break;
            case '.' :
                if (shouldResetDisplay) resetDisplay();
                if (display.textContent === "") display.textContent = "0";
                if (display.textContent.includes(".")) return;
                display.textContent += clicked;
                break;
            case '0' :
                if (display.textContent === "0" || shouldResetDisplay) resetDisplay();
                display.textContent += clicked;
                break;
            case '1' :
                if (display.textContent === "0" || shouldResetDisplay) resetDisplay();
                display.textContent += clicked;
                break;
            case '2' :
                if (display.textContent === "0" || shouldResetDisplay) resetDisplay();
                display.textContent += clicked;
                break;
            case '3' :
                if (display.textContent === "0" || shouldResetDisplay) resetDisplay();
                display.textContent += clicked;
                break;
            case '4' :
                if (display.textContent === "0" || shouldResetDisplay) resetDisplay();
                display.textContent += clicked;
                break;
            case '5' :
                if (display.textContent === "0" || shouldResetDisplay) resetDisplay();
                display.textContent += clicked;
                break;
            case '6' :
                if (display.textContent === "0" || shouldResetDisplay) resetDisplay();
                display.textContent += clicked;
                break;
            case '7' :
                if (display.textContent === "0" || shouldResetDisplay) resetDisplay();
                display.textContent += clicked;
                break;
            case '8' :
                if (display.textContent === "0" || shouldResetDisplay) resetDisplay();
                display.textContent += clicked;
                break;
            case '9' :
                if (display.textContent === "0" || shouldResetDisplay) resetDisplay();
                display.textContent += clicked;
                break;
        }
    });
});

const evaluate = function() {
    if (currentOperator === null || shouldResetDisplay) return;
    if (currentOperator === "/" && display.textContent === "0") {
        alert("You can't divide by zero!");
        clear();
        return;
    }
    secondTerm = display.textContent;
    display.textContent = round(
        operate(firstTerm, currentOperator, secondTerm)
    );
    currentOperator = null;
    shouldResetDisplay = true;
}

const clear = function() {
    display.textContent = "0";
    let currentOperator = null;
    let shouldResetDisplay = false;
    let firstTerm = "";
    let secondTerm = "";  
}
const resetDisplay = function() {
    display.textContent = "";
    shouldResetDisplay = false;
}

const setOperation = function(operator) {
    if (currentOperator !== null) evaluate();
    firstTerm = display.textContent;
    currentOperator = operator;
    shouldResetDisplay = true;
}
const round = function(number) {
    return Math.round(number * 1000) / 1000;
}

const addition = function(...numbers) {        
    let sum = numbers.reduce((currentNumber, nextNumber) => parseFloat(currentNumber) + parseFloat(nextNumber))
    return sum;
}

const subtraction = function(...numbers) {
    let difference = numbers.reduce((currentNumber, nextNumber) => currentNumber - nextNumber)
    return difference;
}

const multiplication = function(...numbers) {
    let product = numbers.reduce((currentNumber, nextNumber) => currentNumber * nextNumber)
    return product;
} 

const division = function(...numbers) {
    let quotient = numbers.reduce((currentNumber, nextNumber) => currentNumber / nextNumber)
    return quotient;
}

const operate = function(firstNumber, operator, secondNumber) {
    let x = firstNumber;
    let y = secondNumber;
    if (operator === "+") {
       let sum = addition(x, y);
        return sum;
    } else if (operator === "-") {
        let difference = subtraction(x, y);
        return difference;
    } else if (operator === "*") {
        let product = multiplication(x, y);
        return product;
    } else if (operator === "/") {
        let quotient = division(x, y);
        return quotient;
    }
};