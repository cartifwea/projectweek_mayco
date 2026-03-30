let cart = [];

function addToCart(name, price) {

    cart.push({ name, price });

    updateCart();
}

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();

    localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCart() {

    let cartItems = document.getElementById("cart-items");
    let cartCount = document.getElementById("cart-count");
    let cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        cartItems.innerHTML += `
            <div class="cart-item">
                <span>${item.name} - $${item.price}</span>
                <button onclick="removeFromCart(${index})" class="remove-btn">X</button>
            </div>
        `;

        total += item.price;
    });

    cartCount.innerText = cart.length;
    cartTotal.innerText = total.toFixed(2);
}

function toggleCart() {

    let panel = document.getElementById("cart-panel");

    if (panel.style.display === "none" || panel.style.display === "") {
        panel.style.display = "block";
    } else {
        panel.style.display = "none";
    }
}

function addToCart(name, price) {

    cart.push({ name, price });

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCart();
}

document.querySelectorAll(".product-window").forEach(makeDraggable);

function makeDraggable(windowElement) {

    let header = windowElement.querySelector(".product-header");

    let offsetX = 0;
    let offsetY = 0;
    let isDragging = false;

    header.addEventListener("mousedown", function (e) {

        isDragging = true;

        offsetX = e.clientX - windowElement.offsetLeft;
        offsetY = e.clientY - windowElement.offsetTop;

        windowElement.style.position = "absolute";
        windowElement.style.zIndex = 1000;
    });

    document.addEventListener("mousemove", function (e) {

        if (isDragging) {

            windowElement.style.left = e.clientX - offsetX + "px";
            windowElement.style.top = e.clientY - offsetY + "px";
        }
    });

    document.addEventListener("mouseup", function () {

        isDragging = false;
    });
}

let ads = [
    "fotos/ad1.png",
];

function createAd() {

    let container = document.getElementById("ads-container");

    let popup = document.createElement("div");
    popup.className = "popup-ad";

    let randomAd = ads[Math.floor(Math.random() * ads.length)];

    let screenWidth = window.innerWidth - 350;
    let screenHeight = window.innerHeight - 250;

    let randomX = Math.random() * screenWidth;
    let randomY = Math.random() * screenHeight;

    popup.style.left = randomX + "px";
    popup.style.top = randomY + "px";

    popup.innerHTML = `
        <div class="popup-header">
            <span>Advertisement</span>
            <button class="close-btn">X</button>
        </div>

        <div class="popup-body">
            <img src="${randomAd}">
            <p>Buy stumpOS premium now!</p>
        </div>
    `;

    popup.querySelector(".close-btn").onclick = function () {
        popup.remove();
    };

    container.appendChild(popup);
}

function randomAdLoop() {

    createAd();

    let time = Math.random() * 15000 + 10000;

    setTimeout(randomAdLoop, time);
}

setTimeout(randomAdLoop, 5000);