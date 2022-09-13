let slides = document.getElementsByClassName("slider__slide");
let navLinks = document.getElementsByClassName("slider__navlink");

let currentSlide = 0;
document.getElementById("nav-button--prev").addEventListener('click', () => {
    changeSlide(currentSlide - 1);
});

document.getElementById("nav-button--next").addEventListener('click', () => {
    changeSlide(currentSlide + 1);
});

function changeSlide(moveTo) {
    if (moveTo >= slides.length) {moveTo = 0;}
    if (moveTo < 0) {moveTo = slides.length - 1;}
    
    slides[currentSlide].classList.toggle("active");
    navLinks[currentSlide].classList.toggle("active");
    slides[moveTo].classList.toggle("active");
    navLinks[moveTo].classList.toggle("active");
    
    currentSlide = moveTo;
};