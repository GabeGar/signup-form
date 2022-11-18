const password = document.querySelector("#password");
const confirmation = document.querySelector("#pass_confirm");
const error = document.querySelector(".error-field");
const createAccBtn = document.querySelector(".form_button");

function compareInputs() {
    if (
        password.value !== confirmation.value &&
        password.value.length >= 8 &&
        confirmation.value.length >= 8
    ) {
        error.classList.add("error");
        password.classList.add("error_outline");
        confirmation.classList.add("error_outline");
        createAccBtn.setAttribute("disabled", "disabled");
    } else if (password.value === confirmation.value) {
        error.classList.remove("error");
        password.classList.remove("error_outline");
        confirmation.classList.remove("error_outline");
        createAccBtn.removeAttribute("disabled");
    }
}

password.addEventListener("input", compareInputs);
confirmation.addEventListener("input", compareInputs);
