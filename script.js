function clearDisplay() {
    document.getElementById('display').value = '';
}

function backspace() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function squareNumber() {
    let display = document.getElementById('display');
    display.value = Math.pow(display.value, 2);
}

function calculateResult() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

