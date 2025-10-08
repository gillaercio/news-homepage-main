const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector(".header__nav");
const menuIcon = document.getElementById('menu-icon');

let isOpen = false;

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');

  isOpen = !isOpen;
  if (isOpen) {
    menuIcon.src = 'assets/images/icon-menu-close.svg';
    menuIcon.alt = 'Close menu';
  } else {
    menuIcon.src = 'assets/images/icon-menu.svg';
    menuIcon.alt = 'Open menu';
  }
})