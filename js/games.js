import { gamesArray } from "../js/constants/gamesArray.js";

const allGames = document.querySelector(".grid-order");
const discountRemoval = document.querySelector(".removeDiv");

for (let i = 0; i < gamesArray.length; i++) {

    /* if (gamesArray[i].discount === "") {
        allGames[i].discount.remove().classlist("discount");
    } */
    
    allGames.innerHTML += 
    `<div class="product">
        <div class="product-image">
        <img src="${gamesArray[i].image}" alt="${gamesArray[i].description}">
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
            <button id="gamesSpecificCta" class="add-to-cart">Add to cart</button>
        </div>
    </div>
    `
}

console.log(gamesArray);