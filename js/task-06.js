const inputValue = document.querySelector('input')
const inputDataLength = Number(inputValue.dataset.length);

function outputName({ currentTarget }) {
    if (currentTarget.value.length === inputDataLength) {
        inputValue.classList.remove('invalid');
        inputValue.classList.add('valid');
    } else {
        inputValue.classList.remove('valid');
        inputValue.classList.add('invalid');
    }
}

inputValue.addEventListener('blur', outputName);