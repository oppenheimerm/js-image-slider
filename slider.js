
const leftArrowButton = document.getElementById("left-slide-button");
const rightArrowButton = document.getElementById("right-slide-button");
// get slider images
const sliderImages = document.querySelectorAll(".slider-image");
//  imageSlider and SimageSliderWrap are the same thing, but
//  I need to refere to them via different means
const imageSlider = document.querySelector(".slider");
const imageSliderWrap = document.getElementById("imageSliderWrap");

let slideNumber = 1;
//  HTMLElement: offsetWidth property
//  The HTMLElement.offsetWidth read-only property returns the layout width 
//  of an element as an integer.
let translateXFactor = imageSliderWrap.offsetWidth;


rightArrowButton.addEventListener("click", () =>{
    slideNumber < sliderImages.length ? nextSlide() : getFirstSlide();
});

leftArrowButton.addEventListener("click", () =>{
   slideNumber > 1 ? previousSlide() : getLastSlide();
});


const nextSlide = () => {
    /* 
        Remembe: Template literals are enclosed in backticks (`) instead 
        of single or double quotes.  
    */
    imageSlider.style.transform = `translateX(-${slideNumber*translateXFactor}px)`;
    slideNumber++;
}


const previousSlide = () => {
    /* 
        Remembe: Template literals are enclosed in backticks (`) instead 
        of single or double quotes.  
    */
    imageSlider.style.transform = `translateX(-${((slideNumber - 2) * translateXFactor)}px)`;
    slideNumber--;
}

const getFirstSlide = () => {
    imageSlider.style.transform = `translateX(0px)`;
    slideNumber = 1;
}

const getLastSlide = () => {
    imageSlider.style.transform = `translateX(${(sliderImages - 1) * translateXFactor}px)`;
    slideNumber = sliderImages;
}

