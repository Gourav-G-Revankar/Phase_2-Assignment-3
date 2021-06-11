function historyValue() {//to get history value
    return document.getElementById('history-value').innerHTML;
}

function printHistory(number) {//to print history value
    document.getElementById('history-value').innerHTML = number;
}

function outputValue() {//to get output value
    return document.getElementById('output-value').innerHTML;
}

function printOutput(number) {//to print output value
    document.getElementById('output-value').innerHTML = number;
}

//getting operator info
let operator = document.getElementsByClassName("operator");
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {
        if (this.id == "clear") {
            printOutput("");
            printHistory("");
        }
        else if (this.id == "backspace") {
            let output = outputValue();
            if (output) {//if there is a output value
                output = output.substr(0, output.length - 1); //The substr() method extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters. 
                printOutput(output);
            }
        }
        else {
            let history = historyValue();
            let output = outputValue();
            if (output == "" && history != "") {
                if (isNaN(history[history.length - 1])) {
                    history = history.substr(0, history.length - 1);
                }
            }
            if (output != "" || history != "") {//if output and history is not empty
                history = history + output;
                if (this.id == "=") {
                    let result = eval(history);//The eval() function evaluates or executes an argument.
                    printOutput(result);
                    printHistory("");
                }
                else {
                    history = history + this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    });
}

//getting number info
let number = document.getElementsByClassName("number");
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        let output = outputValue();
        if (output != NaN) {//if output is a number
            output = output + this.id;
            printOutput(output);
        }
    });
}
