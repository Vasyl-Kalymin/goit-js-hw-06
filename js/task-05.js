const inputName = document.getElementById('name-input')
const outputName = document.getElementById('name-output')

function getNewName({ currentTarget }) {
    if (currentTarget.value.trim() !== "") {
        outputName.textContent = currentTarget.value.trim();
    } else {
        outputName.textContent = "Anonymous";
    }
}

inputName.addEventListener('input', getNewName)
