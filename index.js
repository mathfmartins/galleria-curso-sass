const menu = document.querySelector('.menu-icon')
const nav = document.querySelector('.header__navbar')
const ul = document.querySelector('.header__ul')
menu.addEventListener('click', () => {
    ul.classList.toggle('active-menu')
    nav.classList.toggle('active-menu')
})