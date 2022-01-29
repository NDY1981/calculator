const topDisplay = document.getElementById('topDisplay');
const bottomDisplay = document.getElementById('bottomDisplay');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const decimal = document.getElementById('decimal');
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');

function calculate() {

    let calculation = "";

    topDisplay.textContent = "";

    bottomDisplay.textContent = "";

    one.onclick = function() {
        if (topDisplay.textContent.includes("=")) {
            topDisplay.textContent = "";
            calculation = "";
        } 
        
        if (bottomDisplay.textContent == "0") {
            bottomDisplay.textContent = "1";
        } else {
            bottomDisplay.textContent = bottomDisplay.textContent + "1";
        }        
    }

    two.onclick = function() {
        if (topDisplay.textContent.includes("=")) {
            topDisplay.textContent = "";
            calculation = "";
        }

        if (bottomDisplay.textContent == "0") {
            bottomDisplay.textContent = "2";
        } else {
            bottomDisplay.textContent = bottomDisplay.textContent + "2";
        }    
    }

    three.onclick = function() {
        if (topDisplay.textContent.includes("=")) {
            topDisplay.textContent = "";
            calculation = "";
        }

        if (bottomDisplay.textContent == "0") {
            bottomDisplay.textContent = "3";
        } else {
            bottomDisplay.textContent = bottomDisplay.textContent + "3";
        }    
    }

    four.onclick = function() {
        if (topDisplay.textContent.includes("=")) {
            topDisplay.textContent = "";
            calculation = "";
        }

        if (bottomDisplay.textContent == "0") {
            bottomDisplay.textContent = "4";
        } else {
            bottomDisplay.textContent = bottomDisplay.textContent + "4";
        }    
    }

    five.onclick = function() {
        if (topDisplay.textContent.includes("=")) {
            topDisplay.textContent = "";
            calculation = "";
        }

        if (bottomDisplay.textContent == "0") {
            bottomDisplay.textContent = "5";
        } else {
            bottomDisplay.textContent = bottomDisplay.textContent + "5";
        }    
    }

    six.onclick = function() {
        if (topDisplay.textContent.includes("=")) {
            topDisplay.textContent = "";
            calculation = "";
        }

        if (bottomDisplay.textContent == "0") {
            bottomDisplay.textContent = "6";
        } else {
            bottomDisplay.textContent = bottomDisplay.textContent + "6";
        }    
    }

    seven.onclick = function() {
        if (topDisplay.textContent.includes("=")) {
            topDisplay.textContent = "";
            calculation = "";
        }

        if (bottomDisplay.textContent == "0") {
            bottomDisplay.textContent = "7";
        } else {
            bottomDisplay.textContent = bottomDisplay.textContent + "7";
        }    
    }

    eight.onclick = function() {
        if (topDisplay.textContent.includes("=")) {
            topDisplay.textContent = "";
            calculation = "";
        }

        if (bottomDisplay.textContent == "0") {
            bottomDisplay.textContent = "8";
        } else {
            bottomDisplay.textContent = bottomDisplay.textContent + "8";
        }
    }

    nine.onclick = function() {
        if (topDisplay.textContent.includes("=")) {
            topDisplay.textContent = "";
            calculation = "";
        }

        if (bottomDisplay.textContent == "0") {
            bottomDisplay.textContent = "9";
        } else {
            bottomDisplay.textContent = bottomDisplay.textContent + "9";
        }    
    }

    zero.onclick = function() {
        if (topDisplay.textContent.includes("=")) {
            topDisplay.textContent = "";
            calculation = "";
        }

        if (bottomDisplay.textContent == "0") {

        } else {
            bottomDisplay.textContent = bottomDisplay.textContent + "0";
        } 
    }

    decimal.onclick = function() {
        if (topDisplay.textContent.includes("=")) {
            topDisplay.textContent = "";
            calculation = "";
        }

        if (bottomDisplay.textContent.includes(".")) {

        } else if (bottomDisplay.textContent == "") {
            bottomDisplay.textContent = bottomDisplay.textContent + "0.";
        } else {
            bottomDisplay.textContent = bottomDisplay.textContent + ".";
        }
    }

    add.onclick = function() {
        if (topDisplay.textContent.includes("=")) {
            topDisplay.textContent = "";
            calculation = "";
        }

        if (bottomDisplay.textContent == "") {

        } else {
            topDisplay.textContent = topDisplay.textContent + bottomDisplay.textContent + " + ";
            calculation = calculation + bottomDisplay.textContent + " + "; 
            bottomDisplay.textContent = "";
        }
    }

    subtract.onclick = function() {
        if (topDisplay.textContent.includes("=")) {
            topDisplay.textContent = "";
            calculation = "";
        }

        if (bottomDisplay.textContent == "") {

        } else {
            topDisplay.textContent = topDisplay.textContent + bottomDisplay.textContent + " - ";
            calculation = calculation + bottomDisplay.textContent + " - "; 
            bottomDisplay.textContent = "";
        }
    }

    multiply.onclick = function() {
        if (topDisplay.textContent.includes("=")) {
            topDisplay.textContent = "";
            calculation = "";
        }

        if (bottomDisplay.textContent == "") {

        } else {
            topDisplay.textContent = topDisplay.textContent + bottomDisplay.textContent + " x ";
            calculation = calculation + bottomDisplay.textContent + " * "; 
            bottomDisplay.textContent = "";
        }
    }

    divide.onclick = function() {
        if (topDisplay.textContent.includes("=")) {
            topDisplay.textContent = "";
            calculation = "";
        }

        if (bottomDisplay.textContent == "") {

        } else {
            topDisplay.textContent = topDisplay.textContent + bottomDisplay.textContent + " ÷ ";
            calculation = calculation + bottomDisplay.textContent + " / "; 
            bottomDisplay.textContent = "";
        }
    }

    equals.onclick = function() {
        if (topDisplay.textContent.includes("=")) {

        } else if (bottomDisplay.textContent == "" && topDisplay.textContent == "") {

        } else {
            if (bottomDisplay.textContent == "") {
                topDisplay.textContent = topDisplay.textContent.slice(0, topDisplay.textContent.length - 3) + " = ";
                calculation = calculation.slice(0, calculation.length - 3);
            } else {
                topDisplay.textContent = topDisplay.textContent + bottomDisplay.textContent + " = ";
                calculation = calculation + bottomDisplay.textContent;
            }

            calculation = eval(calculation);
            calculation = calculation.toString();

            if (calculation == Infinity) {
                bottomDisplay.textContent = "Undefined"; 
            } else {                
                bottomDisplay.textContent = calculation;
            }
        }
    }

    clear.onclick = function() {
        topDisplay.textContent = "";
        bottomDisplay.textContent = "";
        calculation = "";
    }

}

calculate();