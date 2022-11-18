const password = document.querySelector("#password");
const confirmation = document.querySelector("#pass_confirm");
const error = document.querySelector(".error-field");

function compareInputs() {
    if (password.value !== confirmation.value) {
        error.classList.add("error");
        password.classList.add("error_outline");
        confirmation.classList.add("error_outline");
    } else if (password.value === confirmation.value) {
        error.classList.remove("error");
        password.classList.remove("error_outline");
        confirmation.classList.remove("error_outline");
    }
}

password.addEventListener("input", compareInputs);
confirmation.addEventListener("input", compareInputs);
