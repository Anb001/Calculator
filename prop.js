var buttons = document.getElementsByClassName("buttons");
var display = document.getElementById("area");
var operand1 = 0;
var operand2 = null;
var operator = null;

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        var value = this.getAttribute('data-value');
        if (value == '+' || value == '*' || value == '/' || value == '-') {
            operator = value;
            operand1 = parseFloat(display.textContent);
            display.innerText = '';


        }
        else if (value == '=') {
            operand2 = parseFloat(display.textContent);
            display.innerText = '';
            var x = eval(operand1 + " " + operator + " " + operand2);

            display.innerText += parseInt(x);
        }
        else if (value == 'AC') {
            display.innerText = '';
            operand1 = 0;
            operand2 = null;

        }
        else if (value == '%') {
            operand1 = parseFloat(display.textContent);
            display.innerText = '';
            display.innerText += parseFloat(eval('operand1/ 100'));
        }
        else if (value == '+/-' && display.innerText == '') {

            display.innerText += '-';
        }
        else if (value != '+/-') {
            display.innerText += value;
        }


    });
}

document.addEventListener('keypress', function (event) {
    var value = event.key;
    if (value == '+' || value == '*' || value == '/' || value == '-') {
        operator = value;
        operand1 = parseFloat(display.textContent);
        display.innerText = '';


    }
    else if (value == '=' || value == 'Enter') {
        operand2 = parseFloat(display.textContent);
        display.innerText = '';
        var x = eval(operand1 + " " + operator + " " + operand2);

        display.innerText += parseInt(x);
    }
    else if (value == 'AC') {
        display.innerText = '';
        operand1 = 0;
        operand2 = null;

    }
    else if (value == '%') {
        operand1 = parseFloat(display.textContent);
        display.innerText = '';
        display.innerText += parseFloat(eval('operand1/ 100'));
    }
    else if (value == '+/-' && display.innerText == '') {

        display.innerText += '-';
    }

    else {
        display.innerText += value;
    }
});



