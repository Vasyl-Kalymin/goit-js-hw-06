const inputRange = document.getElementById('font-size-control');
const outputText = document.getElementById('text');

function changeInputRange({ currentTarget }) {
    outputText.style.fontSize = `${currentTarget.value}px`;
}

inputRange.addEventListener('input', changeInputRange);