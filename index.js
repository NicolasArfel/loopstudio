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
}

toggleButton.addEventListener('click', toggleMenu);
