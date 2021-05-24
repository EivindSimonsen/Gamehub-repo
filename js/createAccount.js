const form = document.querySelector(".login-form");

const createAccountBtn = document.querySelector(".createAccountBtn");

const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");

createAccountBtn.innerHTML = `
                                <div class="loginBtnDisabled">Create account</div>
                            `

function validateAccountCreation(event) {
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

    if (validatePassword(password.value) === true) {
        passwordError.style.display = "none";
    } else {
        passwordError.style.display = "block";
    }

    if (fullName.value.trim().length > 0 && validateEmail(email.value) === true && validatePassword(password.value) === true) {
        createAccountBtn.innerHTML = `<div class="login-cta">
                                        <a href="account-details.html" class="add-to-cart">Create account</a>
                                    </div>`
        form.reset();
    }
}

form.addEventListener("input", validateAccountCreation);

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

function validatePassword(password) {
    const passwordRegEx = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/;
    const patternMatches = passwordRegEx.test(password);
    return patternMatches;
}