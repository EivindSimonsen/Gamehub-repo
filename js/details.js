import { gamesArray } from "../js/constants/gamesArray.js";

const detailsContainer = document.querySelector(".product-size");

for (let i = 0; i < gamesArray.length; i++) {
    detailsContainer.innerHTML += `
    <div class="product">
        <div class="product-image">
        <img src="${gamesArray[i].image}" alt="${gamesArray[i].description}">
        </div>
        <div class="product-info">
            <p>${gamesArray[i].name}<p>
            <label for="console"><i class="fas fa-gamepad"></i></label>
            <label for="pc"><i class="fas fa-desktop"></i></label>
            <p><span>${gamesArray[i].price}</span></p>
            <button class="add-to-cart" data-product="${gamesArray[i].id}">Add to cart</button>
            <p class="wrap">${gamesArray[i].description}</p>
        </div>
    </div>
    `;
}

let cartArray = [];

const buttons = document.querySelectorAll("button");
buttons.forEach(function(button){
    button.onclick = function(event) {
        const itemToAdd = gamesArray.find(item => item.id === event.target.dataset.product);
        cartArray.push(itemToAdd);
        console.log(cartArray);
        localStorage.setItem("cartList", JSON.stringify(cartArray));
    }
});