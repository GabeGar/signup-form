const createAccBtn = document.querySelector(".form_button");

function confirmPasswordMatch(e) {
    const passfield = document.querySelector("#password");
    const confirmfield = document.querySelector("#pass_confirm");
    const validationInfo = document.querySelector(".validation_info");

    if (passfield.value !== confirmfield.value) {
        e.preventDefault();

        validationInfo.setAttribute(
            "style",
            "color: #c93131; font-size: 14px; margin: 0;"
        );
        validationInfo.textContent = "* Passwords do not match";
    }

    if (passfield.value === confirmfield.value) {
        validationInfo.textContent = "";
    }
}

createAccBtn.addEventListener("click", confirmPasswordMatch);
