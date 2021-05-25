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
        <img src="${gamesArray[i].image}" alt="${gamesArray[i].description}" onclick="location.href='Checkout/Checkout.html';" style="cursor: pointer">
        <p>${gamesArray[i].price}</p>
        <button class="add-to-cart">Add to cart</button>
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
        <img src="${gamesArray[i].image}" alt="${gamesArray[i].description}" onclick="location.href='Checkout/Checkout.html';" style="cursor: pointer">
        <p><span class="old-price">${gamesArray[i].oldPrice}</span> ${gamesArray[i].price}</p>
        <button class="add-to-cart">Add to cart</button>
    </div>
    `
}

/* const detailsLink = document.querySelector(".Popular__Products");

detailsLink.addEventListener("onclick" )

function details() {
    detailsLink.innerHTML += `<a href`
} */

console.log(gamesArray);