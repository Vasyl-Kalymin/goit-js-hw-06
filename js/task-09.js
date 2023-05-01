const body = document.body;
const colorOutput = document.querySelector('.color')
const changeColorButton = document.querySelector('.change-color')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor() {
  colorOutput.textContent = body.style.backgroundColor = getRandomHexColor();
};

changeColorButton.addEventListener('click', changeColor)