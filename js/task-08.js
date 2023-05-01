const form = document.querySelector('.login-form');

form.addEventListener("submit", checkSummit);

function checkSummit(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
        if (email.value === "" || password.value === "") {
        return alert("Будь-ласка заповніть всі поля!");
    }

  console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}



