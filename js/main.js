/* Nav icon */

const navBtn = document.querySelector('.nav__toggle');
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.nav');


navBtn.onclick = function(){
    nav.classList.toggle('nav--mobile');
    menuIcon.classList.toggle('menu-icon-active');
    document.body.classList.toggle('no-scroll');
};
