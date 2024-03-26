const slider = document.querySelector('.slider');
const sliderBottom = document.querySelector('.slider__bottom');
const sliderTop = document.querySelector('.slider__top');
const sliderCount = sliderTop.querySelectorAll('div').length;
let activeSlideIndex = 0;

const leftButton = document.querySelector('.left-btn');
const rightButton = document.querySelector('.right-btn');

sliderBottom.style.width = `${sliderCount*100}vw`;
sliderTop.style.width = `${sliderCount*100}vw`;

sliderBottom.style.left = `-${(sliderCount - 1)*100}vw`;


leftButton.addEventListener('click', function() {
    nextSlide('left');
});

rightButton.addEventListener('click', function() {
    nextSlide('right');
});

function nextSlide(direction) {
    if (direction === 'right') {
        activeSlideIndex--;
        
        if(activeSlideIndex < 0) {
            activeSlideIndex = sliderCount - 1;
        }
    } else if (direction === 'left') {
        activeSlideIndex++;
        
        if(activeSlideIndex === sliderCount) {
            activeSlideIndex = 0;
        };
    }

    const widthWindow = slider.clientWidth;

    sliderTop.style.transform = `translateX(-${activeSlideIndex*widthWindow}px)`;
    sliderBottom.style.transform = `translateX(${activeSlideIndex*widthWindow}px)`;
};