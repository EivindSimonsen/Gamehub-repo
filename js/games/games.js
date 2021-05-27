import { gamesArray } from "../constants/gamesArray.js";

const allGames = document.querySelector(".grid-order");
const value = document.querySelector(".counter");

for (let i = 0; i < gamesArray.length; i++) {

    allGames.innerHTML += 
    `<div class="product">
        <div class="product-image">
        <img src="${gamesArray[i].image}" alt="${gamesArray[i].description}"onclick="location.href='../../details.html';" style="cursor: pointer">
        </div>
        <div class="product-info">
            <p>${gamesArray[i].name}
            <div class="product-info--sale">
              <p class="old-price">${gamesArray[i].oldPrice}</p>
              <p>${gamesArray[i].price}</p>
            </div>
            <div class="removeDiv">
                <span class="discount">${gamesArray[i].discount}</span>
              </div>
            <button id="gamesSpecificCta" class="add-to-cart" data-product="${gamesArray[i].id}">Add to cart</button>
        </div>
    </div>
    `
}

let cartArray = [];
let count = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach(function(button){
    count++;
    button.onclick = function(event) {
        value.innerHTML = `<a href="../Checkout/Checkout.html"><i class="fas fa-shopping-cart"></i>${count}</a>`;
        const itemToAdd = gamesArray.find(item => item.id === event.target.dataset.product);
        cartArray.push(itemToAdd);
        console.log(cartArray);
        localStorage.setItem("cartList", JSON.stringify(cartArray));
    }
});

console.log(gamesArray);

