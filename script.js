// Slideshow
let index = 0;
function showSlides() {
    let slides = document.querySelectorAll(".slide");
    slides.forEach(slide => slide.classList.remove("active"));

    index++;
    if (index > slides.length) index = 1;

    slides[index - 1].classList.add("active");
    setTimeout(showSlides, 3000);
}

window.onload = showSlides;

// Button interaction
function buyItem(name) {
    alert(name + " added to cart 🛒");
}
