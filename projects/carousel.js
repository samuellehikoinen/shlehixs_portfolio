"use strict";

const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange the slides next to one another 
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

// Right button
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    console.dir(currentSlide.parentElement.childElementCount);
    console.dir(currentSlide.nextElementSibling == null ? true : false);
    const targetSlide = currentSlide.nextElementSibling == null ? slides[0] : currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetDot = currentDot.nextElementSibling == null ? dots[0] : currentDot.nextElementSibling;

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
});

// Left button
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const targetSlide = currentSlide.previousElementSibling == null ? slides[currentSlide.parentElement.childElementCount - 1] : currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetDot = currentDot.previousElementSibling == null ? dots[currentDot.parentElement.childElementCount - 1] : currentDot.previousElementSibling;

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
});

// Dot nav
dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');
    if (!targetDot) return;
    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);

    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
});
