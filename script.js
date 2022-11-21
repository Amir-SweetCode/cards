const slides = document.querySelectorAll('.slide');

for (const slide of slides) {
    slide.addEventListener('click', () => {
        closeSlides();
        slide.classList.add('active');
    })
}

function closeSlides() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    })
}