const decrementButton = document.querySelector('[data-action="decrement"]');
const valueOutput = document.getElementById('value');
const incrementButton = document.querySelector('[data-action="increment"]');

let counterValue = 0;

function clickDecremntButton (event) {
    counterValue -= 1;
    valueOutput.textContent = counterValue;
};

function clickincremntButton (event) {
    counterValue += 1;
    valueOutput.textContent = counterValue;
};

decrementButton.addEventListener('click', clickDecremntButton);
incrementButton.addEventListener('click', clickincremntButton);