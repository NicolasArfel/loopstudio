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

window.addEventListener('resize', resize);

function resize() {
  if (window.innerWidth < 600) {
    document.querySelector('.img1').src = '/images/mobile/image-deep-earth.jpg';
    document.querySelector('.img2').src =
      '/images/mobile/image-night-arcade.jpg"';
    document.querySelector('.img3').src =
      '/images/mobile/image-soccer-team.jpg';
    document.querySelector('.img4').src = '/images/mobile/image-grid.jpg';
    document.querySelector('.img5').src = '/images/mobile/image-from-above.jpg';
    document.querySelector('.img6').src =
      '/images/mobile/image-pocket-borealis.jpg';
    document.querySelector('.img7').src = '/images/mobile/image-curiosity.jpg';
    document.querySelector('.img8').src = '/images/mobile/image-fisheye.jpg';
  } else {
    document.querySelector('.img1').src =
      '/images/desktop/image-deep-earth.jpg';
    document.querySelector('.img2').src =
      '/images/desktop/image-night-arcade.jpg"';
    document.querySelector('.img3').src =
      '/images/desktop/image-soccer-team.jpg';
    document.querySelector('.img4').src = '/images/desktop/image-grid.jpg';
    document.querySelector('.img5').src =
      '/images/desktop/image-from-above.jpg';
    document.querySelector('.img6').src =
      '/images/desktop/image-pocket-borealis.jpg';
    document.querySelector('.img7').src = '/images/desktop/image-curiosity.jpg';
    document.querySelector('.img8').src = '/images/desktop/image-fisheye.jpg';
  }
}
