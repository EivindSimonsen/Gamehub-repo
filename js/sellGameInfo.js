const sellGameForm = document.querySelector(".sellGameForm");

const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");

const accountNumber = document.querySelector("#accountNumber");
const accountNumberError = document.querySelector("#accountNumberError");

const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");

const linkDisabled = document.querySelector(".linkDisabled");

/* const btnDisabled = document.getElementById("btnDisabled"); */
const btnDisabled = document.querySelector("#btnDisabled");
/* const btnDisabled = document.querySelector("button"); */

linkDisabled.innerHTML = `<button class="add-to-cart-grey">Sell</button>`;

function validateSellGameForm(event) {
    event.preventDefault();

    if (fullName.value.trim().length > 0) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }

    if (validateAccountNumber(accountNumber.value.trim().replace(/\s/g, "")) === true) {
        accountNumberError.style.display = "none";
    } else {
        accountNumberError.style.display = "block";
    }

    if (address.value.trim().length > 0) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }

    if (fullName.value.trim().length > 0 && validateAccountNumber(accountNumber.value.replace(/\s/g, "")) === true && address.value.trim().length > 0) {
        linkDisabled.innerHTML = `<a href="Sell-Game-Receipt.html" class="add-to-cart" id="btnDisabled">Sell</a>`;
        form.reset();
    } 
}

console.log("hello");

sellGameForm.addEventListener("change", validateSellGameForm)

function validateAccountNumber(accountNumber) {
    /* const whitespaceFix = /\s/g, "" */
    const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    const mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
    const amexpRegEx = /^(?:3[47][0-9]{13})$/;
    const discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;

    const patternMatches = visaRegEx.test(accountNumber) || mastercardRegEx.test(accountNumber) || amexpRegEx.test(accountNumber) || discovRegEx.test(accountNumber);
    return patternMatches;
}