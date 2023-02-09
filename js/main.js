/* Nav icon */
document.addEventListener('DOMContentLoaded', () => {
    const btnMobile = document.querySelector('.mobile-container__menu');
    const navMobile = document.querySelector('.mobile-container__list');

    btnMobile.addEventListener('click', () => {
        navMobile.classList.toggle('mobile-container__list__active');
    });
})
