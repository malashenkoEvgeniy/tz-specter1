'use strict';
let phoneBtn = document.querySelector('.header-phone-btn');
let phoneNumber = document.querySelector('.header-phone-number');
phoneBtn.addEventListener('click', function (){
    phoneNumber.classList.toggle('not-visible');
});

let headerMenuBtn = document.querySelector('.header-menu-btn');
let navMenu = document.querySelector('.nav-menu');
let menuBtnBoorger = document.querySelector('.menu-btn-boorger');
let menuBtnClose = document.querySelector('.menu-btn-close');

headerMenuBtn.addEventListener('click', function () {
    navMenu.classList.toggle('not-visible');
    menuBtnBoorger.classList.toggle('not-visible');
    menuBtnClose.classList.toggle('not-visible');
});