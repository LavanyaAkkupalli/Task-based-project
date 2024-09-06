const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
    button.addEventListener('click', function() {
        if (this.dataset.num) {
            currentInput += this.dataset.num;
            display.value = currentInput;
        }

        if (this.dataset.op) {
            operator = this.dataset.op;
            previousInput = currentInput;
            currentInput = '';
        }

        if (this.id === 'equals') {
            if (previousInput && operator) {
                currentInput = eval(`${previousInput}${operator}${currentInput}`);
                display.value = currentInput;
                operator = '';
                previousInput = '';
            }
        }

        if (this.id === 'clear') {
            currentInput = '';
            operator = '';
            previousInput = '';
            display.value = '';
        }
    });
});
