const form = document.querySelector(".login-form");

const createAccountBtn = document.querySelector(".createAccountBtn");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");

createAccountBtn.innerHTML = `
                                <div class="loginBtnDisabled">Log in</div>
                            `

function validateLogIn(event) {
    event.preventDefault();

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

    if (validateEmail(email.value) === true && validatePassword(password.value) === true) {
        createAccountBtn.innerHTML = `<div class="login-cta">
        <a href="account-details.html" id="baba" class="add-to-cart">Log in</a>
      </div>`
        form.reset();
    }
}

form.addEventListener("input", validateLogIn);

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