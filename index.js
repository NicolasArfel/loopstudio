let toggle = false;
const toggleButton = document.querySelector('.toggle-button');
const menu = document.querySelector('.menu');
const nav = document.querySelector('.navbar');

function toggleMenu() {
  menu.classList.toggle('active');
  nav.classList.toggle('active');
  if (toggle) {
    toggleButton.src = './images/icon-hamburger.svg';
  } else {
    toggleButton.src = './images/icon-close.svg';
  }
  toggle = !toggle;
  console.log(toggle);
}

toggleButton.addEventListener('click', toggleMenu);

function changeNavBarBackground() {
  if (window.scrollY >= 200) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}
window.addEventListener('scroll', changeNavBarBackground);
