// 🔥 PAGE LOAD + LOADER
window.addEventListener("load", () => {
    document.body.classList.add("loaded");

    setTimeout(() => {
        document.getElementById("loader").style.opacity = "0";
    }, 800);

    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 1500);
});

// 🔄 PAGE TRANSITIONS
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const href = this.href;

        document.body.classList.remove("loaded");

        setTimeout(() => {
            window.location.href = href;
        }, 500);
    });
});

// 🛒 CART SYSTEM
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(item) {
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(item + " added to cart!");
}

// 🖼 IMAGE SWITCH
function changeImage(img) {
    document.getElementById("mainImage").src = img.src;
}