import { gamesArray } from "../js/constants/gamesArray.js";

const popularContainer = document.querySelector(".Popular");
const dealsContainer = document.querySelector(".Deals");

for (let i = 0; i < gamesArray.length; i++) {

if (gamesArray[i].popular === false) {
    continue;
}

    popularContainer.innerHTML += 
    `<div class="Popular__Products">
        <label for="console"><i class="fas fa-gamepad console-icon"></i></label>
        <label for="pc"><i class="fas fa-desktop pc-icon"></i></label>
        <img src="${gamesArray[i].image}" alt="${gamesArray[i].description}" onclick="location.href='#';" style="cursor: pointer">
        <p>$ ${gamesArray[i].price}</p>
        <button class="add-to-cart increment" data-product="${gamesArray[i].id}">Add to cart</button>
    </div>
    `
}

for (let i = 0; i < gamesArray.length; i++) {

    if (gamesArray[i].oldPrice === "") {
        continue;
    }

    dealsContainer.innerHTML +=
    `<div class="Deals__Products">
        <label for="console"><i class="fas fa-gamepad console-icon"></i></label>
        <label for="pc"><i class="fas fa-desktop pc-icon"></i></label>
        <img src="${gamesArray[i].image}" alt="${gamesArray[i].description}" onclick="location.href='#';" style="cursor: pointer">
        <p><span class="old-price">${gamesArray[i].oldPrice}</span> $${gamesArray[i].price}</p>
        <button class="add-to-cart increment" data-product="${gamesArray[i].id}">Add to cart</button>
    </div>
    `
}

/* let count = 0;
const countButton = document.querySelector(".increment");
const value = document.querySelector(".counter");

countButton.onclick = function(){
    count++;
    value.innerHTML = `<a href="Checkout/Checkout.html"><i class="fas fa-shopping-cart"></i>${count}</a>`;
}; */

const cart = document.querySelector(".cart");
const cartList = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");

let cartArray = [];

const buttons = document.querySelectorAll("button");
buttons.forEach(function(button){
    button.onclick = function(event) {
        const itemToAdd = gamesArray.find(item => item.id === event.target.dataset.product);
        cartArray.push(itemToAdd);
        /* console.log(cartArray); */
        showCart(cartArray);
        localStorage.setItem("cartList", JSON.stringify(cartArray));
    }
});

function showCart(cartItems) {
    cart.style.display = "flex"
    cartList.innerHTML = "";
    let total = 0;
    cartItems.forEach(function(cartElement){
        total += cartElement.price;
        total = Math.round(total * 100) / 100;
        cartList.innerHTML += 
        `<div class="cart-item">
            <h4>${cartElement.name}</h4>
            <img src="${cartElement.image}" alt="${cartElement.description}" class="cart-image">
        </div>
        `
    })
    totalContainer.innerHTML = `Total: $ ${total}`;
}
