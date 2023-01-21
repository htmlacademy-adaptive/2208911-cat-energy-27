let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let siteList = document.querySelector('.site-list');
let mainHeader = document.querySelector('.main-header');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    siteList.classList.remove('site-list--none');
    mainHeader.classList.remove('main-header--margin-bottom');

  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    siteList.classList.add('site-list--none');
    mainHeader.classList.add('main-header--margin-bottom');
  }
});

// Оживление слайдера

const slider = document.querySelector(".slider");
const curtain = slider.querySelector(".slider__button");
let sliderStyles = getComputedStyle(slider);
let curtainPlaceStart;
let clientX;

function handleGrabCurtain (event) {
  curtainPlaceStart = +(sliderStyles.getPropertyValue("--curtain-place"));
  clientX = event.clientX;
  window.addEventListener("pointermove", handleMoveCurtain);
};

function handleMoveCurtain (event) {
  let deltaX = event.clientX - clientX;
  let cursorPlace = curtainPlaceStart + deltaX / slider.clientWidth;
  let curtainPlace = Math.min(Math.max(cursorPlace, 0), 1);
  slider.style.setProperty("--curtain-place", `${curtainPlace}`);
};

function handleReleaseCurtaine (event) {
  window.removeEventListener("pointermove", handleMoveCurtain);
};

window.addEventListener("pointerup", handleReleaseCurtaine);

curtain.addEventListener("pointerdown", handleGrabCurtain);
