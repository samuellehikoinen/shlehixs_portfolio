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


/**
 * Displays the selected slide
 * @param {object} track 
 * @param {object} currentSlide 
 * @param {object} targetSlide 
 */
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
    changeDetails(targetSlide);
}


/**
 * Highlights the selected dot
 * @param {object} currentDot 
 * @param {object} targetDot 
 */
const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}


/**
 * Right button event listener
 */
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    // console.dir(currentSlide.parentElement.childElementCount);
    // console.dir(currentSlide.nextElementSibling == null ? true : false);
    const targetSlide = currentSlide.nextElementSibling == null ? slides[0] : currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetDot = currentDot.nextElementSibling == null ? dots[0] : currentDot.nextElementSibling;

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
});


/**
 * Left button event listener
 */
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const targetSlide = currentSlide.previousElementSibling == null ? slides[currentSlide.parentElement.childElementCount - 1] : currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetDot = currentDot.previousElementSibling == null ? dots[currentDot.parentElement.childElementCount - 1] : currentDot.previousElementSibling;

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
});


/**
 * Dot nav event listener
 */
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


/**
 * Changes project header and description when the project is selected
 * @param {object} targetSlide 
 */
const changeDetails = (targetSlide) => {
    var targetIndex = slides.indexOf(targetSlide);
    const projectHeader = document.querySelector('.project-header');
    const projectDescription = document.querySelector('.project-description');
    switch (targetIndex) {
        case 0: // Oura
            projectHeader.textContent = "Oura Health Checker";
            projectDescription.textContent = "Oura tracker is created to quickly check personal health status from terminal.";
            viewTechnologies('oura-technologies');
            break;
        case 1: // Portfolio
            projectHeader.textContent = "Portfolio";
            projectDescription.textContent = "This portfolio is created to document my career path, display project samples and skills in a modern UI that I like.";
            viewTechnologies('portfolio-technologies');
            break;
        case 2: // Faceit Stat Finder
            projectHeader.textContent = "Faceit Stat Finder";
            projectDescription.textContent = "Faceit Stat Finder helps user to find Counter-Strike Global Offensive Faceit information of players on the server quickly all in one place."
            viewTechnologies('fsc-technologies');
            break;
        default:
            console.log(`Sorry, we can't find ${targetIndex}.`);
    }
}


/**
 * Display technologies used in project
 * @param {string} cssClass 
 */
const viewTechnologies = (cssClass) => {
    const technologies = document.querySelectorAll('.technology-project');
    for (var i = 0; i < technologies.length; i++) {
        technologies[i].classList.add('hidden');
    }

    try {
        const visibleTechnology = document.querySelector(`.${cssClass}`);
        visibleTechnology.classList.remove('hidden');
    } catch (error) {
        console.dir(`An error occured: ${error}`);
    }
}