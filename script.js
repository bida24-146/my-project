function showMessage(product) {
    alert(product + " added to cart 🛒");
}

/* Simple futuristic text animation */
window.onload = () => {
    const title = document.querySelector(".hero h2");
    if (title) {
        let text = title.innerText;
        title.innerText = "";

        let i = 0;
        let interval = setInterval(() => {
            title.innerText += text[i];
            i++;
            if (i === text.length) clearInterval(interval);
        }, 50);
    }
};
function scrollToSection() {
    document.getElementById("shop").scrollIntoView({
        behavior: "smooth"
    });
}
