const slides = document.querySelectorAll('.image-to-show');
let currentSlide = 0;
let isSliderActive = true;

function showNextImage() {
    if(!isSliderActive) return;
    slides[currentSlide].classList.remove('image-visible');
    setTimeout(() => {
        slides[currentSlide].style.display = 'none';
        currentSlide++;
        if(currentSlide === slides.length) {
            currentSlide = 0;
        }
        slides[currentSlide].classList.add('image-visible');
        slides[currentSlide].style.display = 'block';
    }, 500)
}


slides[0].style.display = 'block';
setInterval(showNextImage, 3000);

document.querySelector('.pauseBtn').addEventListener('click', () => {
    isSliderActive = false;
});

document.querySelector('.continueBtn').addEventListener('click', () => {
    isSliderActive = true;
});


