console.log("hello")

const paymentForm = document.querySelector(".payment-form");
const paymentCtaForm = document.querySelector(".payment-cta-form");

const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");

const accountNumber = document.querySelector("#accountNumber");
const accountNumberError = document.querySelector("#accountNumberError");

const expDate = document.querySelector("#expDate");
const expDateError = document.querySelector("#expDateError");

const cvc = document.querySelector("#cvc");
const cvcError = document.querySelector("#cvcError");

const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");

const city = document.querySelector("#city");
const cityError = document.querySelector("#cityError");

const paymentDisabled = document.querySelector(".paymentDisabled");
const btnDisabled = document.querySelector("#btnDisabled");

paymentCtaForm.innerHTML = `<p>Total: <span>$29.99</span></p>
                            <div class="add-to-cart-grey">Pay</div>
                            `


function validatePaymentForm(event) { 
    event.preventDefault();

    if (fullName.value.trim().length > 0) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }

    if (accountNumber.value.trim().length === 16) {
        accountNumberError.style.display = "none";
    } else {
        accountNumberError.style.display = "block";
    }

    if (expDate.value.trim().length === 4) {
        expDateError.style.display = "none";
    } else {
        expDateError.style.display = "block";
    }

    if (cvc.value.trim().length === 3) {
        cvcError.style.display = "none";
    } else {
        cvcError.style.display = "block";
    }

    if (address.value.trim().length > 0) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }

    if (city.value.trim().length > 0) {
        cityError.style.display = "none";
    } else {
        cityError.style.display = "block";
    }

    if (fullName.value.trim().length > 0 && accountNumber.value.trim().length === 16 && expDate.value.trim().length === 4 && cvc.value.trim().length === 3 && address.value.trim().length > 0 && city.value.trim().length > 0) {
        paymentCtaForm.innerHTML = `
                                    <p>Total: <span>$29.99</span></p>
                                    <a href="Order-complete.html" class="add-to-cart">Pay</a>
                                    `
      form.reset();
    } else {
        paymentCtaForm.innerHTML = `<p>Total: <span>$29.99</span></p>
                            <div class="add-to-cart-grey">Pay</div>
                            `
    }   
}

paymentForm.addEventListener("change", validatePaymentForm);