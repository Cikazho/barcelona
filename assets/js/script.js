let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

const inputs = document.querySelectorAll(".input");

// Get the topbar element
const topbar = document.getElementById("topbar");

// Function to add 'scrolled' class when page is scrolled
window.onscroll = function() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    topbar.classList.add("scrolled");
  } else {
    topbar.classList.remove("scrolled");
  }
};