// Loader + Page Fade
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
    const loader = document.getElementById("loader");
    if(loader){
        loader.style.opacity = "0";
        setTimeout(()=> loader.style.display="none", 800);
    }
});

// Page transitions
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();
        const href = this.href;
        document.body.classList.remove("loaded");
        setTimeout(()=> window.location.href = href, 500);
    });
});

// Cart System
let cart = JSON.parse(localStorage.getItem("cart")) || [];
function addToCart(item){
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(item + " added to cart!");
}

// Image switch for gallery
function changeImage(img){
    document.getElementById("mainImage").src = img.src;
}