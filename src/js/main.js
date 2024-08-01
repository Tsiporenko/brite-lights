import '../scss/style.scss'

const iconMenu = document.querySelector('.icon-menu');
const headerMenu = document.querySelector('.header__menu');

iconMenu.addEventListener('click', () => {
  headerMenu.classList.toggle('menu-open');
  iconMenu.classList.toggle('menu-open');
});