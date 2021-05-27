import { gamesArray } from "../constants/gamesArray.js";

const allGames = document.querySelector(".grid-order");

for (let i = 0; i < gamesArray.length; i++) {

    allGames.innerHTML += 
    `<div class="product">
        <div class="product-image">
        <img src="${gamesArray[i].image}" alt="${gamesArray[i].description}"onclick="location.href='../../Checkout/Checkout.html';" style="cursor: pointer">
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
            <button id="gamesSpecificCta" class="add-to-cart increment">Add to cart</button>
        </div>
    </div>
    `
}

let count = 0;
const countButton = document.querySelector(".increment");
const value = document.querySelector(".counter");

countButton.onclick = function(){
    count++;
    value.innerHTML = `<a href="Checkout/Checkout.html"><i class="fas fa-shopping-cart"></i>${count}</a>`;
}

console.log(gamesArray);