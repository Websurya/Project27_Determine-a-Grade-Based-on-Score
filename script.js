var inputNumber = document.getElementById("input");
var invalidNumber = document.getElementById("invalidnumber");
var resultGrade = document.getElementById("result");

function clear2() {
    invalidNumber.innerHTML = "";
    
}
function clear3() {
    resultGrade.innerHTML = "";
}
function calculateGrade() {
    if (parseInt(inputNumber.value) >= 0 && parseInt(inputNumber.value) <= 100) {
        clear2();       
        if (parseInt(inputNumber.value) >= 90 && parseInt(inputNumber.value) <= 100) {
            resultGrade.innerHTML = "The number you entered(" + inputNumber.value + ") belongs to A Grade<br> <span style=';'>A</span>";
        }
        else if (parseInt(inputNumber.value) >= 80 && parseInt(inputNumber.value) <= 89) {
            resultGrade.innerHTML = "The number you entered(" + inputNumber.value + ") belongs to B Grade<br> <span style=';'>B</span>";
        }
        else if (parseInt(inputNumber.value) >= 70 && parseInt(inputNumber.value) <= 79) {
            resultGrade.innerHTML = "The number you entered(" + inputNumber.value + ") belongs to C Grade<br> <span style=';'>C</span>";
        }
        else if (parseInt(inputNumber.value) >= 60 && parseInt(inputNumber.value) <= 69) {
            resultGrade.innerHTML = "The number you entered(" + inputNumber.value + ") belongs to D Grade<br> <span style=';'>D</span>";
        }
        else if (parseInt(inputNumber.value) < 60) {
            resultGrade.innerHTML = "The number you entered(" + inputNumber.value + ") belongs to E Grade<br> <span style=';'>E</span>";
        }
    }
    else {
        clear3()
        invalidNumber.innerHTML = "The number you entered(" + inputNumber.value + ") invalid";
    }
}