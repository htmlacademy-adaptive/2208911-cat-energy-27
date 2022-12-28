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
