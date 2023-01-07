const menu  = document.querySelector('.menu');
const dropdown = document.querySelector('.navlist1');
const left = document.querySelectorAll('.left');
const right = document.querySelector('.right')
const track = document.querySelector('.carousel_track-container');
const slides = Array.from(track.children)
const slideWidth = slides[0].getBoundingClientRect().width;

slides.forEach((slide, index) =>{
    slide.style.left = slideWidth * index + 'px';
})
function moveRight(){
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const amountTomove = nextSlide.style.left;
    track.style.transform = 'translateX(-' + amountTomove + ')';
    currentSlide.classList.remove('current-slide');
    nextSlide.classList.add('current-slide');
}
function moveLeft(){
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    track.style.transform = 'translateX(-' + prevSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    prevSlide.classList.add('current-slide');
}
function drop(){
    if(dropdown.style.height < '1'){
        dropdown.style.height = '100vh'
        dropdown.style.display = 'flex'
    }
    else{
        dropdown.style.height = '0'
    }
}