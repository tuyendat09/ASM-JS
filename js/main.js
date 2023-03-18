// SLIDER
const sliderImg = document.querySelectorAll(".slider-img");
const imgWidth = document.querySelector(".slider-img").clientWidth;
const slider = document.querySelector(".slider-inner");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
console.log(nextBtn)

let current = 1;
slider.style.transform = `translateX(${-imgWidth}px)`;

     let autoSlide = setInterval(() => {
        if (current >= sliderImg.length - 1) return;
        slider.style.transition = '.7s ease-in-out transform';
        current++;
        slider.style.transform = `translateX(${-imgWidth * current}px)`;
    },3000)

prevBtn.addEventListener('click', () => {
    if (current <= 0) return;
    slider.style.transition = '.7s ease-in-out transform';
    current--;
    slider.style.transform = `translateX(${-imgWidth * current}px)`;
    clearInterval(autoSlide);
    setTimeout(autoSlide,10000)
})

nextBtn.addEventListener('click', () => {
    if (current >= sliderImg.length - 1) return;
    slider.style.transition = '.7s ease-in-out transform';
    current++;
    slider.style.transform = `translateX(${-imgWidth * current}px)`;
    clearInterval(autoSlide);
    setTimeout(autoSlide,10000)
})

slider.addEventListener('transitionend', () => {
    if (sliderImg[current].classList.contains('first-img')) {
        slider.style.transition = 'none';
        current = sliderImg.length - 2;
        slider.style.transform = `translateX(${-imgWidth * current}px)`;
        console.log('true-frist');

    }

    if (sliderImg[current].classList.contains('last-img')) {
        slider.style.transition = 'none';
        
        current = sliderImg.length - current;
        slider.style.transform = `translateX(${-imgWidth * current}px)`;
        console.log('true-last');
    }
})
// SLIDER


