import '../scss/style.scss'

const iconMenu = document.querySelector('.icon-menu');
const headerMenu = document.querySelector('.header__menu');

iconMenu.addEventListener('click', () => {
  headerMenu.classList.toggle('menu-open');
  iconMenu.classList.toggle('menu-open');
});

const header = document.querySelector('.header');

window.addEventListener("scroll", function(){
  if(window.scrollY==0){
    header.classList.remove('fixed');
  } else {
    header.classList.add('fixed');
  }
});