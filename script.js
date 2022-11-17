const createAccBtn = document.querySelector(".form_button");
const validationInfo = document.querySelector(".validation_info");

function confirmPasswordMatch(e) {
    const passfield = document.querySelector("#password");
    const confirmfield = document.querySelector("#pass_confirm");

    console.log(passfield);
    console.log(confirmfield);

    if (passfield.value !== confirmfield.value) {
        e.preventDefault();

        validationInfo.setAttribute(
            "style",
            "color: #c93131; font-size: 12px;"
        );
        validationInfo.textContent = "* Passwords do not match";
    }

    if (passfield.value === confirmfield.value) {
        validationInfo.textContent = "";
    }
}

createAccBtn.addEventListener("click", confirmPasswordMatch);
