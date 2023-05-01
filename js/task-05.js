const inputName = document.getElementById('name-input')
const outputName = document.getElementById('name-output')

function getNewName({ currentTarget }) {
    if (currentTarget.value !== "") {
        outputName.textContent = currentTarget.value
    } else {
        outputName.textContent = "Anonymous"
    }
}

inputName.addEventListener('input', getNewName)
