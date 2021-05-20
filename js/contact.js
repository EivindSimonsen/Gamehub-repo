const form = document.querySelector(".form");

const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

const validatedMessage = document.querySelector("#contact-message");

function validateForm(event) {
    event.preventDefault();

    if (fullName.value.trim().length > 0) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (message.value.trim().length >= 25) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }

    if (fullName.value.trim().length > 0 && validateEmail(email.value) === true && message.value.trim().length >= 25) {
        validatedMessage.style.display = "block";
        form.reset();
    } else {
        validatedMessage.style.display = "none";
    }
}

form.addEventListener("submit", validateForm)

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

