// Cart script

const cartItems = JSON.parse(localStorage.getItem("cartList"));
const cartContainer = document.querySelector(".payment");
const totalContainer = document.querySelector(".payment-cta");
const value = document.querySelector(".counter");

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
                                <a href="Payment.html" class="add-to-cart">Checkout</a>
                            </div>

`;

