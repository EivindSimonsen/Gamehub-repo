// Form script

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

paymentCtaForm.innerHTML = `
                            <div class="add-to-cart-grey">Pay</div>
                            `


function validatePaymentForm(event) { 
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

    if (validateExpDate(expDate.value.trim()) === true) {
        expDateError.style.display = "none";
    } else {
        expDateError.style.display = "block";
    }

    if (validateCvc(cvc.value.trim()) === true) {
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

    if (fullName.value.trim().length > 0 && validateAccountNumber(accountNumber.value.trim().replace(/\s/g, "")) === true && validateExpDate(expDate.value.trim()) === true && validateCvc(cvc.value.trim()) === true && address.value.trim().length > 0 && city.value.trim().length > 0) {
        paymentCtaForm.innerHTML = `
                                    <a href="Order-complete.html" class="add-to-cart">Pay</a>
                                    `
      form.reset();
    } else {
        paymentCtaForm.innerHTML = `
                            <div class="add-to-cart-grey">Pay</div>
                            `
    }   
}

paymentForm.addEventListener("change", validatePaymentForm);

function validateAccountNumber(accountNumber) {
    const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    const mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
    const amexpRegEx = /^(?:3[47][0-9]{13})$/;
    const discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;

    const patternMatches = visaRegEx.test(accountNumber) || mastercardRegEx.test(accountNumber) || amexpRegEx.test(accountNumber) || discovRegEx.test(accountNumber);
    return patternMatches;
}

function validateExpDate(expDate) {
    const expRegex = /^(0[1-9]|1[0-2])\/?(([0-9]{4}|[0-9]{2})$)/;

    const patternMatches = expRegex.test(expDate);
    return patternMatches;
}

function validateCvc(cvc) {
    const cvcRegEx = /^[0-9]{3,4}$/;

    const patternMatches = cvcRegEx.test(cvc);
    return patternMatches;
}

// Cart script

const cartItems = JSON.parse(localStorage.getItem("cartList"));
const cartContainer = document.querySelector(".payment");
const totalContainer = document.querySelector(".payment-cta");

let total = 0;
cartItems.forEach(function(cartElement){
    total += cartElement.price
    total = Math.round(total * 100) / 100;
    cartContainer.innerHTML += 
    `<section>
    <div class="payment-image">
        <img src="${cartElement.image}" class="cart-image">
    </div>
    <div class="payment-info">
        <p class="larger">${cartElement.name}</p>
        <p class="larger">Physical edition</p>
        <p>${cartElement.description}</p>
        <p class="larger"><span>${cartElement.price}</span></p>
    </div>
    </section>
    `
})
totalContainer.innerHTML = `<div>
                                <p>Total: <span>$${total}</span></p>
                            </div>

`;

