

let cart = [];

function addToCart(name, price) {

    cart.push({ name, price });

    updateCart();

}

function updateCart() {

    let cartItems = document.getElementById("cart-items");
    let cartCount = document.getElementById("cart-count");
    let cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(item => {

        cartItems.innerHTML += `
            <p>${item.name} - $${item.price}</p>
        `;

        total += item.price;

    });

    cartCount.innerText = cart.length;
    cartTotal.innerText = total;

}

function toggleCart() {

    let panel = document.getElementById("cart-panel");

    if (panel.style.display === "none") {
        panel.style.display = "block";
    } else {
        panel.style.display = "none";
    }

}
