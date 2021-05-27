import { gamesArray } from "../constants/gamesArray.js";

const preOrder = document.querySelector(".grid-order")

for (let i = 0; i < gamesArray.length; i++) {
  
    if (gamesArray[i].preOrder === false) {
      continue;
    }
    
    preOrder.innerHTML += 
    `<div class="product">
        <div class="product-image">
        <img src="${gamesArray[i].image}" alt="${gamesArray[i].description}" onclick="location.href='../../Checkout/Checkout.html';" style="cursor: pointer">
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
              <button id="gamesSpecificCta" class="add-to-cart increment" data-product="${gamesArray[i].id}">Add to cart</button>
        </div>
    </div>
    `
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