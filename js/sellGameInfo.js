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

    if (accountNumber.value.trim().length === 11) {
        accountNumberError.style.display = "none";
    } else {
        accountNumberError.style.display = "block";
    }

    if (address.value.trim().length > 0) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }

    if (fullName.value.trim().length > 0 && accountNumber.value.trim().length === 11 && address.value.trim().length > 0) {
        linkDisabled.innerHTML = `<a href="Sell-Game-Receipt.html" class="add-to-cart" id="btnDisabled">Sell</a>`;
        form.reset();
    } 
}

console.log("hello");

sellGameForm.addEventListener("change", validateSellGameForm)